var a = 92;
// let a = 92;

var obj = {
    a: 1,
    b: 2, 
    c: 3
}

function test() {
    console.log(this.a);
}

test();

obj.test = test;
obj.test();