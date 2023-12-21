document.addEventListener("DOMContentLoaded", () => {
  const contents = document.getElementsByClassName("card");
  for (const card of contents) {
    card.addEventListener("click", () => {
      if (card.parentElement !== "") {
        console.log(card.nextElementSibling);
      } else {
        console.log(card.children);
      }
    });
  }
});

/*

card.parentElement; Der Vater 
previousSibling:  Der vor sohn
nextElementSibling: Der next Shon  _> gleich parentNode
children:
 
 */
