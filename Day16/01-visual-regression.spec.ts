
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

//Notes :
 //assert a specific portion 


/* import { expect, test } from "@playwright/test";

test('Partial Visual check', async ({ page }) => {
  await page.goto('https://www.testleaf.com/');

  // Crop the screenshot to a specific area
  const ss = await page.screenshot({
    clip: {
      x: 100,      // starting x coordinate
      y: 200,      // starting y coordinate
      width: 300,  // width of the area
      height: 200  // height of the area
    }
  });

  expect(ss).toMatchSnapshot('partial-visual-check.png');
}); */
   

/* Note using percy:
npm install --save-dev @percy/cli @percy/playwright
 */
