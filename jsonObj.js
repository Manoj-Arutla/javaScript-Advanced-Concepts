let person = {
    name: "inferno",
    age: 24
};

let jsonFormatted = JSON.stringify(person)//converts object into JSON
let backToObj = JSON.parse(jsonFormatted)//converts JSON back into Object

console.log(person); //prints the initial object
console.log(jsonFormatted); //prints the object which is converted into JSON format
console.log(backToObj); //prints the JSON which is converted into object