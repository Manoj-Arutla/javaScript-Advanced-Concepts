//---> Reduce()
/*
reduce() is used when you want a single result from the elements of the array
for example, we have an array with numbers and we want to add all the elements 
of the array. the tradional way is to use any loop to get the answer but reduce method 
does the same with less code
*/
let nums = [0,1,2,3,4,5,6,7,8,9];
let sum = nums.reduce(function(acc,curr){
    return acc + curr;//same as acc+=curr
},0)
// let sum = nums.reduce((max,curr)=> max + curr, 0) -->shorter syntax
console.log(sum);

/*
Here acc = Accumulator and curr = CurrentValue
--> acc holds the running result of the reduction. It starts with the initialValue you pass.
(in our case acc = 0)
--> curr refers to the current element in the array
*/

//you can also use the reduce method to count the occurances as well. for example:

let arr = ["a", "b", "c", "a", "c","c"]
let countOcc = arr.reduce(
    (acc,curr)=>{
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }
,{})

console.log(countOcc);

/*
Here, the goal is to count the number of occurrences of each element in the array.
Initially, we pass an empty object as the accumulator.
For each element, we check if it already exists in the accumulator: if it does, we use its current value; if not, we use 0.
Then we add 1 to this value.

For example, in the array ["a", "b", "c", "a", "c"]:

1st iteration: acc = {}, curr = "a" → (undefined || 0) + 1 = 1 → acc = {a:1}

2nd iteration: curr = "b" → (undefined || 0) + 1 = 1 → acc = {a:1, b:1}

3rd iteration: curr = "c" → (undefined || 0) + 1 = 1 → acc = {a:1, b:1, c:1}

4th iteration: curr = "a" → (1 || 0) + 1 = 2 → acc = {a:2, b:1, c:1}

5th iteration: curr = "c" → (1 || 0) + 1 = 2 → acc = {a:2, b:1, c:2}

This way, we count the occurrences of each element in the array.
*/