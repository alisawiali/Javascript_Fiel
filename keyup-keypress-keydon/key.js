document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.getElementById("addBtnItem");
  const nameInputItem = document.getElementById("nameInput");
  const ulElemnt = document.getElementById("student-list");
  btnAdd.addEventListener("click", (evt) => {
    evt.preventDefault();
    const text = nameInputItem.value;
    if (text) {
      const strongElemnt = document.createElement("strong");
      strongElemnt.appendChild(document.createTextNode(`  ${text}`));
      console.log(strongElemnt);
      const liElemnt = document.createElement("li");
      liElemnt.appendChild(strongElemnt);
      ulElemnt.appendChild(liElemnt);
    }
  });
  nameInput.addEventListener("Keyup", (evt) => {
    console.log(evt);
  });
  nameInput.addEventListener("keypress", (evt) => {
    console.log(evt);
  });
  //   nameInput.addEventListener("keydown", (evt) => {
  //     console.log(evt);
  //   });
});
