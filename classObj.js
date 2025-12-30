let person = {
    name: "inferno",
    element: "fire"

};



let details = {
    hobby:"drawing",
    intrest: "eSports"
};

person.__proto__ = details;

let sports = {
    run: ()=>{
     alert("he runs");
     return "he runs"
     
    }
}

Object.setPrototypeOf(details, sports)

console.log(person.name);
console.log(person.intrest);
console.log(person.hobby);
console.log(person.run());