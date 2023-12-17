document.addEventListener("DOMContentLoaded", () => {
  const iconBlock = document.querySelectorAll("[date-help]");
  console.log(iconBlock);
  for (const helbElement of iconBlock) {
    helbElement.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation(); // das wird nicht mehr arbeit geben  ab dieses event .d.h stop ab jetzt
      const valueElement = helbElement.attributes["date-help"].value;
      alert(valueElement);
    });
  }
  // ---------------------
  const cardContent = document.getElementsByClassName("head");

  for (const textHead of cardContent) {
    textHead.style.cursor = "pointer";
    // Damit das block  vorher  zugeklappt  wird
    const nextElement = textHead.nextElementSibling;
    // toogel classlist main, der im style none gegebn hat.
    nextElement.classList.toggle("main");
    const siblingButton = nextElement.nextElementSibling;
    if (siblingButton && siblingButton.tagName === "BUTTON") {
      siblingButton.classList.toggle("main");
    }
    // per hand wird zugeklappt
    textHead.addEventListener("click", (event) => {
      event.preventDefault();

      const nextElements = textHead.nextElementSibling;
       nextElements.classList.toggle("main");

      const siblingButton = nextElements.nextElementSibling;
      if (siblingButton.tagName === "BUTTON") {
        siblingButton.classList.toggle("main");
      }
    });
  }
});
