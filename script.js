// Array of name
const detail = [
	"Jagat",
	["Jenish", "Arshit", "Priya"],
	"Arshit",
	"Heet",
	["Khushbu", "Jenish", "Priya", ["Jagat", "priya"]],
];

document.write("Original String");
document.write(" ----- Reversed String<br />");

// Using Recursive Function
function reverseArray(arr) {
	for (let index = arr.length - 1; index >= 0; index--) {
		var reversedString = "";

		// If array in array
		if (Array.isArray(arr[index])) {
			reverseArray(arr[index]);
		} else {
			// Loop for String Reverse
			for (
				let stringIndex = arr[index].length - 1;
				stringIndex >= 0;
				stringIndex--
			) {
				reversedString += arr[index][stringIndex];
				console.log(reversedString);
			}
			
               // Print original array
			document.write(arr[index]);

			// Print reverse array
			document.write(" ----- " + reversedString);
			document.write("<br />");
		}
	}
}
// Call function
reverseArray(detail);

// Multiple loop with limitation of multiple array

/* // Loop for reverse the array
for (let index = detail.length - 1; index >= 0; index--) {
	var reversedString = "";

	// Loop for String Reverse
	for (
		let stringIndex = detail[index].length - 1;
		stringIndex >= 0;
		stringIndex--
	) {
		// Loop for array in array
		for (let J = detail[index][stringIndex].length - 1; J >= 0; J--) {
			reversedString += detail[index][stringIndex][J];
		}
	}

	// Print reverse array
     document.write(reversedString);
     document.write("<br />");
} */
