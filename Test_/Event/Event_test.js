console.clear();
const todoModule = {
  todos: [
    { title: "HTML lernen", done: true },
    { title: "CSS lernen", done: false },
    { title: "JavaScript lernen", done: false },
  ],

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
    console.log(` Anzahl unerledigten Todo ${count}`);
    return;
  },
};

console.log(todoModule.addTodo("PHP lernen"));
console.log(todoModule.todos);
todoModule.completedTodo("CSS lernen");
console.log(todoModule.todos);

todoModule.getTodoCount();
console.log(todoModule.todos);
