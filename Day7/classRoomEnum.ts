// 1. Create an enum named Environment
enum Environment {
    LOCAL = "Local",
    DEVELOPMENT = "Development",
    STAGING = "Staging",
    PRODUCTION = "Production"
}

// 2 & 3. Function to run tests for a given environment
function runTests(env: Environment): void {
    console.log(`Running tests against the ${env} environment...`);
}

// 4. Example calls
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.STAGING);
runTests(Environment.PRODUCTION);
