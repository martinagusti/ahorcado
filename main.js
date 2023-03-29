"use strict";

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
let palabraOculta = palabraSecreta.replace(/./g, "_");

//Mostrar palabra en pantalla
const h2 = document.getElementById("palabraSecreta");
h2.textContent = palabraOculta.toUpperCase();

//Errores
let error = 6;
let letrasError = [];

//DOM
let letraSeleccionada = document.getElementById("letra");
const comprobar = document.getElementById("comprobar");
const imagen = document.getElementById("persona");
const containerWin = document.querySelector("#container-win");
const containerLose = document.querySelector("#container-lose");
const modalWinInicio = document.querySelector("modal-WinInicio");
const modalLoseInicio = document.querySelector(".modal-LoseInicio");
const solucion = document.querySelector("#solucion");
const restart = document.querySelector("#restart");
const body = document.querySelector("body");
const modalBienvenida = document.getElementById("modal-bienvenida");
const btnComenzar = document.getElementById("btn-comenzar");
const btnReset = document.getElementById("btn-reset");
const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalMensaje = document.getElementById("modal-mensaje");
const modalImagen = document.getElementById("modal-imagen");
const modalBoton = document.getElementById("modal-boton");

//Mostrar modal de bienvenida al cargar la página
window.onload = () => {
  modalTitulo.textContent = "Bienvenido";
  modalMensaje.textContent =
    "Elige una letra y trata de adivinar la palabra secreta.";
  modalImagen.src = "img/bienvenida.png";
  modalImagen.alt = "Imagen de bienvenida";
  modalBoton.textContent = "Comenzar";
  modal.style.display = "block";

  modalBoton.addEventListener("click", () => {
    modal.style.display = "none";
  });
  // modalBienvenida.style.display = "block";
};

//Ocultar modal y comenzar el juego al hacer clic en el botón "Comenzar"
// btnComenzar.addEventListener("click", () => {
//   modalBienvenida.style.display = "none";
// });

//Reiniciar el juego al hacer clic en el botón "Reiniciar juego"
btnReset.addEventListener("click", () => {
  location.reload();
});

//Mostrar letras erroneas
let arrayError = document.getElementById("arrayError");

//juego
comprobar.addEventListener("click", () => {
  // let letraSeleccionada = document.getElementById("letra").value.toLowerCase();
  const palabraSecretaArray = palabraSecreta.toLowerCase().split("");

  if (palabraSecretaArray.includes(letraSeleccionada.value)) {
    const palabraOcultaArray = palabraOculta.split("");

    for (let i = 0; i <= palabraSecretaArray.length - 1; i++) {
      if (palabraSecretaArray[i] === letraSeleccionada.value) {
        palabraOcultaArray[i] = letraSeleccionada.value;

        palabraOculta = palabraOcultaArray.join("");

        h2.textContent = palabraOculta.toUpperCase();
      }
    }
    if (palabraOculta === palabraSecreta) {
      console.log("has ganado!");

      // Ventana modal ¡¡¡HAS GANADO!!!
      // containerWin.setAttribute("class", "container-win");
      modalTitulo.textContent = "¡¡Enhorabuena, salvaste el cuello!! 🎉";
      modalMensaje.textContent = "";
      modalImagen.src = "img/win.png";
      modalImagen.alt = "Persona contenta y viva!";
      modalBoton.textContent = "Volver a jugar";
      modal.style.display = "block";
      modalBoton.addEventListener("click", () => {
        location.reload();
      });
    }
  } else {
    if (letrasError.includes(letraSeleccionada.value.toUpperCase())) {
      console.log("letra repetida");
      console.log(letrasError);
    } else {
      error--;
      letrasError.push(letraSeleccionada.value.toUpperCase());
      arrayError.textContent = letrasError.join("-");
      //Aquí un bucle con includes para no añadir la misma letraError 2 veces
      console.log(error);

      if (error === 0) {
        modalTitulo.textContent = "¡¡Perdiste el cuello amigo!!";
        modalMensaje.textContent =
          "La palabra secreta era: " + palabraSecreta.toUpperCase();
        modalImagen.src = "img/lose.png";
        modalImagen.alt = "Persona muerta!!!";
        modalBoton.textContent = "Volver a jugar";
        modal.style.display = "block";
        modalBoton.addEventListener("click", () => {
          location.reload();
        });

        body.style.backgroundImage = "url(img/fondo-movil-vacio.jpg)";
        console.log("has perdido!");
        containerLose.setAttribute("class", "container-lose");

        // Ventana modal ¡¡¡HAS PERDIDO!!!
        // modalLose.removeAttribute("class", "modal-LoseInicio");
        // modalLose.setAttribute("class", "modal-Lose");
        // solucion.textContent = `La palabra secreta era ${palabraSecreta}`;
      } else if (error === 1) {
        body.style.backgroundImage = "url(img/movil-pierna.jpg)";
      } else if (error === 2) {
        body.style.backgroundImage = "url(img/fondo-movil-2brazos.jpg)";
      } else if (error === 3) {
        body.style.backgroundImage = "url(img/fondo-movil-1brazo.jpg)";
      } else if (error === 4) {
        body.style.backgroundImage = "url(img/fondo-movil-cuerpo.jpg)";
      } else if (error === 5) {
        body.style.backgroundImage = "url(img/fondo-movil-cabeza.jpg)";
      }
    }
  }
  letraSeleccionada.value = "";
  letraSeleccionada.focus();
});

// restart.addEventListener("click", () => {});
