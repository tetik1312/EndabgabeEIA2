"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    let IngredientsList;
    (function (IngredientsList) {
        IngredientsList[IngredientsList["DOENER"] = 0] = "DOENER";
        IngredientsList[IngredientsList["YUFKA"] = 1] = "YUFKA";
        IngredientsList[IngredientsList["LAHMACUN"] = 2] = "LAHMACUN";
        IngredientsList[IngredientsList["TOMATO"] = 3] = "TOMATO";
        IngredientsList[IngredientsList["ONION"] = 4] = "ONION";
        IngredientsList[IngredientsList["cucumber"] = 5] = "cucumber";
        IngredientsList[IngredientsList["MEAT"] = 6] = "MEAT";
        IngredientsList[IngredientsList["CORN"] = 7] = "CORN";
        IngredientsList[IngredientsList["CABBAGE"] = 8] = "CABBAGE";
    })(IngredientsList = DoenerTrainer.IngredientsList || (DoenerTrainer.IngredientsList = {}));
    class Ingredient {
        constructor() {
            this.usedTomatoes = 0;
            this.usedRawTomatoes = 0;
            this.usedCucumbers = 0;
            this.usedRawCucumbers = 0;
            this.usedCorn = 0;
            this.usedRawCorn = 0;
            this.usedMeat = 0;
            this.usedRawMeat = 0;
            this.usedOnions = 0;
            this.usedRawOnions = 0;
            this.usedCabbage = 0;
            this.usedRawCabbage = 0;
        }
        draw() {
            //console.log("ingredients")
            //Tomato
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FF0000";
            DoenerTrainer.crc2.fillRect(50, 130 + 100 * this.usedTomatoes / this.maxIngredients, 70, 100 - 100 * this.usedTomatoes / this.maxIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Tomaten", 50, 120);
            DoenerTrainer.crc2.closePath();
            //Cucumber
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#008800";
            DoenerTrainer.crc2.fillRect(150, 130 + 100 * this.usedCucumbers / this.maxIngredients, 70, 100 - 100 * this.usedCucumbers / this.maxIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Gurken", 150, 120);
            DoenerTrainer.crc2.closePath();
            //Corn
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFF00";
            DoenerTrainer.crc2.fillRect(250, 130 + 100 * this.usedCorn / this.maxIngredients, 70, 100 - 100 * this.usedCorn / this.maxIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Mais", 250, 120);
            DoenerTrainer.crc2.closePath();
            //Meat
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#b47d49";
            DoenerTrainer.crc2.fillRect(350, 130 + 100 * this.usedMeat / this.maxIngredients, 70, 100 - 100 * this.usedMeat / this.maxIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Fleisch", 350, 120);
            DoenerTrainer.crc2.closePath();
            //Onion
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFFFF";
            DoenerTrainer.crc2.fillRect(450, 130 + 100 * this.usedOnions / this.maxIngredients, 70, 100 - 100 * this.usedOnions / this.maxIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Zwiebeln", 450, 120);
            DoenerTrainer.crc2.closePath();
            //Cabbage
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#A640FF";
            DoenerTrainer.crc2.fillRect(550, 130 + 100 * this.usedCabbage / this.maxIngredients, 70, 100 - 100 * this.usedCabbage / this.maxIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Rotkraut", 550, 120);
            DoenerTrainer.crc2.closePath();
            //Tomato Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FF0000";
            DoenerTrainer.crc2.fillRect(50, 380 + 100 * this.usedRawTomatoes / this.maxRawIngredients, 70, 100 - 100 * this.usedRawTomatoes / this.maxRawIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Tomaten", 50, 370);
            DoenerTrainer.crc2.closePath();
            //Cucumber Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#008800";
            DoenerTrainer.crc2.fillRect(150, 380 + 100 * this.usedRawCucumbers / this.maxRawIngredients, 70, 100 - 100 * this.usedRawCucumbers / this.maxRawIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Gurken", 150, 370);
            DoenerTrainer.crc2.closePath();
            //Corn Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFF00";
            DoenerTrainer.crc2.fillRect(250, 380 + 100 * this.usedRawCorn / this.maxRawIngredients, 70, 100 - 100 * this.usedRawCorn / this.maxRawIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Mais", 250, 370);
            DoenerTrainer.crc2.closePath();
            //Meat Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#b47d49";
            DoenerTrainer.crc2.fillRect(350, 380 + 100 * this.usedRawMeat / this.maxRawIngredients, 70, 100 - 100 * this.usedRawMeat / this.maxRawIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Fleisch", 350, 370);
            DoenerTrainer.crc2.closePath();
            //Onion Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFFFF";
            DoenerTrainer.crc2.fillRect(450, 380 + 100 * this.usedRawOnions / this.maxRawIngredients, 70, 100 - 100 * this.usedRawOnions / this.maxRawIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Zwiebeln", 450, 370);
            DoenerTrainer.crc2.closePath();
            //Cabbage Raw
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#A640FF";
            DoenerTrainer.crc2.fillRect(550, 380 + 100 * this.usedRawCabbage / this.maxRawIngredients, 70, 100 - 100 * this.usedRawCabbage / this.maxRawIngredients);
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Rotkraut", 550, 370);
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Ingredient = Ingredient;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=ingredients.js.map