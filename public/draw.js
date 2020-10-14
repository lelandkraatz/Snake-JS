//draw.js
var canvas;
var ctx;
var scale;
var rows;
var columns;
var snake;
var fruit;
var gameOverImage;
var score;
var gameState = {};
var snakeInterval;
var running = false;
var gameOverState = false;
const scoreScale = 10;

window.onload = function () {
	canvas = document.querySelector(".canvas");
	score = document.querySelector(".score");
	ctx = canvas.getContext("2d");
	document.querySelector(".btn#pause").onclick = () => { running = false; };
	document.querySelector(".btn#resume").onclick = () => { 
		if (gameOverState == false && running == false) {
			running = true;
			play(); 
		}
	};
	document.querySelector(".btn#restart").onclick = () => { 
		if (!running) {
			setup(); 
		}
	}
	scale = 10;
	rows = canvas.height / scale;
	columns = canvas.width / scale;
	gameOverImage = document.createElement('img');
	gameOverImage.src = 'game_over.jpg';

	window.addEventListener('keydown', (event) => {
		const direction = event.key.replace('Arrow', '');
		snake.changeDirection(direction);
	})
	
	setup();


}

function setup() {
	snake = new Snake();
	fruit = new Fruit();
	fruit.newLocation();
	score.innerHTML = "Score: 0";
	running = true, gameOverState = false;
	play();
}

function play() {
	snakeInterval = window.setInterval(() => {
		if (!running) {
			clearInterval(snakeInterval);
		}
		snake.update();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fruit.draw();
		snake.draw();

		if (snake.isGameOver() == true) {
			clearInterval(snakeInterval);
			gameOver();
		}
		if (snake.eat(fruit)) {
			fruit.newLocation();
			score.innerHTML = "Score: " + (snake.getFruitEaten() * scoreScale);
		}

	}, 100);
}


function gameOver() {
	ctx.drawImage(gameOverImage, 0, 0, canvas.width, canvas.height);
	running = false;
	gameOverState = true;
}
