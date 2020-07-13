function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    console.log(this);
}

let p = new Person("John", "Smith", 43);
console.log(p);

