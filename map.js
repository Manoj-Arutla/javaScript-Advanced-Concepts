//to understand map() and how it has made coding easy lets see
//how map() works better than conventional forLoops

let radius = [2,3,4,5,6];

function diameter(radius){
    return 2*radius
}

function area(radius){
    return Math.PI*radius*radius;
}

function circumference(radius){
    return 2*Math.PI*radius;
}

/**
---> to short the syntax
const diameter = r => 2 * r;
const area = r => Math.PI * r * r;
const circumference = r => 2 * Math.PI * r;
 */

function calculate(radiusArray, property){
    let output = []
    for(let i=0; i<radiusArray.length; i++){
        output.push(property(radiusArray[i]));
    }
    return output;
}

console.log(calculate(radius,area));

//this is the normal way to calculate the circle's diameter, area and circumference

//--->using map()

console.log(radius.map(diameter));
console.log(radius.map(area));
console.log(radius.map(circumference));
//here we dont even need to write calculate function.
//its this simple to loop through the array and transform elements using map()
