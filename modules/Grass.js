var LivingCreature = require("./modules./LivingCreature");
modules.exports = class Grass extends LivingCreature {
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            xotArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
