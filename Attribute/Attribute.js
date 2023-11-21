// document.addEventListener("DOMContentLoaded", () => {
//   const dataAttribute = document.getElementsByClassName("title")[0];
//   console.log(dataAttribute.attributes[0]);
//   console.log(dataAttribute.attributes[1]);
//   console.log(dataAttribute.classList);
//   console.log(dataAttribute.attributes.class);
//   const valueAttribut = dataAttribute.attributes["data-extra"].value;
//   console.dir(valueAttribut);
//   console.log(valueAttribut);
// });

// // const cardLinks = Array.from(document.querySelectorAll(".card-link"));
// // console.log(cardLinks);

// // ---------------  So hohle die die Attribute in Javascript   --------------------
const dataExtraHelp = document.querySelectorAll("[data-extra]");
console.log(dataExtraHelp);
for (const extra of dataExtraHelp) {
  extra.addEventListener("click", (event) => {
    if (extra.attributes["data-extra"]) {
      event.preventDefault();
      const dataExtra = extra.attributes["data-extra"]; //.value;
      alert(` ${dataExtra.value}`);
      //alert(`${extra.dataset.extra} clicked`);
      // alert(`${extra.getAttribute("data-extra")}`);
    } else {
      alert("no attribute found");
    }
  });
}

// Hier wird geprüft, wenn das nicht date-extra gefunden wird dann überspringen mit (Continue) methode.
/*const dataExtraHelps = document.querySelectorAll("[data-extra]");
console.log(dataExtraHelps);
for (const extra of dataExtraHelps) {
  if (!extra.attributes["data-extra"]) {
    continue;
  }
  extra.addEventListener("click", (event) => {
    event.preventDefault();
    const dataExtra = extra.attributes["data-extra"]; //.value;
    alert(` ${dataExtra.value}`);
    //alert(`${extra.dataset.extra} clicked`);
    // alert(`${extra.getAttribute("data-extra")}`);
  });
}
*/
