document.addEventListener("DOMContentLoaded", () => {
  const addStudent = document.querySelector(".add-Student");
  addStudent.addEventListener("click", () => {
    const liElemnt = document.createElement("li");
    liElemnt.classList.toggle("main");

    // create Strong tag
    const strongElemnt = document.createElement("strong");
    const textNode = document.createTextNode("hallo welt");
    // Or this One
    strongElemnt.appendChild(document.createTextNode("Hallo Welt in Berlin"));
    liElemnt.appendChild(strongElemnt);

    // QuerySelector, um das erste UL-Element zu bekommen
    const ulElements = document.querySelector("ul");
    ulElements.appendChild(liElemnt);

    // remove element from list
    liElemnt.addEventListener("click", () => {
      liElemnt.remove();
    });
  });
});
