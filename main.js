"use strict";

const palabras = [
  "patata",
  "pimiento",
  "berenjena",
  "coliflor",
  "brocoli",
  "acelgas",
  "calabaza",
];

// Generar palabra aleatoria
const palabraRandom = Math.floor(Math.random() * palabras.length);
let palabraSecreta = palabras[palabraRandom];
console.log(palabraSecreta);

// Palabra oculta
let palabraOculta = palabraSecreta.replace(/./g, "_");

// Mostrar palabra en pantalla
const h2 = document.getElementById("palabraSecreta");
h2.textContent = palabraOculta;

// Contador de fallos
let fallos = 0;

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

    // Comprobar si se ha adivinado la palabra
    if (palabraVisible === palabraSecreta) {
      alert(`Has ganado! La palabra era ${palabraSecreta}`);
      comprobar.disabled = true;
    }
  } else {
    // Aumentar el contador de fallos
    fallos++;

    // Comprobar si se han agotado los intentos
    if (fallos === 6) {
      alert(`Has perdido! La palabra era ${palabraSecreta}`);
      comprobar.disabled = true;
    }
  }

  // Limpiar el campo de la letra
  letraSeleccionada.value = "";
});

reset.addEventListener("click", () => {
  // Generar una nueva palabra aleatoria
  const nuevaPalabraRandom = Math.floor(Math.random() * palabras.length);
  palabraSecreta = palabras[nuevaPalabraRandom];
  console.log(palabraSecreta);

  // Ocultar la nueva palabra
  palabraOculta = palabraSecreta.replace(/./g, "_");
  h2.textContent = palabraOculta;

  // Reiniciar el contador de fallos
  fallos = 0;
  h3.textContent = `Fallos: ${fallos}`;

  // Habilitar el botón de comprobar
  comprobar.disabled = false;
});
