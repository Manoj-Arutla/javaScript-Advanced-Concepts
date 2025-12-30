class Animal{
    constructor(name){
        this.name = this.capitalize(name);
        console.log("Animal constructor is invoked");
    }

    run(){
        console.log(this.name + " is running");
    }

    hunt()
    {
        console.log(this.name +" is hunting!!!!!!!!!!!!");
    }

    capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

class Tiger extends Animal{
    constructor(name){
        super(name);
        console.log("Tiger class's consructor is invoked!");
    }
    roar(){
        console.log(`${this.name} is Roaring`);
    }
    hunt(){
        super.hunt();
        console.log("overriding..........");
        console.log("tigeress hunt: successful!");
        
    }
}

let t = new Tiger("tigeress");
t.run();
t.roar();
t.hunt();