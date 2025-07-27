// Task 1: Function Declaration

function userProfile(name) {
    console.log(`Hello, ${name}!`);
}
userProfile("Ravi"); // Example call

// Task 2: Arrow Function

const double = (num) => num * 2;
console.log(double(5)); // Example call, should return 10

// Task 3: Anonymous Function with setTimeout

setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function

function getUserData(xx) {
    // Simulate data fetching with 3 seconds delay

    console.log("Hello");
    
    setTimeout(() => {
        xx(); // Call the callback after the delay
    }, 3000);
}

// Define the callback function
function logMessage() {
    console.log("Call Back Function");
}

// Call the function and pass the callback
getUserData(logMessage);