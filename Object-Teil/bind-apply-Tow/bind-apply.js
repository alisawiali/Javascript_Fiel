console.clear();
//  hier wird Methode (bind) in der  Function setTimeout aufgebaut,d.h  verbunden und am Ende  (this aufgerufen) z.b
const student = {
  todos: ["JavaScript lernen ", "Node.js lernen"],
  addNewTodos: function (elemnt) {
    setTimeout(
      function () {
        this.todos.push(elemnt);
        console.log(this.todos);
      }.bind(this),
      1000
    );
  },
};
student.addNewTodos("React.js");
