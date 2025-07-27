let batonDeivery = new Promise((resolve,reject)=>{

    let isBatonPassed = false;

    if (isBatonPassed) {
        resolve("Baton is successfully handed over")
    } else {
        reject("The baton was dropped")
    }

})

batonDeivery
.then(message=>{
    console.log(message);  
})

.catch(error=>{
    console.log(error);
    
})