class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    shout(){
        console.log(`${this.name} is shouting!`);
    }
    eat(){
        console.log(`${this.name} is eating!`);
    }

    run(){
        console.log(`${this.name} is running!`);
    }

}

class Monkey extends Animal{
    climb(){
        console.log(`${this.name} is climbing the tree!`);
    }
}

class Kangaroo extends Animal{
    jump(){
        console.log(`${this.name} is jumping!`);
    }
}

let ape = new Monkey("kong", "brown");
ape.climb();
ape.shout();
ape.eat();