namespace DoenerTrainer {

    export class Worker extends Human {

        public position: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);

            this.position = _position;
        }
    }
}