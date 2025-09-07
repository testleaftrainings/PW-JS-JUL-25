class Page { // parent class

    public loadURL():void{
        console.log(`Loading the base page`);
      
    }

}
class LoginPage extends Page{ // Child class

    public loadURL():void{
        console.log(`Loading the Login page`); 
     }
}

const login = new LoginPage();
login.loadURL()

/* In method overriding the child class is getting more precedence compared to paren */