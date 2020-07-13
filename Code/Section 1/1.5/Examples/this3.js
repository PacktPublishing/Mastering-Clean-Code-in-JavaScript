var obj = {
    a: 1,
    b: 2, 
    c: 3
}

function test() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
}


function callMeLater(cb) {
    setTimeout(()=> {
        cb();
    }, 3000);
}

callMeLater(test.bind(obj));