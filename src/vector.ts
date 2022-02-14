namespace DoenerTrainer {

    export class Vector {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        
        public calculateVector(destination: Vector): Vector {
            let newX: number = destination.x - this.x;
            let newY: number = destination.y - this.y;

            return new Vector(newX, newY);
        }

        public distance(vector2: Vector): number{

            return Math.hypot(vector2.x-this.x, vector2.y -this.y);
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}