// Array of name
const detail = [
	"Jagat",
	["Jenish", "Arshit", ""],
	"Arshit",
	"Heet",
	null,
	undefined,
	[undefined, [], [null]],
     [],
	["Khushbu", "Priya", ["Jagat"], ['', 'Bhumi']],
];

console.log(reverseArray(detail));
/*  Using Recursive Function */

// Function for  reverse array
function reverseArray(arr) {
	const reversedArray = [];

	for (let index = arr.length - 1; index >= 0; index--) {
		// If array in array
		if (Array.isArray(arr[index])) {
			let subArr = reverseArray(arr[index]);
			reversedArray.push(subArr);
		} else {
			let reversedString = reverseString(arr[index]);
			reversedArray.push(reversedString);
		}
	}
	return reversedArray;
}
// Function for reverse string
function reverseString(str) {
	var reversedString = "";
	if (str == null) {
		return str;
	} else {
		for (
			let stringIndex = str.length - 1;
			stringIndex >= 0;
			stringIndex--
		) {
			reversedString += str[stringIndex];
		}
		return reversedString;
	}
}
