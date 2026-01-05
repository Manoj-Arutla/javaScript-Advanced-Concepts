let name1 = {
    firstName: "Inferno",
    lastName: "Dragneel",
    knowsDriving: function(){
        console.log(this.firstName + " " + this.lastName +" knows how to drive a car");
    }
    
}

let printFullName = function(place,greetings){
        console.log(this.firstName +" "+ this.lastName +" from "+ place +", " + greetings );
    }

let name2 = {
    firstName: "Thunder",
    lastName: "Emperor"
}

printFullName.call(name1,"Purgetory","Konichiwa!");
/*
Call method is used to utlise an existing function without writing a new one
this concept is also known as function Borrowing.
 */
printFullName.apply(name2,["X-zone","Konichiwa!"]);
/*
apply method is similar to call method except, the arguments are passed to in function
in an array as a list.
 */

let printMyName = printFullName.bind(name1,"Purgetory","Konichiwa!");
console.log(printMyName);//returns a method and prints it on the console
printMyName();//that method is invoked here


/*
bind method is also similar to call method except it does not invoke the borrowed 
function but creates a copy of the function which can be invoked later.
 */

name1.knowsDriving();

/*
lets try to borrow knowsDriving method to the name2 using call method.
here knowsDriving method is inside name1 unlike the printMyname which
is in global space
 */
name1.knowsDriving.call(name2); //this is how you borrow a function from an object


