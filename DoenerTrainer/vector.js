"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Vector {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        calculateVector(destination) {
            let newX = destination.x - this.x;
            let newY = destination.y - this.y;
            return new Vector(newX, newY);
        }
        distance(vector2) {
            return Math.hypot(vector2.x - this.x, vector2.y - this.y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    DoenerTrainer.Vector = Vector;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=vector.js.map