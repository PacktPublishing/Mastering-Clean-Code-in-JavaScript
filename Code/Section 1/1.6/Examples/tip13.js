"use strict"

var person = {
    firstName: 'John',
    lastName: 'Smith'
};

Object.defineProperty(person, 'age', {
    value: 28,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(person);
person.age = 44;
console.log(person);
