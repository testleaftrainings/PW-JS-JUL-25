// //Using var you can redeclare and reassign

// var username="ravi@gmail.com"; //101
var username="ravindran@gmail.com" // redeclaration//102

var username = 123 //reasignment

console.log(username);


// //Using let you cannot redeclare but you can reassign

let accountBalance=20000; // 101
accountBalance=50000 // redeclaration not allowed in let

console.log(accountBalance);



//Using const you cannot redeclare also you cannot reassign

const accountNumber=23423423; // final constant value which cannot be reassigned
//accountNumber=50000 // redeclaration not allowed in const and reassignment is not allowed

console.log(accountNumber);
