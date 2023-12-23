console.clear();
const todoModule = {
  todos: [],

  // emit Methode function
  emit: function (eventName, payload) {
    console.log(` Even ${eventName}  emitted with payload `, payload);
  },

  //    Add new Todo
  addTodo: function (title) {
    for (const todo of this.todos) {
      if (todo.title === title) {
        return `Das Todo "${title}" existiert bereits.`;
      }
    }
    const newTodo = { title, done: false };
    this.todos.push(newTodo);
    this.emit("add", newTodo);
    return `Das Todo "${title}" wurde hinzugefügt.`;
  },
  //  Prüfe ob auf true gesetzt
  completedTodo: function (title) {
    for (const todo of this.todos) {
      if (todo.title === title && todo.done === false) {
        todo.done = true;
        console.log(`${todo.title} -ist jetzt abgeschlossen`);
        this.emit("completed", todo);
      }
    }
  },

  getTodoCount: function () {
    let count = 0;
    for (const todo of this.todos) {
      if (!todo.done) {
        count++;
      }
    }
    console.log(count, `: Anzahl unerledigten Todo ${count}`);
    return count;
  },
  printCurrentTodoCount: () => {
    const todoCruuent = todoModule.getTodoCount();
    console.log(
      `Aktuelle Anzahl an nicht erledigten Todos ist ${todoCruuent}.`
    );
  },
};
//
console.log(todoModule.addTodo("PHP lernen"));
console.log(todoModule.todos);
//
todoModule.completedTodo("CSS lernen");
console.log(todoModule.todos);
//
todoModule.getTodoCount();
console.log("Count ....", todoModule.todos);
//
todoModule.printCurrentTodoCount();


