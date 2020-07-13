function Pet(name) {
    this.name = name;
}

Pet.prototype.eat = function() {
    console.log(`${this.name} is eating...`);
}

function Dog(name, breed) {
    Pet.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Pet.prototype);

Dog.prototype.play = function() {
    console.log(`${this.name} is playing...`);
}

var max = new Dog("Max", "Golden Retriever");
max.eat();
max.play();
console.log(max);