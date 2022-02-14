namespace DoenerTrainer {

    export enum IngredientsList {
        DOENER, YUFKA, LAHMACUN, TOMATO, ONION, cucumber, MEAT, CORN, CABBAGE
    }
    export class Ingredient {
        public maxIngredients: number; 
        public maxRawIngredients: number; 

        public usedTomatoes: number = 0;
        public usedRawTomatoes: number = 0;
        public usedCucumbers: number = 0;
        public usedRawCucumbers: number = 0;
        public usedCorn: number = 0;
        public usedRawCorn: number = 0;
        public usedMeat: number = 0;
        public usedRawMeat: number = 0;
        public usedOnions: number = 0;
        public usedRawOnions: number = 0;
        public usedCabbage: number = 0;
        public usedRawCabbage: number = 0;

        draw(): void {
            //console.log("ingredients")
            //Tomato
            crc2.beginPath();
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(50, 130+100*this.usedTomatoes/this.maxIngredients, 70, 100 - 100*this.usedTomatoes/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Tomaten", 50, 120);
            crc2.closePath();

            //Cucumber
            crc2.beginPath();
            crc2.fillStyle = "#008800";
            crc2.fillRect(150, 130+100*this.usedCucumbers/this.maxIngredients, 70, 100 - 100*this.usedCucumbers/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Gurken", 150, 120);
            crc2.closePath();

            //Corn
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";
            crc2.fillRect(250, 130+100*this.usedCorn/this.maxIngredients, 70, 100 - 100*this.usedCorn/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Mais", 250, 120);
            crc2.closePath();

            //Meat
            crc2.beginPath();
            crc2.fillStyle = "#b47d49";
            crc2.fillRect(350, 130+100*this.usedMeat/this.maxIngredients, 70, 100 - 100*this.usedMeat/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Fleisch", 350, 120);
            crc2.closePath();

            //Onion
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fillRect(450, 130+100*this.usedOnions/this.maxIngredients, 70, 100 - 100*this.usedOnions/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Zwiebeln", 450, 120);
            crc2.closePath();

            //Cabbage
            crc2.beginPath();
            crc2.fillStyle = "#A640FF";
            crc2.fillRect(550, 130+100*this.usedCabbage/this.maxIngredients, 70, 100 - 100*this.usedCabbage/this.maxIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Rotkraut", 550, 120);
            crc2.closePath();

            //Tomato Raw
            crc2.beginPath();
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(50, 380+ 100*this.usedRawTomatoes/this.maxRawIngredients, 70, 100- 100*this.usedRawTomatoes/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Tomaten", 50, 370);
            crc2.closePath();

            //Cucumber Raw
            crc2.beginPath();
            crc2.fillStyle = "#008800";
            crc2.fillRect(150, 380+ 100*this.usedRawCucumbers/this.maxRawIngredients, 70, 100- 100*this.usedRawCucumbers/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Gurken", 150, 370);
            crc2.closePath();

            //Corn Raw
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";
            crc2.fillRect(250, 380+ 100*this.usedRawCorn/this.maxRawIngredients, 70, 100- 100*this.usedRawCorn/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Mais", 250, 370);
            crc2.closePath();

            //Meat Raw
            crc2.beginPath();
            crc2.fillStyle = "#b47d49";
            crc2.fillRect(350, 380+ 100*this.usedRawMeat/this.maxRawIngredients, 70, 100- 100*this.usedRawMeat/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Fleisch", 350, 370);
            crc2.closePath();

            //Onion Raw
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fillRect(450, 380+ 100*this.usedRawOnions/this.maxRawIngredients, 70, 100- 100*this.usedRawOnions/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Zwiebeln", 450, 370);
            crc2.closePath();

            //Cabbage Raw
            crc2.beginPath();
            crc2.fillStyle = "#A640FF";
            crc2.fillRect(550, 380+ 100*this.usedRawCabbage/this.maxRawIngredients, 70, 100- 100*this.usedRawCabbage/this.maxRawIngredients);
            crc2.font = "18px Arial";
            crc2.fillText("Rotkraut", 550, 370);
            crc2.closePath();
        }

    }

}
