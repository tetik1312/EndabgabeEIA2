"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Moveable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.position = _position;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
    }
    DoenerTrainer.Moveable = Moveable;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=moveable.js.map