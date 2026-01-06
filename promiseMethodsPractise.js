// Choose which Promise method to run: "all", "allSettled", "race", "any"
const methodToRun = "all"; // <-- change this to switch methods

const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("p1 success"), 3000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("p2 reject"), 1000));
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve("p3 success"), 2000));

switch (methodToRun) {
    case "all":
        Promise.all([p1, p2, p3])
            .then(res => console.log("Promise.all result:", res))
            .catch(err => console.error("Promise.all error:", err));
        break;

    case "allSettled":
        Promise.allSettled([p1, p2, p3])
            .then(res => console.log("Promise.allSettled result:", res));
        break;

    case "race":
        Promise.race([p1, p2, p3])
            .then(res => console.log("Promise.race result:", res))
            .catch(err => console.error("Promise.race error:", err));
        break;

    case "any":
        Promise.any([p1, p2, p3])
            .then(res => console.log("Promise.any result:", res))
            .catch(err => console.error("Promise.any error:", err));
        break;

    default:
        console.log("Please select a valid method: all, allSettled, race, any");
}
