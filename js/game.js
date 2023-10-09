const campos = document.querySelectorAll(".campo");
const cuentaPuntos = document.querySelector(".puntos");
const kuaiS = document.querySelectorAll(".kuaiKuai");
let ultimoCampo;
let timeUp = false;
let puntos = 0;
const startGameElement = document.querySelector("#startGame");

function cualquierTiempo(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function cualquierCampo(campos) {
  const idx = Math.floor(Math.random() * campos.length);
  const campo = campos[idx];
  if (campo === ultimoCampo) {
    console.log("Nunca saldrá el mismo - Never the same field");
    return cualquierCampo(campos);
  }
  ultimoCampo = campo;
  return campo;
}

function aparecer() {
  const tiempo = cualquierTiempo(200, 1000);
  const campo = cualquierCampo(campos);
  campo.classList.add("up");
  const kuaiKuai = campo.querySelector(".kuaiKuai");
  kuaiKuai.classList.add("visible");
  setTimeout(() => {
    campo.classList.remove("up");
    kuaiKuai.classList.remove("visible");
    if (!timeUp) aparecer();
  }, tiempo);
}

function startGame() {
  puntos = 0;
  cuentaPuntos.textContent = puntos;
  timeUp = false;
  aparecer();
  setTimeout(() => (timeUp = true), 10000);
}

startGameElement.addEventListener("click", startGame);

function clickKuaiKuai(e) {
  if (!e.isTrusted) return;
  puntos++;
  this.classList.remove("up");

  cuentaPuntos.textContent = puntos;
}

kuaiS.forEach((kuaiKuai) => kuaiKuai.addEventListener("click", clickKuaiKuai));
