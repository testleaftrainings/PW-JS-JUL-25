import { devices, test } from "@playwright/test";


test.use({
    ...devices[`iPad (gen 11)`],
    ...devices[`BlackBerry Z30`]
})

test(`Emulate the devices`,async ({page}) => {
    await page.goto(`https://www.testleaf.com/`);
    await page.waitForTimeout(4000)
})