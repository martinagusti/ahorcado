"use stric";

//Array de palabras a descubrir
const palabras = [
  "patata",
  "pimiento",
  "berenjena",
  "coliflor",
  "brocoli",
  "acelgas",
  "calabaza",
];

//Generar palabra aleatoria

const palabraRandom = Math.floor(Math.random() * palabras.length);
const palabraSecreta = palabras[palabraRandom];
console.log(palabraSecreta);

//Palabra Oculta
const palabraOculta = palabraSecreta.replace(/./g, "_");

//Mostrar palabra en pantalla
const h2 = document.getElementById("palabraSecreta");
h2.textContent = palabraOculta;

const letraSeleccionada = document.getElementById("letra");
const comprobar = document.getElementById("comprobar");
const reset = document.getElementById("reset");

comprobar.addEventListener("click", () => {
  const palabraSecretaArray = palabraSecreta.split("");

  if (palabraSecretaArray.includes(letraSeleccionada.value)) {
    const palabraOcultaArray = palabraOculta.split("");

    let palabraVisible;

    for (let i = 0; i <= palabraSecretaArray.length - 1; i++) {
      if (palabraSecretaArray[i] === letraSeleccionada.value) {
        palabraOcultaArray[i] = letraSeleccionada.value;
        console.log(palabraOcultaArray);

        palabraVisible = palabraOcultaArray.join("");
        console.log(palabraVisible);

        h2.textContent = palabraVisible;
      }
    }
  }
});
