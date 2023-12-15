let cards = [...document.querySelectorAll(".card")];

document.addEventListener("DOMContentLoaded", () => {
  const dataExtra = document.querySelectorAll("[data-extra]");
  for (const extraData of dataExtra) {
    extraData.addEventListener("click", (event) => {
      event.preventDefault();
      const dataResult = extraData.attributes["data-extra"];
      alert(`${dataResult.value}`);
    });
  }

  const allCards = document.getElementsByClassName("card");

  for (const classCards of allCards) {
    // contains fragt, ob das Element ein bestimmte  class card hat
    console.log(classCards.classList.contains("card")); // True
    classCards.classList.add("CardOne"); // add das neu class name
    classCards.classList.toggle("CardHead"); // fügt hin,wenn es nicht gefügt aber löscht es,wenn es da ist
    classCards.classList.remove("CardOne"); // Hier entfernen wir die Klasse sofort nach dem Hinzufügen
  }
});

//........................................................................................
// if(!classCards.hasAttribute('id')){
//     class.setAttribute('id', 'card');
//     }
