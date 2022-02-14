"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class Lahmacun {
        draw() {
            //lahmacun
            // console.log("lahmacun");
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#9C6B30";
            DoenerTrainer.crc2.font = "18px Arial";
            DoenerTrainer.crc2.fillText("Lahmacun", 700, 135);
            DoenerTrainer.crc2.arc(660, 130, 20, 0, 2 * Math.PI);
            DoenerTrainer.crc2.fill();
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.Lahmacun = Lahmacun;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Lahmacun.js.map