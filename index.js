// Your code here
class cat{
    constructor(name, sex){
        this.name : name
        this.sex : sex

    }
    speak(){return `${this.name} says Meow`}
}
class dog{
    constructor(name, sex){
        this.name : name
        this.sex : sex
    }
    speak(){return `${this.name} says woof`}
}
class bird{
    constructor(name, sex){
        this.name : name
        this.sex : sex
    }
    speak(){
        if (this.sex ===male) {
            return `it is me ${this.name} the parrot!`
        }
        else if (this.sex ===female){
            return `${this.name} says squawks`
        }
        else{
            return `${this.name} says squawk`
        }
    }
}