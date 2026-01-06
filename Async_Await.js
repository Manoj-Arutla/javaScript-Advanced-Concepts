// -----------------------------------------------
// Creating two promises with different resolution times
// Promises represent the eventual result of asynchronous operations
// -----------------------------------------------
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise1 is resolved!"), 4000); // resolves after 4 seconds
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise2 is resolved!"), 2000); // resolves after 2 seconds
})

// -----------------------------------------------
// Async function demonstrating the use of async/await
// -----------------------------------------------

// MDN: An async function is a function that implicitly returns a Promise. 
// Inside an async function, you can use the `await` keyword to pause execution until a promise is settled (resolved or rejected).  
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
async function pstatus(params) {
    // Runs immediately, before any promises are awaited
    console.log("lets see how long.............");

    // -----------------------------------------------
    // Await pauses execution of this async function until the promise resolves
    // MDN: await only works inside async functions
    // It waits for the promise to settle and returns the resolved value.
    // The rest of the async function is “paused” while awaiting.
    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    // -----------------------------------------------
    const resp1 = await p1;  // Wait for p1 to resolve (4 seconds)
    console.log(resp1);      // Logs "promise1 is resolved!"

    // Here we wait for p2, sequentially
    // Even though p2 resolves faster (2 seconds), we only continue after p1 finishes
    const resp2 = await p2;  // Wait for p2 to resolve
    console.log(resp2);      // Logs "promise2 is resolved!"
}

// Call the async function to execute promises in sequence
pstatus();

// -----------------------------------------------
// GitHub API URL for fetching user info
// -----------------------------------------------
const apiUrl  = "https://api.github.com/users/Manoj-Arutla"

// -----------------------------------------------
// Async function to fetch GitHub data using async/await
// -----------------------------------------------
async function githubInfo() {
    try {
        // Await pauses execution until fetch resolves
        // fetch() returns a promise representing the network request
        const data = await fetch(apiUrl);

        // Await pauses until the response is converted to JSON
        // json() also returns a promise
        const jsonValue = await data.json();

        // Logs the GitHub user object
        console.log(jsonValue);     
    } catch(err) {
        // Catch handles any errors (network errors, invalid URL, etc.)
        console.log("Error: " + err);
    }
}

// Call the async function to fetch GitHub info
githubInfo();
