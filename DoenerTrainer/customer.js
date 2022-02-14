"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Customer extends DoenerTrainer.Human {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.done = false;
            this.haveOrder = false;
            this.order = DoenerTrainer.allOrders[Math.floor(Math.random() * DoenerTrainer.allOrders.length)];
            this.generateOrder();
        }
        generateOrder() {
            DoenerTrainer.crc2.fillStyle = "#000000";
            DoenerTrainer.crc2.font = "15px Arial";
            DoenerTrainer.crc2.fillText(this.order.name, this.position.x, this.position.y + 95);
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (this.haveOrder == true && this.position.distance(this.destination) < 1) {
                this.done = true;
            }
        }
        //generates mood 
        draw() {
            if (this.mood < 50) {
                this.drawAngry();
            }
            else {
                this.drawHappy();
            }
        }
    }
    DoenerTrainer.Customer = Customer;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=customer.js.map