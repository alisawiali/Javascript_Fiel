console.clear();
const tiem = 1000;
// setInterval(() => {
//   console.log(
//     "setInterval function wird janachdem wie viel sekunden gegeben dauerhaft gerufen"
//   );
// }, tiem);

runCallback = (run) => {
  run();
};
setTimeout(() => {
  console.log("setTimeOut collback");
}, tiem);

const data = {
  todo: ["JavaScript lernen ", "Node.js lernen"],
  addNewTodo: function (elemnt) {
    runCallback(() => {
      // this wird damit hier nicht functioniert, weil this beziht sich jetzt auf function(runcallback und nicht auf data),
      // wenn nicht arrow function benutze, ansonsten arrow function ist ok
      this.todo.push(elemnt);
    });
  },
};
data.addNewTodo("ReactJs Lernen ");
console.log(data.todo);
