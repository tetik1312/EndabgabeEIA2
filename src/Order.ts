namespace DoenerTrainer {

    
    export interface Order {
        name: string,
        ingredients: IngredientsList[]
    }

   export let allOrders: Order[] = [
        {
            name: "Döner mit allem", ingredients: [IngredientsList.DOENER, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Yufka mit allem", ingredients: [IngredientsList.YUFKA, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Lahmacun mit allem", ingredients: [IngredientsList.LAHMACUN, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Döner vegetarisch", ingredients: [IngredientsList.DOENER, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Yufka vegetarisch", ingredients: [IngredientsList.YUFKA, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Lahmacun ohne Zwiebel", ingredients: [IngredientsList.LAHMACUN, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.CABBAGE]
        },
        {
            name: "Döner ohne Zwiebel", ingredients: [IngredientsList.DOENER, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.CABBAGE]
        },
        {
            name: "Yufka ohne Zwiebel", ingredients: [IngredientsList.YUFKA, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.CABBAGE]
        },
        {
            name: "Lahmacun mit extra Zwiebel", ingredients: [IngredientsList.LAHMACUN, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Döner mit extra Zwiebel", ingredients: [IngredientsList.DOENER, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Yufka mit extra Zwiebel", ingredients: [IngredientsList.YUFKA, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION, IngredientsList.ONION, IngredientsList.CABBAGE]
        },
        {
            name: "Döner ohne Kraut", ingredients: [IngredientsList.DOENER, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION]
        },
        {
            name: "Yufka ohne Kraut", ingredients: [IngredientsList.YUFKA, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION]
        },
        {
            name: "Lahmacun ohne Kraut", ingredients: [IngredientsList.LAHMACUN, IngredientsList.TOMATO, IngredientsList.CORN, IngredientsList.cucumber, IngredientsList.MEAT, IngredientsList.ONION]
        }
    ]
}