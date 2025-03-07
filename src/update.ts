import { arrayMap } from "@vangware/utils";
import { writeFile } from "fs";
import fetch from "node-fetch";
import { promisify } from "util";
import baseTheme from "./base/baseTheme";
import colorRegistry from "./base/colorRegistry";
import editorColorRegistry from "./base/editorColorRegistry";
import exceptionWidget from "./base/exceptionWidget";
import suggestWidget from "./base/suggestWidget";
import { closestMaterial } from "./closestMaterial";
import { DARK_PLUS, DARK_VS } from "./config";
import colorMap from "./config/colorMap";
import notAllowedOrDeprecated from "./config/notAllowedOrDeprecated";
import opacityMap from "./config/opacityMap";
import { colorFormatter, removeDuplicatedColors, replaceColors } from "./utils";
import { jsonParsePromise } from "./utils/jsonParsePromise";

/**
 * Promisified fs.writeFile.
 */
const writeFileAsync = promisify(writeFile);

Promise.all([
	baseTheme,
	editorColorRegistry,
	colorRegistry,
	exceptionWidget,
	suggestWidget,
	...[DARK_VS, DARK_PLUS].map(url =>
		fetch(url)
			.then(response => response.text())
			.then(responseText => {
				console.log(`Parsing ${url} . . .`);
				return jsonParsePromise(responseText);
			})
	)
])
	.then(
		([
			baseThemeResponse,
			colorRegistryResponse,
			editorColorRegistryResponse,
			exceptionWidgetResponse,
			suggestWidgetResponse,
			vs,
			plus
		]) => ({
			defaults: {
				...baseThemeResponse,
				...colorRegistryResponse,
				...editorColorRegistryResponse,
				...exceptionWidgetResponse,
				...suggestWidgetResponse
			},
			plus: plus.tokenColors,
			vs: vs.tokenColors
		})
	)
	.then(({ defaults, vs, plus }) => ({
		colors: Object.keys(defaults)
			.filter(
				key =>
					key.includes(".") && !notAllowedOrDeprecated.includes(key)
			)
			.sort()
			.map(key => ({ key, value: defaults[key] }))
			.map(color => ({
				...color,
				value: `#${colorFormatter(
					color.value.includes("#")
						? color.value.substr(1)
						: color.value
				)}`
			}))
			.map(color => ({
				...color,
				opacity: color.value.substr(7) || opacityMap[color.key] || "",
				value: /#[0-9a-fA-F]{3,8}/gu.test(color.value)
					? color.value.substr(0, 7).toUpperCase()
					: color.value
			}))
			.reduce(
				(
					colors,
					{
						key,
						opacity,
						value
					}: { key: string; opacity: string; value: string }
				) => ({
					...colors,
					[key]: colorMap[value]
						? `${colorMap[value]}${opacity
							? opacity.padEnd(2, "0").toUpperCase()
							: ""
						}`
						: `${value}[INVALID:${closestMaterial(value)}]`
				}),
				{}
			),
		tokenColors: removeDuplicatedColors(
			arrayMap(replaceColors)([...vs, ...plus])
		)
	}))
	.then(({ colors, tokenColors }) => ({
		$schema: "vscode://schemas/color-theme",
		colors,
		name: "Black+ Material",
		tokenColors
	}))
	.then(theme =>
		writeFileAsync(
			`${__dirname}/../black-plus-material.json`,
			// eslint-disable-next-line no-null/no-null
			JSON.stringify(theme, null, "  ")
		)
	)
	.then(() => console.log("black-plus-material.json done!"))
	.catch(error =>
		console.error("Error with black-plus-material.json update", error)
	);
