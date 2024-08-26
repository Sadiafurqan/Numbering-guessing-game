let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
	let userGuess = document.getElementById("guess").value;
	userGuess = parseInt(userGuess);

	if (userGuess === numberToGuess) {
		document.getElementById("result").innerHTML = "Correct! You won!";
	} else if (userGuess < numberToGuess) {
		document.getElementById("result").innerHTML = "Too low!";
	} else {
		document.getElementById("result").innerHTML = "Too high!";
	}

	attempts++;
	if (attempts === 7) {
		document.getElementById("result").innerHTML = "Sorry, you didn't guess the number. The number was " + numberToGuess;
	}
}