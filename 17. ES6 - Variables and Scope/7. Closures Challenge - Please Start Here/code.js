//Create an array
// Use for loop to insert a function into the array logging their corresponding index


//Using ES5
//ES6 style won't work as only one value of i is kept in memory. We need to use Closures
console.log("-----------------------USING ES5----------------------");
var arr2 = [];
for (var i = 0; i < 3; i++) {
    arr2[i] = fn(i);
}

function fn(params) {
    return function () {
        console.log(params);
    }
}
console.log(arr2);
console.log(arr2[0]);
arr2[0]();
arr2[1]();
arr2[2]();
console.log();



//Using ES6
//new lexical scope storing the right new value of i
console.log("-----------------------USING ES6----------------------");
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = ()=>{
        console.log(i);
    }
}

console.log(arr);
console.log(arr[0]);
arr[0]();
arr[1]();
arr[2]();