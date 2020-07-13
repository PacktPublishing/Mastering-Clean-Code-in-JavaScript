let todos = [
    {
        id: 1,
        task: "Commit code",
        completed: true
    },
    {
        id: 2, 
        task: "Push code",
        completed: false
    },
    {
        id: 3,
        task: "Leave building",
        completed: false
    }
];

// console.log("All todos: ");
// console.log(todos);

let completed = [];
for(let todo of todos) {
    if(todo.completed) {
        completed.push(todo);
    }
}