document.addEventListener("DOMContentLoaded", () => {
  const extratext = document.querySelectorAll("[data-extra]");
  for (const cardText of extratext) {
    cardText.addEventListener("click", (event) => {
      event.preventDefault();
      const cardTarg = cardText.attributes["data-extra"];
      alert(`${cardTarg.value}`);
    });
  }

  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    // wenn style hat background und er ist leer dann
    if (card.style["background-color"] === "") {
      card.style["background-color"] = "blue";
    } else {
      // oder ---> am besstens wird style beim css und nicht in js.
      card.style.backgroundColor = "green";
    }

    console.log(card.parentElement);

    card.addEventListener("click", () => {
      // Hier wird es geprüft, ob der Alter element heißt main dann
      if (card.parentElement === "main") {
        console.log(card.parentNode);
        // Hier wird card  auf  dispaly none gesetzt.
        card.style.children = "none";
      } else {
        // Hier wird card  auf  background auf  #cccc gesetzt.
        card.style.backgroundColor = "#cccc";
        console.log(card.children);
      }
    });
  }
});

const pargraph = document.getElementsByTagName("p");
console.log(pargraph.children);
