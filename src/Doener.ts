namespace DoenerTrainer {

    export class Doener {

        draw(): void {

            //doener
            // console.log("doener");
            crc2.beginPath();
            crc2.fillStyle = "#9C6B30";
            crc2.font = "18px Arial";
            crc2.fillText("Döner", 700, 180);
            crc2.arc(660, 175, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

        }
    }
}