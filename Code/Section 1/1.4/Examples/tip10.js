let toDos = [
    {
        task: 'Get some eggs',
        done: false
    },
    {
        task: 'Send pull request',
        done: true
    },
    {
        task: "Watch 'Mastering Clean Code in JavaScript'",
        done: false
    }
];

function printAllToDos(todos) {
    for(let todo of todos) {
        console.log(todo.task);
    }
}

function printCompletedToDos(todos) {
    for(let todo of todos) {
        if(todo.done) {
            console.log(todo.task);
        }
    }
}

function printPendingToDos(todos) {
    for(let todo of todos) {
        if(!todo.done) {
            console.log(todo.task);
        }
    }
}

//filter = 0 prints all todos
//filter = 1 prints completed todos
//filter = 2 prints pending todos
function printToDos(toDos, filter) {
    if(filter == 0) {
        for(let todo of toDos) {
            console.log(todo.task);
        }
    }
    else if(filter == 1) {
        for(let todo of toDos) {
            if(todo.done) {
                console.log(todo.task);
            }
        }
    }
    else {
        for(let todo of toDos) {
            if(!todo.done) {
                console.log(todo.task);
            }
        }
    }
}