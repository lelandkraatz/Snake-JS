// fruit.js
function Fruit() {
	this.x = 100;
	this.y = 100;

	this.newLocation = function() {
		var nextX = (Math.floor(Math.random() * rows - 2) + 1) * scale;
		var nextY = (Math.floor(Math.random() * columns - 2) + 1) * scale;
		var redo = false;
		for (var i = 0; i < snake.tail.length; i++) {
			if ( (nextX == snake.tail[i].x) && (nextY == snake.tail[i].y) ) {
				this.newLocation();
				break;
			} else {
				this.x = nextX;
				this.y = nextY;
			}
		}
	}

	this.draw = function() {
		ctx.fillStyle = "#d7114f";
		ctx.fillRect(this.x, this.y, scale, scale);
	}
}


