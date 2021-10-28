
let randomNumber = Math.floor((Math.random() * 100) + 1);
let play = true;
let gameOver = false;
let Tries = 10;
let TriesTaken = 0;
let numberOfTries;


function guessNumber() {

	if (play) {

		let guess = document.querySelector('.entnumber').value;

		//bad inputs
		if (guess === 0 || guess === '' || guess > 100 || guess < 0) {

			document.querySelector('.result').textContent = 'Invalid number.. Please enter a number between 1 and 100';

			//guess is to high
		} else if (guess > randomNumber) {

			Tries -= 1;
			TriesTaken += 1;
			document.querySelector('.result').textContent = 'Too high, please lower...';
			numberOfTries = document.querySelector('.deneme').textContent = 'Tries: ' + Tries;

			//guess is to low
		} else if (guess < randomNumber) {

			Tries -= 1;
			TriesTaken += 1;
			document.querySelector('.result').textContent = 'Too low, please higher...';
			numberOfTries = document.querySelector('.deneme').textContent = 'Tries: ' + Tries;

			//guess is correct
		} else {

			Tries -= 1;
			TriesTaken += 1;
			document.querySelector('.result').textContent = guess + ' is correct, You Win!!! Congrulations!. Your lucky color is on screen...';
			numberOfTries = document.querySelector('.deneme').textContent = 'You find only ' + TriesTaken + ' tries';
			play = gameOver;
		}

		//out of tries
		if (Tries === 0 && guess != randomNumber) {

			numberOfTries = numberOfTries = document.querySelector('.deneme').textContent = 'Sorry.. You Lose, the number was ' + randomNumber;
			document.querySelector('.result').textContent = 'Dont give up!.. Your lucky color is on screen...';
			play = gameOver;

		}
	}

}

//new game function
function newGame() {

	Tries = 10;
	TriesTaken = 0;
	randomNumber = Math.floor((Math.random() * 100) + 1);
	guess = document.querySelector('.entnumber').value = '';
	numberOfTries = document.querySelector('.deneme').textContent = 'Number of Tries: ' + Tries;
	document.querySelector('.result').textContent = 'Get a number between 1 and 100';
	play = true;
}

const body = document.body;
const button = document.querySelector('.guess');
// console.log(button);

const generateRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

button.addEventListener('click', () => {
  body.style.background = generateRGB();
});




document.querySelector('.guess').addEventListener('click', guessNumber);
document.querySelector('.newgame').addEventListener('click', newGame);
// document.addEventListener('keypress', keyBoardEvents);

//keyboard exception
// function keyBoardEvents(e) {

// 	if (e.keyCode === 13) {
// 		guessNumber();
// 	}

// }