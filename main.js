"use strict";

// estas son instrucciones de importación que permiten al programa utilizar funciones y variables definidas en otros archivos JavaScript. En este caso, se importan las funciones "partidaGanada" y "partidaPerdida" del archivo "./resolucionPartidas.js" y las variables "arrayPalabras", "easy", "normal" y "hard" del archivo "./word.js"
import { partidaGanada, partidaPerdida } from "./resolucionPartidas.js";
import { arrayPalabras, easy, normal, hard } from "./word.js";

// Bloque de variables declaradas con "let". La variable "palabraSecreta" se utiliza para almacenar la palabra que el jugador debe adivinar, "palabraOculta" para mostrar la palabra adivinada parcialmente y "puntaje" para mantener la puntuación del jugador
let palabraSecreta;
let palabraOculta;
let puntaje = 0;

//Errores
// "error" mantiene la cantidad de errores permitidos al jugador, "letrasError" almacena las letras que el jugador ha seleccionado pero que no se encuentran en la palabra secreta, y "var_sonido" indica si el sonido está habilitado o no
let error = 6;
let letrasError = [];
let var_sonido = true;

//DOM
// estas son variables que almacenan referencias a elementos HTML en la página. Se utilizan para acceder y manipular estos elementos en el código JavaScript
let letraSeleccionada = document.getElementById("letra");
const click_comprobar = document.getElementById("comprobar");
const modalBienvenida = document.getElementById("modal-bienvenida");
const btn_easy = document.querySelector(".easy");
const btn_normal = document.querySelector("#normal");
const btn_hard = document.querySelector("#hard");
let img_arbol = document.querySelector("#img_arbol");
const record_h2 = document.querySelector("#record");
const h2 = document.getElementById("palabraSecreta");
let arrayError = document.getElementById("arrayError");
let arbol = document.querySelector(".arbol");
const audio_fondo = document.querySelector("#audio_fondo");
const audio_win = document.querySelector("#audio_win");
const audio_lose = document.querySelector("#audio_lose");
const audio_victory = document.querySelector("#audio_victory");
const audio_loser = document.querySelector("#audio_loser");
const sonido = document.querySelector(".sonido");

//Esta es una estructura de control que utiliza una instrucción condicional "if" para verificar si una clave de almacenamiento en localStorage llamada "record" ya existe. Si existe, se muestra su valor en el elemento HTML "record_h2". De lo contrario, se crea la clave con el valor inicial de 0
if (localStorage.getItem("record")) {
  record_h2.textContent = `Record:${localStorage.getItem("record")}`;
} else {
  localStorage.setItem("record", puntaje);
}

//Esto es un evento que se dispara cuando la página se carga completamente. Se utiliza para mostrar un mensaje de bienvenida al jugador a través del elemento HTML "modalBienvenida"
window.onload = () => {
  modalBienvenida.style.display = "block";
};

// Esta es una función que se llama cada vez que el jugador presiona el botón "comprobar". Realiza la verificación y procesamiento de la letra seleccionada por el jugador y actualiza la interfaz de usuario en consecuencia
function comprobar() {
  const palabraSecretaArray = palabraSecreta.split("");
  let letra = letraSeleccionada.value;

  if (letra.toLowerCase() === "") {
    alert("Debes seleccionar una letra!");
  } else {
    if (palabraSecretaArray.includes(letra.toLowerCase())) {
      const palabraOcultaArray = palabraOculta.split("");

      for (let i = 0; i <= palabraSecretaArray.length - 1; i++) {
        if (palabraSecretaArray[i] === letra.toLowerCase()) {
          palabraOcultaArray[i] = letra.toLowerCase();

          palabraOculta = palabraOcultaArray.join("");

          h2.textContent = palabraOculta.toUpperCase();
          audio_win.play();
        }
      }
      if (palabraOculta === palabraSecreta) {
        puntaje++;
        partidaGanada(puntaje);

        if (puntaje > localStorage.getItem("record")) {
          localStorage.setItem("record", puntaje);
          record_h2.textContent = `Record: ${localStorage.getItem("record")}`;
        }
      }
    } else {
      if (letrasError.includes(letra.toUpperCase())) {
      } else {
        error--;
        audio_lose.play();
        letrasError.push(letra.toUpperCase());
        arrayError.textContent = letrasError.join("-");
        //Aquí un bucle con includes para no añadir la misma letraError 2 veces

        if (error === 0) {
          partidaPerdida(palabraSecreta, puntaje);
        } else if (error === 1) {
          arbol.style.backgroundImage = "url(img/img5.png)";
        } else if (error === 2) {
          arbol.style.backgroundImage = "url(img/img4.png)";
        } else if (error === 3) {
          arbol.style.backgroundImage = "url(img/img3.png)";
        } else if (error === 4) {
          arbol.style.backgroundImage = "url(img/img2.png)";
        } else if (error === 5) {
          arbol.style.backgroundImage = "url(img/img1.png)";
        }
      }
    }
  }

  letraSeleccionada.value = "";
  letraSeleccionada.focus();
}

