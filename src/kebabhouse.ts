namespace DoenerTrainer {

    export class KebabHouse {
        
        draw(): void {
            //console.log("Kebab Haus");

            //customer Field
            crc2.beginPath();
            crc2.fillStyle = "#ffffff";
            crc2.fillRect(0, 0, 800, 100);
            crc2.closePath();

            //Counter
            crc2.beginPath();
            crc2.fillStyle = "#A3A3A3";
            crc2.fillRect(0, 100, 800, 150);
            crc2.closePath();


            //Text Counter
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.font = "15px Arial";
            crc2.fillText("Theke", 315, 245);
            crc2.closePath();

            //Worker Field
            crc2.beginPath();
            crc2.fillStyle = "#FFD5c6";
            crc2.fillRect(0, 250, 800, 100);
            crc2.closePath();

            //Kitchen
            crc2.beginPath();
            crc2.fillStyle = "#A3A3A3";
            crc2.fillRect(0, 350, 800, 150);
            crc2.closePath();

            //Text Kitchen
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.font = "15px Arial";
            crc2.fillText("Küche", 315, 495);
            crc2.closePath();
            


            //Door
            crc2.beginPath();
            crc2.fillStyle = "#FE6300";
            crc2.fillRect(350, 0, 100, 20);
            crc2.closePath();

            
        }
    }

}