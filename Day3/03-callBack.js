//Callback function :

function checkAvailablity(movieName,playMovie){

   console.log(`Checking the movie name:`);

   setTimeout(() => {
    console.log("Movie"+movieName+" is available"); 
      playMovie() 
   }, 2000);

 
    
}

function playMovie(){
console.log(`Now playing the movie`);

}

checkAvailablity("Spider Man",playMovie)