document.addEventListener("DOMContentLoaded", () => {
  const butAdd = document.querySelector(".btnAdd");

  // Add a click event listener for each of the list items
  butAdd.addEventListener("click", (but) => {
    but.preventDefault();
    console.log(butAdd);
    const addElement = document.createElement("li");
    addElement.innerHTML = "hallo welt";
    addElement.classList.add("main");
  });
  // Löscht das Element oder löscht das content block
  const butX = document.querySelectorAll("[date-dismiss]");

  butX.forEach((blockLöschen) => {
    blockLöschen.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(butX);
      // wird durch den parentElement (Vater des Element ) gerufen und dann löschem.
      blockLöschen.parentElement.remove();
    });
  });
});
