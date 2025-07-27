
import { chromium, test  } from "@playwright/test";

test(`Test to launch Browser manual way of invoking the browser`, async() => {

    const browser = await chromium.launch({channel:"chrome", headless:false}) // promise is resolved only when your browser launch is completed.
                                          // promise if rejected it will not move to your next step and throw timeout error

    const context = await browser.newContext() // promise should be resolved to move to create a "page"
    const page = await context.newPage();   

    await page.goto("https://www.amazon.in/")

    const url = page.url()

    console.log(`The url of the page is ${url}`);   

})

