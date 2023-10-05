

const campo = document.querySelectorAll(".campo");
const puntos = document.querySelector(".puntos");
const kuaiKuai = document.querySelectorAll(".kuaiKuai");
let unltimoCampo;

function cualquierTiempo(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function cualquierCampo(campo) {
  const idx = Math.floor(Math.random() * campo.length);
  const campo = campo[idx];
  if (campo === unltimoCampo) {
    console.log("Nunca saldrá el mismo - Never the same field");
    return cualquierCampo(campo);
  }
  unltimoCampo = campo;
  return campo;
}


