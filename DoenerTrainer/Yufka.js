"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Yufka {
        draw() {
            //yufka
            //console.log("yufka");
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#9C6B30";
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Yufka", 700, 225);
            DoenerTrainer.crc2.arc(660, 220, 20, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Yufka = Yufka;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Yufka.js.map