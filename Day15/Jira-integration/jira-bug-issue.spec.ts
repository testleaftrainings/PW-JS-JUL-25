import { test } from "@playwright/test";
import {logADefectInJira } from "./after-hooks-jira-ticket";

test.afterEach(async({ },testInfo)=>{
    await logADefectInJira(testInfo)    
})

test("Test to record tracing a specific bug",async ({page}) => {

   await page.goto("https://login.salesforce.com");
   await page.locator("input[id='username']").fill(`ravindran.ramdas@testleaf.com`); 
   await page.locator("input[id='password']").fill(`RaviTestleaf#1432`); 
   await page.locator("input[id='Login']").click();
 
   await page.waitForLoadState('load');
   await page.locator("//div[@class='slds-icon-waffle']").click();
   await page.locator("//button[text()='View All']").click();
 
   await page.waitForLoadState('load');
   await page.getByPlaceholder("Search apps or items...").fill("Service");
   await page.locator("//mark[text()='Service']").first().click();
 
   await page.locator("(//span[text()='Cases']//following::*[local-name()='svg'])[1]").click();
   await page.waitForSelector("//span[contains(text(),'New Case')]");
   await page.locator("//span[contains(text(),'New Case')]").click();
   await page.getByPlaceholder("Search Contacts...").click();
   await page.locator("//span[contains(text(),'New Contact')]").click();
   await page.locator("//button[contains(@name,'salutation')]//span[text()='--None--']").click();
   await page.locator("//a[@title='Mr.']").click();
   await page.getByPlaceholder("First Name").fill("Ravindran");
   await page.getByPlaceholder("Last Name").fill("Test1");
   await page.locator("//span[text()='Save']").click();

})