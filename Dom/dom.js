const btn = document.getElementById("btn");
let data = document.getElementById("date"); // Verwende Anführungszeichen um die ID "date"
const dateDocument = () => {
  if (data) {
    // Überprüfe, ob das Element gefunden wurde, bevor du den Text änderst
    data.innerText = "Hallo Imad Alisawi";
  } else {
    date.innerHTML = `<div class="test>
    <p onclick="alert('Hallo welt in Berlin')">${"hi"}</p>
        <p>Wohin kann ich weiter begleiten</p></div>`;
  }
};
btn.addEventListener("mouseenter", dateDocument);
btn.addEventListener("mouseleave", () => {
  const p = document.createElement("p");
  p.innerText = "hallo welt";
  document.body.appendChild(p);
});
