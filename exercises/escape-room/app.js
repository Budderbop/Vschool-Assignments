// const readline = require("readline-sync");
// readline.keyIn("hey, yes no", {limit: "y n"})

function isEqual(num1, num2) {
	if (typeof num1 == 'string' || typeof num1 == 'string'){
		return false
	} else {
		return num1 === num2
	}
}

console.log(isEqual(1, 1))
