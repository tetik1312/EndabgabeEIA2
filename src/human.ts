namespace DoenerTrainer {

    export class Human extends Moveable {

        public mood: number = 100;
        public destination: Vector;;
        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
            this.destination = this.position;

        }

        public move(_timeslice: number): void {
            let velocity: Vector = this.position.calculateVector(this.destination);

            let offset: Vector = velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        //generates mood
        public draw(): void {
            if (this.mood > 150) {
                this.drawAngry();
            } else if (this.mood < 50) {
                this.drawSleepy();
            }
            else {
                this.drawHappy();
            }
        }

        public drawAngry(): void {
            //angryface
            //smiley
            crc2.fillStyle = "red";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 70, 20, 0, 1 * Math.PI, true);
            crc2.stroke();
            crc2.closePath();
        }
        public drawSleepy(): void {
            //sleepyface
            //smiley
            crc2.fillStyle = "lightblue";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 1 * Math.PI);
            // crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 1 * Math.PI);
            // crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.moveTo(this.position.x + 25, this.position.y + 55);
            crc2.lineTo(this.position.x + 65, this.position.y + 55);
            crc2.stroke();
            crc2.closePath();
        }

        public drawHappy(): void {

            //happyface
            //smiley
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 45, 40, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //eyes
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(this.position.x + 35, this.position.y + 35, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x + 55, this.position.y + 35, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            //mouth
            crc2.strokeStyle = "black";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.arc(this.position.x + 45, this.position.y + 45, 30, 0, -1 * Math.PI);
            crc2.stroke();
            crc2.closePath();
        }
    }
}