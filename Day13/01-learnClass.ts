

class Browser{ // className userdefined 

    browserInfo : string="Chrome"
    browserVersion : number= 111

    launchBrowser(){ // method name is userdefined --> test logic will be written inside this method
        console.log("Launching chrome");
        
    }
}

let leafTaps = new Browser() // leaftaps is the object created using the constructor

console.log(leafTaps.browserInfo);// properties
console.log(leafTaps.browserVersion); 
leafTaps.launchBrowser()// methods

 
