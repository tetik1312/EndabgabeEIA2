"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    class KebabHouse {
        draw() {
            //console.log("Kebab Haus");
            //customer Field
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#ffffff";
            DoenerTrainer.crc2.fillRect(0, 0, 800, 100);
            DoenerTrainer.crc2.closePath();
            //Counter
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#A3A3A3";
            DoenerTrainer.crc2.fillRect(0, 100, 800, 150);
            DoenerTrainer.crc2.closePath();
            //Text Counter
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFFFF";
            DoenerTrainer.crc2.font = "15px Arial";
            DoenerTrainer.crc2.fillText("Theke", 315, 245);
            DoenerTrainer.crc2.closePath();
            //Worker Field
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFD5c6";
            DoenerTrainer.crc2.fillRect(0, 250, 800, 100);
            DoenerTrainer.crc2.closePath();
            //Kitchen
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#A3A3A3";
            DoenerTrainer.crc2.fillRect(0, 350, 800, 150);
            DoenerTrainer.crc2.closePath();
            //Text Kitchen
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FFFFFF";
            DoenerTrainer.crc2.font = "15px Arial";
            DoenerTrainer.crc2.fillText("Küche", 315, 495);
            DoenerTrainer.crc2.closePath();
            //Door
            DoenerTrainer.crc2.beginPath();
            DoenerTrainer.crc2.fillStyle = "#FE6300";
            DoenerTrainer.crc2.fillRect(350, 0, 100, 20);
            DoenerTrainer.crc2.closePath();
        }
    }
    DoenerTrainer.KebabHouse = KebabHouse;
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=kebabhouse.js.map