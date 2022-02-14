namespace DoenerTrainer {

    export class Lahmacun {

    
        draw(): void {
            //lahmacun
            // console.log("lahmacun");
            crc2.beginPath();
            crc2.fillStyle = "#9C6B30";
            crc2.font = "18px Arial";
            crc2.fillText("Lahmacun", 700, 135);
            crc2.arc( 660, 130, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

        }

        
    }
}