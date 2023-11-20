const cards = document.getElementsByClassName("card");
// console.log(cards);
// for (const cardsHead of cards) {
//   console.log(cardsHead);
//   //   cardsHead.addEventListener("click", () => {
//   //     alert("Hallo welt");
//   //   });
// }

//------------------------------getElementsByTagName (p)-------------
// const paragraphs = document.getElementsByTagName("p");

// for (const p of paragraphs) {
//   p.addEventListener("click", function () {
//     if (this.classList.contains("main")) {
//       alert("Hallo Welt");
//     } else {
//       alert("Dies ist die Hauptzeile");
//     }
//   });
// }
//------------------------------querySelector ()-------------
// const paragraph = document.querySelector(".paragraphTwo");
// console.log(paragraph);
// paragraph.addEventListener("click", function () {
//   this.style.color = "red";
// });
//------------------------------getElementsByClassName ()-------------
// const paragraphs = document.getElementsByClassName("paragraphTwo");

// Array.from(paragraphs).forEach((textTwo) => {
//   textTwo.addEventListener("mouseover", function () {
//     if (textTwo.classList.contains("main")) {
//       textTwo.style.color = "red !important";
//     } else {
//       textTwo.style.color = "blue";
//     }
//   });
// });

// -------Oder

const textParagraphs = document.querySelectorAll(".paragraphTwo");

textParagraphs.forEach((paragraph) => {
  paragraph.addEventListener("click", function () {
    if (paragraph.classList.contains("paragraphTwo")) {
      paragraph.style.color = "red";
    } else {
      paragraph.style.color = "blue";
    }
  });
});
//-----  0der
for (const p of textParagraphs) {
  p.addEventListener("click", function () {
    if (p.classList.contains("paragraphTwo")) {
      p.style.color = "red";
    } else {
      p.style.color = "blue";
    }
  });
}

// const textParagraphs = document.getElementsByTagName("p");

// Array.from(textParagraphs).forEach((paragraph) => {
//   paragraph.addEventListener("click", function () {
//     if (paragraph.classList.contains("main")) {
//       paragraph.style.color = "red";
//     } else {
//       paragraph.style.color = "blue";
//     }
//   });
// });

//

const textHeading = document.querySelector(".content");
console.log(textHeading);
const content = document.querySelector(".content h1");
console.log(content);
