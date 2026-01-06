//------------------***PROMISE.ALL()-------------------
// Definition:
// Promise.all() takes an array of promises and returns a single promise
// that resolves when **all promises resolve**, or rejects immediately 
// if **any promise rejects**.
// Key behavior:
// - Waits for all promises to fulfill
// - Fails fast if any promise rejects
// - Returns an array of results in the same order as the input
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 reject"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([p1, p2, p3])
    .then(res => console.log(res)) // Only runs if all succeed
    .catch(err => console.error(err)); // Runs immediately on first rejection


//------------------***PROMISE.ALLSETTLED()-------------------
// Definition:
// Promise.allSettled() takes an array of promises and returns a single
// promise that resolves when **all promises settle** (fulfilled or rejected).
// Key behavior:
// - Never rejects
// - Returns an array of objects describing each promise’s status
// - Each object has { status: "fulfilled"/"rejected", value/reason: ... }
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 reject"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 2000);
});

Promise.allSettled([p1, p2, p3])
    .then(res => console.log(res)); 
*/


//------------------***PROMISE.RACE()-------------------
// Definition:
// Promise.race() returns a promise that resolves or rejects as soon as 
// **any one of the input promises settles** (fulfilled or rejected).
// Key behavior:
// - Only the first settled promise determines the result
// - Others are ignored
// - Useful for timeouts or first-response logic
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 reject"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 2000);
});

Promise.race([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err));
*/


//------------------***PROMISE.ANY()-------------------
// Definition:
// Promise.any() returns a promise that resolves as soon as **any promise fulfills**.
// If all promises reject, it rejects with an AggregateError.
// Key behavior:
// - Ignores rejected promises until a fulfillment occurs
// - Useful when you only need one successful result
// - Only fails if **all promises fail**
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

/*
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 reject"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 4000);
});

Promise.any([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err));
*/
