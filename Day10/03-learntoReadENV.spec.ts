
// import { test } from "@playwright/test";
// import dotenv from "dotenv"

// let filename = process.env.envFileName||'qa'

// dotenv.config({path:`Data/${filename}.env`}) //dotenv.config({path:`Data/qa.env`}) --> bydefault
// //changing the environment through terminal using the command $env:envFile='prod'--> override the qa.env
// test(`Read the data from env file`,async ({page}) => {


//     console.log(process.env.BaseUrl);
//     console.log(process.env.LF_Username);
//     console.log(process.env.LF_Password);

//  await page.goto(process.env.BaseUrl as string); // type assertion using as keyword
// // await page.locator("#username").fill(process.env.LF_Username as string)
// await page.fill("#username",process.env.LF_Username as string); // Optional wayto fill data
// await page.fill("#password",process.env.LF_Password as string);


// })

/* When you run a Node.js program (using playwright) N*/


console.log(process.env);
