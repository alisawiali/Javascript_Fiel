document.addEventListener("DOMContentLoaded", () => {
  const addStudent = document.querySelector(".add-Student");
  addStudent.addEventListener("click", () => {
    const liElemnt = document.createElement("li");
    const linkElement = document.createElement("a");
    linkElement.innerText = "link zum github";
    linkElement.target = "_blank";
    linkElement.href = "https://github.com/alisawiali";

    if (liElemnt) {
      liElemnt.classList.toggle("main");
    }

    // create Strong tag
    const strongElemnt = document.createElement("strong");
    const textNode = document.createTextNode("hallo welt");
    // Or this One
    strongElemnt.appendChild(document.createTextNode("Hallo Welt in Berlin"));
    liElemnt.appendChild(strongElemnt);

    // QuerySelector, um das erste UL-Element zu bekommen
    const ulElements = document.querySelector("ul");
    // before
    // after
    // prepend
    //ulElements.appendChild(liElemnt);
    liElemnt.appendChild(linkElement); // Fügt das element after li
    ulElements.prepend(liElemnt); // Fügt das li am Anfang

    // remove element from list
    liElemnt.addEventListener("click", (evt) => {
      evt.preventDefault();
      liElemnt.remove();
    });
  });
});
