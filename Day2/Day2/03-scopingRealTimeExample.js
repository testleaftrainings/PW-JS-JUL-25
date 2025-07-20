/* Imagine you're building a user profile screen in an app like Instagram. 

You want to:

Show gender-specific preferences (like theme colors).

Assign default age based on gender type (for demo or onboarding purposes). */



let genderType = "female"; // The user's gender selected during signup

function printGender(){ // var is function scoped
    let color = "brown"; // Default theme color for the profile page

    if (genderType.startsWith("female")) {
        var age = 30; // Default age shown in profile preview for female
         let color = "pink"; // Override color for female
        console.log("She/her favourite colour: " + color);
    } else {
        var age = 35; // Default age for male
       // let color="white"
        console.log("He/him favourite colour: " + color); // uses outer color (brown)
    }

    console.log("Displayed Age:", age); // Age is visible due to function scope of `var`
}

printGender();
console.log("Gender selected globally:", genderType);
