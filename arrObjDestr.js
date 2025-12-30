let arr = [3,45,6,78,453,23];
let [,,,...rest] = arr;
console.log(rest);

let obj = {
    x: 1,
    y: 2,
    z: 3
}

const {x:a, y:b,z:c} = obj;
console.log(a,b,c);

const person = {
    name: "thePerson",
    marks: {
        math: 45,
        science: 99,
    },
    percentage: 77,
    intrests:"many",
    extras: "++++"
}

const {name: personName,marks: {math,science},percentage:personPercentage,...rem} = person
console.log(personName, math,science, personPercentage,rem);


let ad = [5,6,10];

function sum(num1,num2,num3){
    return num1+num2+num3;
}

console.log(sum(...ad));

const obj1 = {
    userName  : "name",
    id: "unique0",
    intrests: "many",
    q_no : 79
};

console.log({...obj1, userName: "Changed!"});//<--overRides and assigns the values
console.log({userName: "Changed!",...obj1});//when overriding id after the ...obj1
//line45 cannot overRide as the spread operator is used after trying to override.
//when wanting to override, always overRide after using the spred operator.