"use strict";
var DoenerTrainer;
(function (DoenerTrainer) {
    DoenerTrainer.allOrders = [
        {
            name: "Döner mit allem", ingredients: [DoenerTrainer.IngredientsList.DOENER, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Yufka mit allem", ingredients: [DoenerTrainer.IngredientsList.YUFKA, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Lahmacun mit allem", ingredients: [DoenerTrainer.IngredientsList.LAHMACUN, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Döner vegetarisch", ingredients: [DoenerTrainer.IngredientsList.DOENER, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Yufka vegetarisch", ingredients: [DoenerTrainer.IngredientsList.YUFKA, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Lahmacun ohne Zwiebel", ingredients: [DoenerTrainer.IngredientsList.LAHMACUN, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Döner ohne Zwiebel", ingredients: [DoenerTrainer.IngredientsList.DOENER, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Yufka ohne Zwiebel", ingredients: [DoenerTrainer.IngredientsList.YUFKA, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Lahmacun mit extra Zwiebel", ingredients: [DoenerTrainer.IngredientsList.LAHMACUN, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Döner mit extra Zwiebel", ingredients: [DoenerTrainer.IngredientsList.DOENER, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Yufka mit extra Zwiebel", ingredients: [DoenerTrainer.IngredientsList.YUFKA, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.ONION, DoenerTrainer.IngredientsList.CABBAGE]
        },
        {
            name: "Döner ohne Kraut", ingredients: [DoenerTrainer.IngredientsList.DOENER, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION]
        },
        {
            name: "Yufka ohne Kraut", ingredients: [DoenerTrainer.IngredientsList.YUFKA, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION]
        },
        {
            name: "Lahmacun ohne Kraut", ingredients: [DoenerTrainer.IngredientsList.LAHMACUN, DoenerTrainer.IngredientsList.TOMATO, DoenerTrainer.IngredientsList.CORN, DoenerTrainer.IngredientsList.cucumber, DoenerTrainer.IngredientsList.MEAT, DoenerTrainer.IngredientsList.ONION]
        }
    ];
})(DoenerTrainer || (DoenerTrainer = {}));
//# sourceMappingURL=Order.js.map