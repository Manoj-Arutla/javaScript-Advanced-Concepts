class Animal{
    constructor(name){
        this._name = Animal.capitalize(name);
        console.log("Animal class constructor invoked!");
    }

    run(){
        console.log(`${this._name} is running!`);
    }

    roar(){
        console.log(`${this._name} is roaring!`);
    }

    get name(){
        return `using -->get<--  :   name's ${this._name}`;
    }

    set name(newName){
        this._name = newName;
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}

class Snake extends Animal{
    constructor(name){
        super(name);
        console.log("Snake's constructor invoked!");

    }
    crawl(){
        console.log(`${this._name} :raktha pinjarroii...busakottesthundi roii`);
    }
    isVenomous(){
        console.log(`${this._name} : Venomous`);
    }
}

let a = "thunder";

let russelViper = new Snake("russel Viper");
russelViper.crawl();
console.log(russelViper.name);
russelViper.name = "kingCobra";
console.log(russelViper.name);
console.log(russelViper instanceof Animal);
console.log(a instanceof Animal);