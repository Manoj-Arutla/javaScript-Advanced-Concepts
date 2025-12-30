class Human{
    constructor(name){
        this._name = Human.capitalize(name);
        console.log("Human constructor invoked");
    }

    head(){
        console.log(`${this._name} has one Head`);
    }
    hands(){
        console.log(`${this._name} has two Hands(from HumanClass)`);
    }
    legs(){
        console.log(`${this._name} has two Legs`);
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}

class Vishvas extends Human{
    constructor(name){
        super(name);
        console.log("Vishvas Class contructor is invoked!");
    }

    bike(){
        console.log(`${this._name} owns Pulser`);
    }
    intrest(){
        console.log(`${this._name} is intrested in Data Analyst`);
    }
    hands(){
        super.hands();
        console.log("overRidden!");
        console.log(`${this._name} has two Hands(from VishvasClass)`);
    }
}

let c = new Vishvas("chinna");

c.intrest();
c.bike();
c.hands();
console.log(c.name);
c.name = "vishvas";
console.log(c.name);

