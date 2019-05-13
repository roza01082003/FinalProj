var LivingCreature = require("./modules./LivingCreature");
modules.exports = class ancrev extends LivingCreature {
	constructor(x, y, index) {
        super(x, y, index);
		this.energy = 5;
		this.multiply = 0;
		this.directions;
	}
    chooseNewCoordinates() {
        return super.chooseNewCoordinates();
	}
	chooseCell(character) {
		this.chooseNewCoordinates();
		return super.chooseCell(character);
	}
	eat() {
		var x = this.chooseCell(2);
		var new_x = random(x);
		if (new_x) {
			var x = new_x[0];
			var y = new_x[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			for (var i in xotArr) {
				if (xotArr[i].x == x && xotArr[i].y == y) {
					xotArr.splice(i, 1);
				}
			}
			for (var i in xotakerArr) {
				if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
					xotakerArr.splice(i, 1);
				}
			}
			for (var i in gishatichArr) {
				if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
					gishatichArr.splice(i, 1);
				}
			}

		}
	}	
}
