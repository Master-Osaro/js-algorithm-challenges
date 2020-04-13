// Here the second value of r ("Cock") is chosen since the first param is true
let r = "rat" && "Cock"
console.log(r);
// Here the first value of z(false) is chosen since the first param is false
let z = false && "Cock"
console.log(z);

// Here the sfirst value of q("rat") is chosen since the first param is true, if first value is false, the 
// second can be used as a callback instead of if statements
let q = "rat" || "Cock"
console.log(q);

// When you use logical operators JS automatilly converts. Known as type coercion
// A primitive value is one that doesn't attach a property or method to it e.g String, Number, Boolean, Null
//Undefined Symbol

// NON PRIMITIVE TYPES
//Object

//delete property from an object
//delete myIphone.storage;

let person = {
    name: "Jon",
    lastmame: "Appleseed",
    showDatails: function () {
        console.log("Your Name is: "+this.name+" "+this.lastmame);
    }
}

person.showDatails();

// Function Statement VS Function Expression

//Function Statement/Declaration
function greet(name) {
    console.log("Hello "+name);
}

//Function Expression
let add = function (a, b) {
    return a + b;
}
console.log(add(1,2));

//====================== IIFE - Immediately Invoked Function Expressions =======================
//Function Expression
let greet2 = function () {
    console.log("Hello IIFE");
}();

//Function Statement/Declaration - will show undefined without the brackets
(function () {
    console.log("Hello IIFE");
})();


//====================== An Invocation pattern: Recursion =======================
let factorial = function (n) {
    
    // ==== normal for loop

    // let result = 1;
    // for (let i = n; i > 0; i--) {
    //     result *= i;
    // }
    // console.log(result);

    // ==== Recursion
    if (n==1) {
        console.log(1);
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}(1);

// Recursion Example
let parent = function (n) {
    if (n===0) {
        return 1;
    } else if(n===1){
        return 1;
    } else {
       return parent(n-1) + parent(n-2);
    }
}
console.log(parent(3))

// ============= JS Inbuilt Functions ==============================
eval("var a = 8;");
console.log(a);

let ab = 0;
function count() {
    console.log(ab);
    ab++;
    if(ab==10){
        clearInterval(counter);
    }
}

//Run a function for a specific interval
let counter = setInterval(count, 2000);

//Run a function after a specific interval
//setTimeout(doThis,3000);

//alert
//window.alert("goo");