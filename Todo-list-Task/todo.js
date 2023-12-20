const KEY_ENTER = 13;

document.addEventListener("DOMContentLoaded", () => {
  const newTodoTaskElemnt = document.getElementById("newTaskField");
  const todoListUlElement = document.querySelector(".toto-list");
  // footer Block
  const footerElemnt = document.querySelector(".footer");
  const todoCountElemnt = document.querySelector(".todo-count strong");
  const clearBtn = document.querySelector(".clearBtn");
  //
  const refercheFooter = () => {
    if (footerElemnt.children.length === 0) {
      footerElemnt.style.display = "none";
    } else {
      footerElemnt.style.display = "test";
    }
    // let count = 0;
    // for (const ulElemntCount of todoListUlElement.children) {
    //   if (!ulElemntCount.classList.contains("completed")) {
    //     count++;
    //   }
    //     todoCountElemnt.innerText = count;
    // }
    // ----------------- Oder ----------- Damit die Zahl angezeigt wird.z.b wie viel Elemnte wurde hingefügt.
    const countElemnt =
      todoListUlElement.querySelectorAll("li:not(.completed)").length;
    todoCountElemnt.innerText = `Item ${countElemnt} `;

    //  (BUTTON): wenn aud checkbox angeklegt dann wird btn angezeigt.
    const completedCountClaer =
      todoListUlElement.querySelectorAll("li .completed").length;
    if (completedCountClaer === 0) {
      clearBtn.style.display = "none";
    } else {
      clearBtn.style.display = "";
    }
  };
  refercheFooter();

  //  Collback function(maindiv) gegeben , der ruft destory aus dutton
  const addCollback = (mainDiv) => {
    const destoryBtn = mainDiv.querySelector(".destory");
    const checkboxToggle = mainDiv.querySelector(".toggle");

    destoryBtn.addEventListener("click", (evnt) => {
      if (checkboxToggle.checked) {
        mainDiv.remove();
        refercheFooter();
      }
    });
    // Event-Listener, um das Styling des strong-Elements zu ändern
    checkboxToggle.addEventListener("change", () => {
      const strongElement = mainDiv.querySelector("strong");
      if (checkboxToggle.checked) {
        mainDiv.classList.add("completed");
        strongElement.style.textDecoration = "line-through";
      } else {
        mainDiv.classList.remove("completed");
        strongElement.style.textDecoration = "none";
      }
      refercheFooter();
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
      checkbox.classList.add("toggle");
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
      refercheFooter();
      //  CollBack Function der sich beim zahl
      addCollback(newDivElemnt);
    }
  });
  // mit dem clearBtn wird all gelöschgt, wenn angekrezt wird.
  clearBtn.addEventListener("click", (evnt) => {
    const completedClear = todoListUlElement.querySelectorAll("li .completed");
    for (const todoclearElemnt of completedClear) {
      todoclearElemnt.remove();
    }
    refercheFooter();
  });
});
