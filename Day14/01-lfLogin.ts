import { Page } from "@playwright/test"

export class LoginPage{

    lppage : Page // page refernce is set globally

    constructor(Tpage:Page){ // page that comes from inside the function block
        this.lppage=Tpage
    }

       async loadurl(url:string){        
       await this.lppage.goto(url)  //await page.goto()      
    }

    async enterCredentials(username:string, password:string){
        await this.lppage.fill("#username",username)
         await this.lppage.fill("#password",password)
    }

    async clickLogin(){
        await this.lppage.click(".decorativeSubmit")
    }

 
}