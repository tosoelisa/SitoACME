function scrollToTop() {
  window.scrollTo(0, 0);
}

let popUp = document.getElementById("popup");
let accetta = document.getElementById("accetta");
let rifiuta = document.getElementById("rifiuta");

function goUp() {
  popUp.style = "transform: translateY(-125px);";
  accetta.style = "transform: translateY(-175px);";
  rifiuta.style = "transform: translateY(-175px);";
}

function disappear() {
  popUp.style = "display: none;";
  accetta.style = "display: none;";
  rifiuta.style = "display: none;";
}
