class Pet {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating....`);
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }   

    play() {
        console.log(`${this.name} is playing...`);
    }
}

let max = new Dog("Max", "Golden Retriever");
max.eat();
max.play();
console.log(max);