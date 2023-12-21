const content = document.getElementById("content");
const clcikBtn = document.getElementById("klick");
const resetBtn = document.getElementById("reset");
let num = 0;
clcikBtn.addEventListener("click", () => {
  num++;
  const numText = document.getElementById("num");
  numText.innerText = num;
  changeBackgroundColor();
});

resetBtn.addEventListener("click", () => {
  num = 0;
  document.getElementById("num").innerText = num;
  document.body.style.backgroundColor = "#ffffff";
});

const changeBackgroundColor = () => {
  const colors = ["#FF5733", "blue", "green", "yellow", "#ffa500"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
};
//   const randomBackgroundColor =
//     colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = randomBackgroundColor;
// };
// const numNumber = document.getElementById("num");
// clcikBtn.addEventListener("click", () => {
//   const buttonIncurment = parseInt(numNumber.innerText, 10); // setzen 0 auf number statt string
//   numNumber.innerText = buttonIncurment + 1;
// });

// resetBtn.addEventListener("click", () => {
//   numNumber.innerText = "0";
// });

// --------------------------- Oder --------------------------
// let num = 0;
// clcikBtn.addEventListener("click", () => {
//   num++;
//   const numText = document.getElementById("num");
//   numText.innerText = num;
// });

// resetBtn.addEventListener("click", () => {
//   num = 0;
//   const numText = document.getElementById("num");
//   numText.innerText = num;
// });
