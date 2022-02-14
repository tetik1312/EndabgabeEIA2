"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Worker extends DoenerTrainer.Human {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.position = _position;
        }
    }
    DoenerTrainer.Worker = Worker;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=worker.js.map