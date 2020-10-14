// snake.js
function Snake() {
	this.x = 0;
	this.y = 0;
	this.speed = scale * 1;
	this.xSpeed = this.speed;
	this.ySpeed = 0;
	this.direction = "Right";
	this.nextDirection = "Right";
	this.fruitEaten = 0;
	this.tail = [];
	this.gameOver = false;

	this.draw = function () {
		ctx.fillStyle = "#FFFFFF";

		for (let i = 0; i < this.tail.length; i++) {
			ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
		}
	}

	this.update = function () {
		for (let i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
			if (this.tail[i].x == this.x + this.xSpeed && this.tail[i].y == this.y + this.ySpeed) {
				this.gameOver = true;
			}
		}

		this.tail[this.fruitEaten] = { x: this.x, y: this.y };
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.direction = this.nextDirection;
		//console.log(this.x + " : " + this.y);

		if (this.x >= canvas.width) {
			//this.x = 0;
			this.xSpeed = 0;
			this.gameOver = true;
		}

		if (this.x < 0) {
			//this.x = canvas.width;
			this.xSpeed = 0;
			this.gameOver = true;
		}

		if (this.y >= canvas.height) {
			//this.y = 0;
			this.ySpeed = 0;
			this.gameOver = true;
		}
		if (this.y < 0) {
			//this.y = canvas.height;
			this.ySpeed = 0;
			this.gameOver = true;
		}
	}

	this.changeDirection = function (direction) {
		switch(direction) {
			case "Up":
				if (this.direction != "Down") {
					this.xSpeed = 0;
					this.ySpeed = -this.speed;
					this.nextDirection = "Up";
				}
				break;
			case "Down":
				if (this.direction != "Up") {
					this.xSpeed = 0;
					this.ySpeed = this.speed;
					this.nextDirection = "Down";
				}
				break;
			case "Left":
				if (this.direction != "Right") {
					this.xSpeed = -this.speed;
					this.ySpeed = 0;
					this.nextDirection = "Left";
				}
				break;
			case "Right":
				if (this.direction != "Left") {
					this.xSpeed = this.speed;
					this.ySpeed = 0;
					this.nextDirection = "Right";
				}
				break;
		}

	}

	this.eat = function (fruit) {
		if (this.x == fruit.x && this.y == fruit.y) {
			this.fruitEaten++;
			return true;
		}
		return false;
	}
	this.getFruitEaten = function () {
		return this.fruitEaten;
	}

	this.isGameOver = function () {
		return this.gameOver;
	}
}