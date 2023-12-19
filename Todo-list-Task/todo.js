const KEY_ENTER = 13;

document.addEventListener("DOMContentLoaded", () => {
  const newTodoTaskElemnt = document.getElementById("newTaskField");
  const todoListUlElement = document.querySelector(".toto-list");

  newTodoTaskElemnt.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    const text = newTodoTaskElemnt.value;
    if (text) {
      const newButton = document.createElement("button");
      newButton.classList.add("destory");
      newButton.innerHTML = "x";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "toggel";
      checkbox.checked;

      const newdiv = document.createElement("div");
      newdiv.appendChild(newButton);
      newdiv.appendChild(checkbox);
      //
      const newString = document.createElement("strong");
      newString.appendChild(document.createTextNode(text));

      const liElemnt = document.createElement("li");
      liElemnt.className = "completed";
      liElemnt.appendChild(newString);
      liElemnt.appendChild(newdiv);

      const newDivElemnt = document.createElement("div");
      newDivElemnt.classList.add("main");
      newDivElemnt.appendChild(liElemnt);

      todoListUlElement.appendChild(newDivElemnt);

      newTodoTaskElemnt.value = ""; // Leere das Eingabefeld

      newButton.addEventListener("click", () => {
        liElemnt.remove();
      });
    }
  });
});
