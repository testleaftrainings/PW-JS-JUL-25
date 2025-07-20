let x=10;
x+=5;
console.log(x); //15

x-=5
console.log(x); //10

x*=5
console.log(x); //50

let value=10;

//Post Increment = value++=> value+1

console.log(value++);//10 --> post increment the value gets printed and gets added
console.log(value);//11

//Pre Increment
console.log(++value);//12--> pre increment the value gets added and gets printed

//Post decrement = value--=> value-1

console.log(value--);//12 --> post increment the value gets printed and gets added
console.log(value);//11

//Pre Increment
console.log(--value);//10--> pre increment the value gets added and gets printed

/* Strict Equality "==="
1. Compare datatype and
2. Compare the value */
 
/* Non strict equality//loose equality "=="
Compare the value not the datatype */


console.log(1===1);//true
console.log(1==="1");//false strict equality
console.log("chrome"==="Chrome");//false
console.log(1=="1");//true because in loose equality your data typesgets converted
console.log(1==true);//true because in javascript loose equality your boolean to nummber true-->1
console.log(1===true);//false//here the boolean is not getting converted
console.log(true=="true");//false //JavaScript converts the Boolean true to a number → 1 this fails








