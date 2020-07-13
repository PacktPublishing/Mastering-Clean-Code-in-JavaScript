class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printMe() {
        console.log(`${this.firstName} ${this.lastName} - ${this.age}`);
    }
}

let p = new Person("John", "Smith", 45);
p.printMe();

let testPerson = {
    firstName: 'Jane',
    lastName: 'Daniels',
    age: 27
};
p.printMe.call(testPerson);