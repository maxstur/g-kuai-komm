// Seleccionamos elementos y definimos variables
const campos = document.querySelectorAll(".campo");
const cuentaPuntos = document.querySelector(".puntos");
const kuaiS = document.querySelectorAll(".kuaiKuai");
let ultimoCampo;
let timeUp = false;
let puntos = 0;
const startGameElement = document.querySelector("#startGame");

// Función para generar un número aleatorio entre min y max
function cualquierTiempo(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
// Función para seleccionar un campo aleatorio de un conjunto de campos
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
// Función para hacer que un elemento aparezca y desaparezca
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
// Función para comenzar el juego
function startGame() {
  puntos = 0;
  cuentaPuntos.textContent = puntos;
  timeUp = false;
  aparecer();
  setTimeout(() => (timeUp = true), 20000);
}
// Evento clic para iniciar el juego
startGameElement.addEventListener("click", startGame);

// Función para descubrir los clics verdaderos y trasnformalos en puntaje(que sume puntaje), además de ocultar el kuaiKuai.
function clickKuaiKuai(e) {
  if (!e.isTrusted) return;
  puntos++;
  this.classList.remove("up");
  cuentaPuntos.textContent = puntos;
}
//Sumamos el puntaje al click
kuaiS.forEach((kuaiKuai) => kuaiKuai.addEventListener("click", clickKuaiKuai));
