
import { expect, test } from "@playwright/test";

test(`Visual regression testing`,async ({page}) => {
    
    await page.goto(`https://www.amazon.in/`)
    const ss = await page.screenshot()
    expect(ss).toMatchSnapshot()
})

test.only(`Visual regression testing element based`,async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    
    const ele = page.locator("#username");
    const ss1 = await ele.screenshot();
    expect(ss1).toMatchSnapshot()
})