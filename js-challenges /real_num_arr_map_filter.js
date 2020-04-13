/** 
 * Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) 
 * in the array realNumberArray and store the new array in the variable squaredIntegers.
 * 
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // helper arrow fuction to filter negative and decimal numbers
  const delet =(arg)=>{
    //return arg > 0 && Number.isInteger(arg);  - can use this Number.isInteger(s) in place of (arg%1)==0, -2 is an int
    return arg > 0 && (arg%1)==0;
  }
  //helper arrow fuction to filter negative and decimal numbers
   const multiply =(arg)=>{
    return arg * arg;
  }
  // change code above this line
  return arr.filter(delet).map(multiply);
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
