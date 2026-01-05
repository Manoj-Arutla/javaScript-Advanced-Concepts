//---> filter()

let nums = [1,2,3,4,5,6,7,8,9];
// let evenNums = nums.filter(i => i%2==0) for shorter syntax
let evenNums = nums.filter((i)=>{
    return i%2===0; //filter returns the true values out of the array for the given condition
})
console.log(evenNums);

/*
    map() transforms each and every element of the array. while filter returns true
    values for the given condition. In the above example we have extracted the even
    numbers from the array
 */