document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".content li").forEach((li) => {
    li.addEventListener("click", (event) => {
      event.preventDefault();
      if (li.classList.contains("title")) {
        li.style.backgroundColor = "red";
        const liElemnt = li.nextElementSibling;
        liElemnt.classList.toggle("main");
      }
      console.log(event.target.textContent);
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const content = document.querySelector(".content");
//   content.querySelectorAll(" li").forEach((li) => {
//     li.addEventListener("click", (event) => {
//       event.preventDefault();
//       console.log(event.target.textContent);
//     });
//   });
// });
