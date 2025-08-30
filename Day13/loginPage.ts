import { chromium, Page} from "@playwright/test"

class LoginPage{

    lppage : Page // page refernce is set globally

    /* constructor(Tpage:Page){ // page that comes from inside the function block
        this.lppage=Tpage
    } */

        async loginPage( Tpage:Page){
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

    async verifyTitle():Promise<string>{
        return await this.lppage.title()
    }

    async closeBrowser(){
        await this.lppage.close()
    }
}

async function doLogin(){

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage()

  

  // await page.goto(``)

    const login = new LoginPage() // constructor passing page reference as a parameter

await login.loginPage(page)
await login.loadurl(`http://leaftaps.com/opentaps/control/main`);
await login.enterCredentials("demoCSR","crmsfa");
await login.clickLogin()
console.log(await login.verifyTitle())
await login.closeBrowser()

}

doLogin()
