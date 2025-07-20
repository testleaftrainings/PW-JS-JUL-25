//Hoistomng

//var hositing


/* console.log(x);

var x=10; */


/* Explanation:
var x is hoisted to the top of the code 
Only the declaration is hoisted not the asssignment */

//Internal working

/* var x;//hoisted goes to the top and remains undefined
console.log(x);//undefined
x=10; */


//let and const for hoisting

/* console.log(y);
let y=10;

console.log(z);
const z=10 */

//hoisting happens in let and const also but it throws refrence error: Modern JavaScript

/* Explanation:
let and const are also hoisted but not initialized

They exist in a temporal dead zone*/

//Internal working for let and const

/* let y;//hoisted goes to the top but in TDZ
console.log(y);//error
y=10; 

const z;//hoisted goes to the top but in TDZ
console.log(z);//error
z=10;  */


//Named function:--> Hoisting happend in your named function

function julyBatch() {
console.log("Hello");
console.log("Hello");
console.log("Hello");
}
julyBatch()  // Name of the function

//Internally:

/* julyBatch()
function julyBatch() {
console.log("Hello");
console.log("Hello");
console.log("Hello");
} */



console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

