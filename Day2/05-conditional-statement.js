
function findNumberType(number){

if(number>0){
    console.log("Its positive");    
}
else if(number === 0){
    console.log("Its neutral");//Output
}
else if(number < 0){
    console.log("Its negative");
}else {
    console.log("Check your inputs");    
}
}

findNumberType(0)



/* function findNumberType(number){

    switch(true){
        case number>0:  
        console.log("Its Positive");
        break

        case number===0: //true
        console.log("Its neutral");
        break

        case number<0:
        console.log("Its a negative value");
        break

        default:
            console.log("Check your inputs");         
        

    }

}

findNumberType(0)
 */