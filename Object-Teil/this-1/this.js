console.clear();
const data = {
  todos: ["JavaScript lernen", "Node.js Lernen"],
  newData: function (Tod) {
    this.todos.push(Tod); //  this bezieht sich auf data
    this.printTodos();
  },

  printTodos: function () {
    console.log(this.todos);
  },
};
data.newData(["Vue.js", "PHP"]); // Fügt Vue.js hinzu
//console.log(data.todos);
