console.clear();

const rundTodoFunc = (test) => {
  test();
};
const student = {
  todo: ["JavaScript lernen ", "Node.js lernen"],
  addNewTodo: function (elemnt) {
    rundTodoFunc(() => {
      this.todo.push(elemnt);
      console.log(student.todo);
    });
  },
};

student.addNewTodo("React.js lernen");
