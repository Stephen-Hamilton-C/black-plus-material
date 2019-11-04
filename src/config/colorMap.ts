import { invertMap } from "../utils";

/**
 * Color map (material color = colors to be replaced).
 */
export const colorMap = invertMap({
	"#F44336": [
		"#F44336",
		"#3C2120",
		"#471F1D",
		"#651F1C",
		"#F44747",
		"#A31515",
		"#BE1100",
		"#EA4646",
		"#FF0000",
		"#FF1212"
	], // Red
	"#E91E63": ["#E91E63", "#C586C0"], // Pink
	"#9C27B0": ["#9C27B0", "#646695"], // Purple
	"#673AB7": ["#673AB7", "#68217A"], // Deep Purple
	"#3F51B5": [
		"#3F51B5",
		"#000080",
		"#01579B",
		"#0E639C",
		"#264F78",
		"#062F4A",
		"#063B49",
		"#094771",
		"#121288"
	], // Indigo
	"#2196F3": [
		"#007ACC",
		"#0E70C0",
		"#2196F3",
		"#297FC9",
		"#3794FF",
		"#4E94CE",
		"#569CD6",
		"#75BEFF"
	], // Blue
	"#4CAF50": [
		"#006400",
		"#008000",
		"#128812",
		"#369432",
		"#388A34",
		"#3B3E2B",
		"#4CAF50",
		"#4D9E4D",
		"#4E5433"
	], // Green
	"#03A9F4": [
		"#03A9F4",
		"#6796E6",
		"#2F7AB8",
		"#40A6FF",
		"#3399CC",
		"#0097FB",
		"#0288D1"
	], // Light Blue
	"#00BCD4": ["#00BCD4", "#9CDCFE"], // Cyan
	"#009688": ["#009688", "#4EC9B0", "#40C8AE"], // Teal
	"#8BC34A": ["#16825D", "#6A9955", "#8BC34A", "#9BB955"], // Light Green
	"#CDDC39": ["#CDDC39", "#B5CEA8", "#A0A0A0"], // Lime
	"#FFEB3B": ["#FFEB3B", "#DCDCAA", "#CCA700"], // Yellow
	"#FFC107": [
		"#B89500",
		"#CE9178",
		"#D18616",
		"#F6B94D",
		"#FFC107",
		"#FFCC00"
	], // Amber
	"#FF9800": ["#FF9800", "#D7BA7D", "#D18616"], // Orange
	"#FF5722": ["#FF5722", "#D16969", "#EA5C00", "#F88070", "#F48771"], // Deep Orange
	"#795548": [
		"#795548",
		"#4B382C",
		"#282E32",
		"#352A05",
		"#420B0D",
		"#5A1D1D",
		"#653723"
	], // Brown
	"#607D8B": [
		"#607D8B",
		"#808080",
		"#2D5176",
		"#27394C",
		"#2A2D2E",
		"#303031",
		"#313135",
		"#515C6A",
		"#53595D"
	], // Blue Grey
	"#FFFFFF": ["#FFF", "#FFFFFF", "#ADADAD", "#AEAFAD"], // White
	"#EEEEEE": ["#EEEEEE", "#F0F0F0", "#E3E4E2", "#E7E7E7"], // Grey 200
	"#BDBDBD": ["#BDBDBD", "#A6A6A6", "#CCCCCC", "#BFBFBF", "#C6C6C6"], // Grey 400
	"#9E9E9E": ["#9E9E9E", "#D4D4D4", "#585858", "#BBBBBB", "#999999"], // Grey 500
	"#757575": [
		"#757575",
		"#707070",
		"#ADD6FF",
		"#7C7C7C",
		"#7F7F7F",
		"#797979",
		"#858585",
		"#888888",
		"#646464"
	], // Grey 600
	"#424242": [
		"#424242",
		"#404040",
		"#333333",
		"#3C3C3C",
		"#535C69",
		"#383B3D",
		"#444444",
		"#454545",
		"#4D4D4D",
		"#525252",
		"#5A5A5A",
		"#606060",
		"#C5C5C5"
	], // Grey 800
	"#212121": [
		"#212121",
		"#292929",
		"#252526",
		"#282828",
		"#2D2D2D",
		"#3A3D41",
		"#3F3F46"
	], // Grey 900
	"#101010": ["#37373D", "#101010", "#0A0A0A", "#1E1E1E"], // Grey 1000
	"#000000": ["#000000"] // Black
});
