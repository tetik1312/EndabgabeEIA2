namespace DoenerTrainer {
    export class Yufka {
        draw(): void {
             
            //yufka
            //console.log("yufka");
            crc2.beginPath();
            crc2.fillStyle = "#9C6B30";
            crc2.font = "18px Arial";
            crc2.fillText("Yufka", 700, 225);
            crc2.arc( 660, 220, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            
         }
    }
}