// Esta es una función que se llama cada vez que el jugador selecciona un nivel de dificultad ("easy", "normal" o "hard"). Configura el juego con la dificultad seleccionada y selecciona una palabra aleatoria del archivo "word.js" que se utilizará como palabra secreta. También establece el número de errores permitidos según la dificultad seleccionada y actualiza la interfaz de usuario en consecuencia
function comenzarJuego(dificultad) {
  let array = arrayPalabras(dificultad);
  palabraSecreta = array[0];
  palabraOculta = array[1];
  h2.textContent = palabraOculta.toUpperCase();
  console.log(palabraSecreta);
  modalBienvenida.style.display = "none";
  if (dificultad !== hard) {
    error = 6;
    /*  img_arbol.src = "img/arbol.png"; */
    arbol.style.backgroundImage = "url(img/arbol.png)";
  } else {
    error = 3;
    /* img_arbol.src = "img/img3.png"; */
    arbol.style.backgroundImage = "url(img/img3.png)";
  }
  letrasError = [];
  arrayError.textContent = "";
  letraSeleccionada.focus();
  audio_fondo.src = "audio/dramatic.mp3";
  if (var_sonido === true) {
    audio_fondo.play();
  }
}
// Juego
// Estas son funciones de escucha de eventos que se utilizan para detectar cuándo el jugador hace clic en los botones "comprobar", "easy", "normal" y "hard". Cada vez que se hace clic, se llama a la función correspondiente para comenzar el juego o para verificar la letra seleccionada
click_comprobar.addEventListener("click", () => {
  comprobar();
});

btn_easy.addEventListener("click", () => {
  comenzarJuego(easy);
});

btn_normal.addEventListener("click", () => {
  comenzarJuego(normal);
});

btn_hard.addEventListener("click", () => {
  comenzarJuego(hard);
});

// Esta es una función de escucha de eventos que se utiliza para detectar cuándo el jugador hace clic en el botón de sonido. Cada vez que se hace clic, se cambia el estado del sonido y se actualiza la interfaz de usuario en consecuencia
sonido.addEventListener("click", () => {
  if (var_sonido === true) {
    audio_fondo.src = "";
    var_sonido = false;
    audio_fondo.src = "audio/dramatic.mp3";
    sonido.style.backgroundImage = "url(img/mute.png)";
  } else {
    audio_fondo.play();
    var_sonido = true;
    sonido.style.backgroundImage = "url(img/Sound.png)";
  }
});

// Esta es una función que se llama cada vez que el jugador presiona la tecla Enter. Verifica si la tecla presionada es Enter y, si es así, llama a la función "comprobar()" para verificar la letra seleccionada

function enter() {
  let tecla = event.keyCode;
  if (tecla === 13) {
    comprobar();
  }
}

// Esta es una instrucción que establece la función "enter()" como un controlador de eventos para la tecla Enter. Cada vez que el jugador presiona la tecla Enter, se llama a la función "enter()" para verificar la letra seleccionada
window.onkeydown = enter;
