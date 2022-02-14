namespace DoenerTrainer {
    export abstract class Moveable {
        protected posX: number;
        protected posY: number;
        public position: Vector;
        protected velocityX: number;
        protected velocityY: number;

        constructor(_position: Vector, _velocity: Vector) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.position = _position;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        
        public abstract draw(): void;
            
    }
}