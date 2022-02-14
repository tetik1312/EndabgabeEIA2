"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Doener {
        draw() {
            //doener
            // console.log("doener");
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#9C6B30";
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Döner", 700, 180);
            DoenerTrainer.crc2.arc(660, 175, 20, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Doener = Doener;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Doener.js.map