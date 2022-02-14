namespace DoenerTrainer {

    export class Customer extends Human {

        public order: Order;
        public done: boolean = false;
        public haveOrder: boolean = false;
        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            this.order = allOrders[Math.floor(Math.random() * allOrders.length)]; 
            this.generateOrder();
        }

        public generateOrder(): void {
            crc2.fillStyle = "#000000";
            crc2.font = "15px Arial";
            crc2.fillText(this.order.name, this.position.x, this.position.y + 95);
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            if (this.haveOrder == true && this.position.distance(this.destination) < 1) { 
                this.done = true;
            }
        }

        //generates mood 
        public draw() {
            if (this.mood < 50) {
                this.drawAngry();
            }
            else {
                this.drawHappy();
            }
        }
    }
}