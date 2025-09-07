import { test } from "@playwright/test";

test.use({
    geolocation:{
        latitude:41.8332392,
        longitude:88.0615686
    },
    permissions:[`geolocation`,'notifications']
})


test(`GeoLocation`,async ({page}) => {
    await page.goto("https://www.google.co.in/maps/");
    await page.click("#sVuEFc")
    await page.waitForTimeout(8000)
})