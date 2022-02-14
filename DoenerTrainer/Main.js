"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    window.addEventListener("load", handleLoad);
    let startButton;
    let allCustomer = 0;
    let worker = 2;
    let customer = 3;
    let raw = 10;
    let container = 15;
    let unoccupied = 20;
    let moveables = [];
    let imgData;
    let usedIngredients = [];
    let activeWorker;
    let doneOrder = 0;
    let happyCustomer = 0;
    let angryCustomer = 0;
    let happyWorker = 0;
    let unHappyWorker = 0;
    let statsDiv;
    function handleLoad() {
        let canvas = document.querySelector("#canvas");
        if (!canvas)
            return;
        DoenerTrainer.crc2 = canvas.getContext("2d");
        startButton = document.querySelector("#start");
        startButton.addEventListener("click", startGame);
        canvas.addEventListener("mouseup", handleMouse);
        statsDiv = document.getElementById("stats");
    }
    function startGame() {
        //console.log("start");
        let form = document.querySelector("form");
        let body = document.querySelector("body");
        DoenerTrainer.kebabhouse = new DoenerTrainer.KebabHouse();
        DoenerTrainer.kebabhouse.draw();
        imgData = DoenerTrainer.crc2.getImageData(0, 0, 800, 600);
        DoenerTrainer.ingredients = new DoenerTrainer.Ingredient();
        DoenerTrainer.ingredients.draw();
        DoenerTrainer.lahmacun = new DoenerTrainer.Lahmacun();
        DoenerTrainer.lahmacun.draw();
        DoenerTrainer.doener = new DoenerTrainer.Doener();
        DoenerTrainer.doener.draw();
        DoenerTrainer.yufka = new DoenerTrainer.Yufka();
        DoenerTrainer.yufka.draw();
        getSettings();
        createWorker();
        DoenerTrainer.ingredients.maxIngredients = container;
        DoenerTrainer.ingredients.maxRawIngredients = raw;
        body.removeChild(form);
        createCustomer();
        window.setInterval(createCustomer, 60000 / customer);
        window.setInterval(update, 20);
        let orderTomatoButton = document.getElementById("orderTomato");
        let orderCucumberButton = document.getElementById("orderCucumber");
        let orderCornButton = document.getElementById("orderCorn");
        let orderMeatButton = document.getElementById("orderMeat");
        let orderOnionButton = document.getElementById("orderOnion");
        let orderCabbageButton = document.getElementById("orderCabbage");
        orderTomatoButton.addEventListener("click", orderTomato);
        orderCucumberButton.addEventListener("click", orderCucumber);
        orderCornButton.addEventListener("click", orderCorn);
        orderMeatButton.addEventListener("click", orderMeat);
        orderOnionButton.addEventListener("click", orderOnion);
        orderCabbageButton.addEventListener("click", orderCabbage);
    }
    function getSettings() {
        let formData = new FormData(document.forms[0]);
        worker = Number(formData.get("Worker"));
        customer = Number(formData.get("Customer"));
        raw = Number(formData.get("Raw"));
        container = Number(formData.get("Container"));
        unoccupied = Number(formData.get("Unoccupied"));
    }
    function createWorker() {
        for (let nWorker = 0; nWorker < worker; nWorker++) {
            let newWorker = new DoenerTrainer.Worker(new DoenerTrainer.Vector(nWorker * 200, 250), new DoenerTrainer.Vector(0, 0));
            newWorker.draw();
            moveables.push(newWorker);
        }
    }
    function createCustomer() {
        if (allCustomer < 5) {
            let newCustomer = new DoenerTrainer.Customer(new DoenerTrainer.Vector(allCustomer * 200, 0), new DoenerTrainer.Vector(0, 0));
            moveables.push(newCustomer);
            newCustomer.draw();
            allCustomer++;
        }
    }
    function countWorkerMood() {
        happyWorker = 0;
        unHappyWorker = 0;
        for (let moveable of moveables) {
            if (moveable instanceof DoenerTrainer.Worker) {
                if (moveable.mood > 150 || moveable.mood < 50) {
                    unHappyWorker = unHappyWorker + 1;
                }
                else {
                    happyWorker = happyWorker + 1;
                }
            }
        }
    }
    //
    function update() {
        DoenerTrainer.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            //If moveable is worker: count down the mood 
            if (moveable instanceof DoenerTrainer.Worker) {
                moveable.mood = moveable.mood - 50 / unoccupied / 50;
                moveable.move(0.15);
            }
            // If moveable is customer: write order on canvas
            //If customer already left: delete from moveable []
            // Check mood 
            if (moveable instanceof DoenerTrainer.Customer) {
                moveable.mood = moveable.mood - 50 / unoccupied / 50;
                moveable.generateOrder();
                moveable.move(0.15);
                if (moveable.done == true) {
                    console.log(moveable);
                    moveables.splice(moveables.indexOf(moveable), 1);
                    allCustomer = allCustomer - 1;
                }
                if (moveable.mood < 50 && moveable.haveOrder == false) {
                    moveable.destination = new DoenerTrainer.Vector(350 - 100 / 2, moveable.position.y);
                    moveable.haveOrder = true;
                    angryCustomer = angryCustomer + 1;
                }
            }
        }
        countWorkerMood();
        statsDiv.innerHTML = "verkaufte Gerichte: " + doneOrder + "<br> glückliche Personen : " + (happyCustomer + happyWorker) + "<br> unzufriedene Personen: " + (angryCustomer + unHappyWorker);
        DoenerTrainer.ingredients.draw();
        DoenerTrainer.lahmacun.draw();
        DoenerTrainer.doener.draw();
        DoenerTrainer.yufka.draw();
    }
    // copy usedIngreadients [] and order []
    //If no order: costumer will be send to door and changes mood and gets count to unhappy people 
    //empty usedIngreadients[]
    function giveFood(_customer) {
        let allIngredients = usedIngredients.slice();
        let order = _customer.order.ingredients.slice();
        if (allIngredients.length == 0) {
            console.log("falsche bestellung");
            _customer.destination = new DoenerTrainer.Vector(350 - 100 / 2, _customer.position.y);
            _customer.mood = 0;
            _customer.haveOrder = true;
            usedIngredients = [];
            angryCustomer = angryCustomer + 1;
            return;
        }
        //check ingredients 
        for (let j = order.length; j >= 0; j--) {
            let index = -1;
            for (let i = 0; i < allIngredients.length; i++) {
                if (allIngredients[i] == _customer.order.ingredients[j]) {
                    index = i;
                }
            }
            if (index >= 0) {
                allIngredients.splice(index, 1);
                order.splice(j, 1);
            }
        }
        if (allIngredients.length == 0 && order.length == 0) {
            _customer.destination = new DoenerTrainer.Vector(350, _customer.position.y);
            if (_customer.mood > 50) {
                happyCustomer = happyCustomer + 1;
            }
            else {
                angryCustomer = angryCustomer + 1;
            }
            _customer.mood = 200;
            _customer.haveOrder = true;
            usedIngredients = [];
            doneOrder = doneOrder + 1;
            return;
        }
        else {
            _customer.destination = new DoenerTrainer.Vector(350, _customer.position.y);
            _customer.mood = 0;
            _customer.haveOrder = true;
            usedIngredients = [];
            doneOrder = doneOrder + 1;
            angryCustomer = angryCustomer + 1;
        }
    }
    function handleMouse(_event) {
        let position = new DoenerTrainer.Vector(_event.clientX - DoenerTrainer.crc2.canvas.offsetLeft, _event.clientY - DoenerTrainer.crc2.canvas.offsetTop);
        for (let moveable of moveables) {
            if (moveable instanceof DoenerTrainer.Worker) {
                if (moveable.position.x < position.x && moveable.position.x + 80 > position.x && moveable.position.y < position.y && moveable.position.y + 80 > position.y) {
                    activeWorker = moveable;
                }
            }
        }
        for (let moveable of moveables) {
            if (moveable instanceof DoenerTrainer.Customer) {
                if (moveable.position.x < position.x && moveable.position.x + 80 > position.x && moveable.position.y < position.y && moveable.position.y + 80 > position.y) {
                    giveFood(moveable);
                }
            }
        }
        if (activeWorker == undefined) {
            return;
        }
        //Tomatoes
        if (position.x > 50 && position.y > 130 && position.x < 50 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedTomatoes < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.TOMATO);
                DoenerTrainer.ingredients.usedTomatoes = DoenerTrainer.ingredients.usedTomatoes + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Tomaten sind leer!");
            }
        }
        if (position.x > 50 && position.y > 380 && position.x < 50 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillTomatoes, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Cucumbers
        if (position.x > 150 && position.y > 130 && position.x < 150 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCucumbers < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.cucumber);
                DoenerTrainer.ingredients.usedCucumbers = DoenerTrainer.ingredients.usedCucumbers + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Gurken sind leer!");
            }
        }
        if (position.x > 150 && position.y > 380 && position.x < 150 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillCucumber, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Corn
        if (position.x > 250 && position.y > 130 && position.x < 250 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCorn < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.CORN);
                DoenerTrainer.ingredients.usedCorn = DoenerTrainer.ingredients.usedCorn + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Mais ist leer!");
            }
        }
        if (position.x > 250 && position.y > 380 && position.x < 250 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillCorn, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Meat
        if (position.x > 350 && position.y > 130 && position.x < 350 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedMeat < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.MEAT);
                DoenerTrainer.ingredients.usedMeat = DoenerTrainer.ingredients.usedMeat + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Fleisch ist leer!");
            }
        }
        if (position.x > 350 && position.y > 380 && position.x < 350 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillMeat, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Onions
        if (position.x > 450 && position.y > 130 && position.x < 450 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedOnions < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.ONION);
                DoenerTrainer.ingredients.usedOnions = DoenerTrainer.ingredients.usedOnions + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Zwiebeln sind leer!");
            }
        }
        if (position.x > 450 && position.y > 380 && position.x < 450 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillOnion, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Cabbage
        if (position.x > 550 && position.y > 130 && position.x < 550 + 70 && position.y < 130 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            if (DoenerTrainer.ingredients.usedCabbage < container) {
                usedIngredients.push(DoenerTrainer.IngredientsList.CABBAGE);
                DoenerTrainer.ingredients.usedCabbage = DoenerTrainer.ingredients.usedCabbage + 1;
                activeWorker.mood = activeWorker.mood + 5;
            }
            else {
                window.alert("Rotkraut ist leer!");
            }
        }
        if (position.x > 550 && position.y > 380 && position.x < 550 + 70 && position.y < 380 + 100) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            setTimeout(fillCabbage, 1000);
            activeWorker.mood = activeWorker.mood + 5;
        }
        //Lahmacun
        if (position.x > 640 && position.y > 110 && position.x < 640 + 40 && position.y < 110 + 40) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            usedIngredients.push(DoenerTrainer.IngredientsList.LAHMACUN);
            activeWorker.mood = activeWorker.mood + 5;
            console.log("Lahmacun");
        }
        //Doener
        if (position.x > 640 && position.y > 155 && position.x < 640 + 40 && position.y < 155 + 40) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            usedIngredients.push(DoenerTrainer.IngredientsList.DOENER);
            activeWorker.mood = activeWorker.mood + 5;
            console.log("Döner");
        }
        //Yufka
        if (position.x > 640 && position.y > 200 && position.x < 640 + 40 && position.y < 200 + 40) {
            activeWorker.destination = new DoenerTrainer.Vector(position.x - 40, activeWorker.position.y);
            usedIngredients.push(DoenerTrainer.IngredientsList.YUFKA);
            activeWorker.mood = activeWorker.mood + 5;
            console.log("Yufka");
        }
    }
    function fillTomatoes() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedTomatoes < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawTomatoes > 0) {
            DoenerTrainer.ingredients.usedRawTomatoes = DoenerTrainer.ingredients.usedRawTomatoes + 1;
            DoenerTrainer.ingredients.usedTomatoes = DoenerTrainer.ingredients.usedTomatoes - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawTomatoes <= 0) {
            window.alert("Tomaten müssen nachbestellt werden!");
        }
    }
    function fillCucumber() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCucumbers < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCucumbers > 0) {
            DoenerTrainer.ingredients.usedRawCucumbers = DoenerTrainer.ingredients.usedRawCucumbers + 1;
            DoenerTrainer.ingredients.usedCucumbers = DoenerTrainer.ingredients.usedCucumbers - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCucumbers <= 0) {
            window.alert("Gurken müssen nachbestellt werden!");
        }
    }
    function fillCorn() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCorn < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCorn > 0) {
            DoenerTrainer.ingredients.usedRawCorn = DoenerTrainer.ingredients.usedRawCorn + 1;
            DoenerTrainer.ingredients.usedCorn = DoenerTrainer.ingredients.usedCorn - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCorn <= 0) {
            window.alert("Mais müssen nachbestellt werden!");
        }
    }
    function fillMeat() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedMeat < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawMeat > 0) {
            DoenerTrainer.ingredients.usedRawMeat = DoenerTrainer.ingredients.usedRawMeat + 1;
            DoenerTrainer.ingredients.usedMeat = DoenerTrainer.ingredients.usedMeat - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawMeat <= 0) {
            window.alert("Fleisch müssen nachbestellt werden!");
        }
    }
    function fillOnion() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedOnions < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawOnions > 0) {
            DoenerTrainer.ingredients.usedRawOnions = DoenerTrainer.ingredients.usedRawOnions + 1;
            DoenerTrainer.ingredients.usedOnions = DoenerTrainer.ingredients.usedOnions - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawOnions <= 0) {
            window.alert("Zwiebeln müssen nachbestellt werden!");
        }
    }
    function fillCabbage() {
        while (DoenerTrainer.ingredients.maxIngredients - DoenerTrainer.ingredients.usedCabbage < DoenerTrainer.ingredients.maxIngredients && DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCabbage > 0) {
            DoenerTrainer.ingredients.usedRawCabbage = DoenerTrainer.ingredients.usedRawCabbage + 1;
            DoenerTrainer.ingredients.usedCabbage = DoenerTrainer.ingredients.usedCabbage - 1;
        }
        if (DoenerTrainer.ingredients.maxRawIngredients - DoenerTrainer.ingredients.usedRawCabbage <= 0) {
            window.alert("Rotkraut müssen nachbestellt werden!");
        }
    }
    function orderTomato() {
        setTimeout(fillRawTomato, 5000);
    }
    function fillRawTomato() {
        DoenerTrainer.ingredients.usedRawTomatoes = 0;
    }
    function orderCucumber() {
        setTimeout(fillRawCucumber, 5000);
    }
    function fillRawCucumber() {
        DoenerTrainer.ingredients.usedRawCucumbers = 0;
    }
    function orderCorn() {
        setTimeout(fillRawCorn, 5000);
    }
    function fillRawCorn() {
        DoenerTrainer.ingredients.usedRawCorn = 0;
    }
    function orderMeat() {
        setTimeout(fillRawMeat, 5000);
    }
    function fillRawMeat() {
        DoenerTrainer.ingredients.usedRawMeat = 0;
    }
    function orderOnion() {
        setTimeout(fillRawOnion, 5000);
    }
    function fillRawOnion() {
        DoenerTrainer.ingredients.usedRawOnions = 0;
    }
    function orderCabbage() {
        setTimeout(fillRawCabbage, 5000);
    }
    function fillRawCabbage() {
        DoenerTrainer.ingredients.usedRawCabbage = 0;
    }
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Main.js.map