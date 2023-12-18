document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("addBtnItem");
  const nameInput = document.getElementById("nameInput");
  const ulElemnt = document.getElementById("student-list");
  const checkboxInput = document.getElementById("checkbox");
  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault();
    // checkbox wird gechecked
    if (checkboxInput.checked === false) {
      alert("Pleacen AGB read");
      // bei retren wird angehalten , wenn den User nicht auf dem Box checked
      return;
    }
    const text = nameInput.value;
    if (text) {
      // Definre tag (strong)
      const strongElemnt = document.createElement("strong");
      strongElemnt.appendChild(document.createTextNode(text));
      // difinree (li) und add strongElemnt in liElemnt
      const liElemnt = document.createElement("li");
      liElemnt.appendChild(strongElemnt);
      ulElemnt.appendChild(liElemnt);

      // Die Input leer  weder erstellen
      nameInput.value = "";
      // Hier füge den Event-Listener für das Löschen des aktuellen li-Elements hinzu
      liElemnt.addEventListener("click", () => {
        liElemnt.remove();
      });
      return;
    } else {
      alert("Please enter a valid name!");
    }
  });
});
