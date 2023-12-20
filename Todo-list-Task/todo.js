const KEY_ENTER = 13;

document.addEventListener("DOMContentLoaded", () => {
  const newTodoTaskElemnt = document.getElementById("newTaskField");
  const todoListUlElement = document.querySelector(".toto-list");

  //  Collback function(maindiv) gegeben , der ruft destory aus dutton
  const addCollback = (mainDiv) => {
    const destoryBtn = mainDiv.querySelector(".destory");
    const checkboxToggle = mainDiv.querySelector(".toggle");

    destoryBtn.addEventListener("click", (evnt) => {
      if (checkboxToggle.checked) {
        //   const listItem = mainDiv.closest("li");
        mainDiv.remove();
      }
    });
    // Event-Listener, um das Styling des strong-Elements zu ändern
    checkboxToggle.addEventListener("change", () => {
      const strongElement = mainDiv.querySelector("strong");
      if (checkboxToggle.classList.contains("compted")) {
        strongElement.style.textDecoration = "line-through";
      } else {
        strongElement.style.textDecoration = "none";
      }
    });
  };

  newTodoTaskElemnt.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    const text = newTodoTaskElemnt.value;
    if (text) {
      const newButton = document.createElement("button");
      newButton.classList.add("destory");
      newButton.innerHTML = "x";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "toggle";
      checkbox.checked = true; // Wenn du das Kontrollkästchen standardmäßig aktivieren möchtest
      checkbox.style.color = "red";

      const newdiv = document.createElement("div");
      newdiv.appendChild(newButton);
      newdiv.appendChild(checkbox);
      //
      const newString = document.createElement("strong");
      newString.appendChild(document.createTextNode(text));

      const newDivElemnt = document.createElement("div");
      newDivElemnt.className = "main";
      newDivElemnt.appendChild(newString);
      newDivElemnt.appendChild(newdiv);

      const liElemnt = document.createElement("li");
      liElemnt.appendChild(newDivElemnt);

      todoListUlElement.appendChild(liElemnt);

      newTodoTaskElemnt.value = ""; // Leere das Eingabefeld

      //  CollBack Function der sich beim zahl
      addCollback(newDivElemnt);
    }
  });
});


