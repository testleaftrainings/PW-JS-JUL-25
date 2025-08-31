import { PgAction } from "./03-learnInterface";

abstract class ElementWrapper{ // abstract is a keyword

//Not allowed to create an object

typeAndTab(){ // implemnented method
    console.log(`Type in the data and tab`);
    
}

abstract takeScreenshot(): void // unimplemented method/ method signature
}

class Login extends ElementWrapper implements PgAction { // Hybrid 

takeScreenshot(){
    console.log("screenshot for each test");   
}

 clearandType(): void {
        console.log("Hello");
        
    }

    browserImpl(): void {
        console.log("launch Browser");
        
    }

    handleWindow(): void {
        console.log("launch Browser");

}
}

const login = new Login()
login.typeAndTab()
login.takeScreenshot()
login.browserImpl()
login.clearandType()
login.handleWindow()