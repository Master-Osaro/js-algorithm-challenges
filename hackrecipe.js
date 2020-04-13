let recipe = {
    floor: { 
        quantity: 200,
        unit: "g"
    },
    sugar: { 
        quantity: 150,
        unit: "g"
    },
    butter: { 
        quantity: 125,
        unit: "g"
    },
    milk: { 
        quantity: 125,
        unit: "ml"
    },
    eggs: { 
        quantity: 2,
        unit: "unit"
    },
    vanillaEssence: { 
        quantity: 1,
        unit: "teaspoon"
    },
    salt: { 
        quantity: 0.5,
        unit: "teaspoon"
    }
    ,
    bakingPowder: {
        quantity: 2,
        unit: "teaspoon"
    }
}


let toAdd = {
    g:10,
    ml: 15,
    teaspoon: 1,
    unit: 1
}

console.log(recipe);

let hackRecipe = (ingredient, quantity2add) =>{
    recipe[ingredient].quantity += quantity2add;
    console.log(recipe);
    console.log()
}

let hackRecipe2 = (ingredient) =>{
    let dUnit = recipe[ingredient].unit;
    recipe[ingredient].quantity += toAdd[dUnit];
    console.log ("Added "+toAdd[dUnit]+dUnit+" of "+ ingredient+". "+ingredient+ " count is now: "+recipe[ingredient].quantity+recipe[ingredient].unit);
    console.log(recipe);
}

hackRecipe("salt", 1);
hackRecipe2("sugar")