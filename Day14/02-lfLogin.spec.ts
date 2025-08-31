
import { test } from "@playwright/test";
import { LoginPage } from "./01-lfLogin";
   
test(`Login Verification`,async ({page}) => {
    
  
const login = new LoginPage(page) // constructor passing page reference as a parameter

await login.loadurl(`http://leaftaps.com/opentaps/control/main`);
await login.enterCredentials("demoCSR","crmsfa");
await login.clickLogin()
})

