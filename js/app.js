function FizzBuzz() {
	// Ensure user input is integer > 1 and a whole number //
	do {
	var input = prompt('Please enter a whole number that is greater than 1: ');
	} while ((isNaN(+input)) || +input % 1 !== 0 || +input <= 1);

	// var converted = parseInt(+input, 10); line not needed//
	// Create new Array //
	var number = new Array();
	for (i = 1; i <= +input; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
			number.push(' fizzbuzz ');
		}
		else if (i % 3 == 0) {
			number.push(' fizz ');
		}
		else if (i % 5 == 0) {
			number.push(' buzz ');
		}
		else
			number.push(' ' + i + ' ');
	};
	document.write(number + ' .');
};

// Call the function //
FizzBuzz();
