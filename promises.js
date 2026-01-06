/*
  Promise - MDN Definition:
  A Promise is an object representing the eventual completion or failure of an asynchronous operation.
  It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
  A Promise is in one of these states:
    - pending: initial state, neither fulfilled nor rejected.
    - fulfilled: meaning that the operation completed successfully.
    - rejected: meaning that the operation failed.
  Syntax:
    let promise = new Promise(function(resolve, reject) { ... });
    promise.then(function(result) { ... }).catch(function(error) { ... });
*/

// Our shopping cart
let cart = ["shirts", "pants", "shoes"];

// Function to check if the cart is valid
function isCartValid(cart){
    // Here we simply return true, but in real cases you might check if cart is not empty
    return true;
}

// Function to create an order
function createOrder(cart){
    // Check if the cart is valid
    if(isCartValid(cart)){
        // If valid, return a new Promise
        return new Promise((resolve, reject)=>{
            let orderId = "12234"; // Sample order ID
            console.log("promise invoked"); // Log that we started creating an order
            console.log("creating order ID...........");

            // Simulate async order creation with setTimeout
            setTimeout(() => {
                console.log(`here is your orderID ${orderId}`); // Log the order ID after delay
                resolve(orderId); // Resolve the promise with orderId
            }, 2000); // 2-second delay to simulate network / processing time
        });
    } else {
        // If cart is invalid, reject the promise
        return Promise.reject("invalid cart");
    }
}

// Function to create a payment for a given orderId
function proceedTopayment(orderId){
    return new Promise(resolve =>{
        let paymentID = "64654-544-5464"; // Sample payment ID
        console.log("creating payment id........");

        // Simulate async payment creation
        setTimeout(()=>{
            console.log(`payment id for the ${orderId} is ${paymentID}`); // Log payment ID
            resolve(paymentID); // Resolve with paymentID
        }, 2000); // 2-second delay
    });
}

// Function to generate order summary using paymentID
function orderSummary(paymentID){
    return new Promise(resolve=>{
        // Simulate async summary creation
        setTimeout(()=>{
            console.log("order summary is created for " + paymentID); // Log order summary creation
            resolve("order summary created"); // Resolve with final message
        }, 2000); // 2-second delay
    });
}

// -----------------------
// Async/Await Version
// -----------------------

/*

async function processOrder(cart){
    try {
        // Step 1: create order
        // Equivalent to: createOrder(cart).then(...)
        let orderId = await createOrder(cart); 
        // Step 2: proceed to payment after order is created
        // Equivalent to: proceedTopayment(orderId).then(...)
        let paymentID = await proceedTopayment(orderId); 
        // Step 3: create order summary after payment is done
        // Equivalent to: orderSummary(paymentID).then(...)
        let summary = await orderSummary(paymentID); 
        // Step 4: log final summary
        console.log(summary); 
    } catch(err){
        // Step 5: handle errors if any (cart invalid or other issues)
        console.log("error: " + err);
    }
}

// Call the async function to process the order
processOrder(cart);

*/
