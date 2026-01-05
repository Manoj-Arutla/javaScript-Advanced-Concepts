class Employee{
    constructor(name){
        this.name = name;
        console.log(`${this.name} constroctor is invoked!`);
    }

    login(){
        console.log("employee has logged In!");
    }

    logout(){
        console.log("employee has logged Out!");
    }

    requestLeaves(leaves){
        console.log(`employee has requested for ${leaves} leaves`);
    }

    hello(name){
        console.log(`hello ${name}`);
    }

}

//this is inheritance. if the required elements are
// not found in the class, it tries to fetch the elements 
//from the class from which it has been extended or inherited.

class Programmer extends Employee{
    // constructor(name){
    //     super(name)        
    //     console.log("Programmer constructor is invoked");
    // }

    //if there was no constructor in the extended class then JS engine will
    //will automatically creates an empty constructor with super() init 
    //and the parent class's contructor is executed
    raiseComplaint(){
        console.log("employee has raised a complaint!");
    }
    requestLeaves(leaves){
        // console.log(`employee has requested for ${leaves + 1} leaves (one extra!)`);
        super.requestLeaves(10);//here requestLeaves is executed, then with super key
        console.log("abc"); //we fetch Employee's requestleaves method.
        super.hello("inferno")
    }

}

let p1 = new Programmer("thunder");
p1.requestLeaves(5);

//here if requestLeaves is not present in the Programmer class,
//then p1 tries to fetch requestLeaves from the Employee class
//as Programmer class inherits Employee class
//if the required method is found in Employee, it runs the method else throws an error.

