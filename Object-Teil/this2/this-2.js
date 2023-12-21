console.clear();
let data = {
  addTodos: ["JavaScript lernen ", "Node.js lernen"],
  newTodoX: function (day) {
    this.addTodos.push(`erledigt ${day}`);
  },
};

data.newTodoX("Monday");

console.log(data.addTodos);
