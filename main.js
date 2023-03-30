"use strict";

import { partidaGanada, partidaPerdida } from "./resolucionPartidas.js";
import { arrayPalabras, easy, normal, hard } from "./word.js";

let palabraSecreta;
let palabraOculta;
let puntaje = 0;

//Errores
let error = 6;
let letrasError = [];


//DOM
let letraSeleccionada = document.getElementById("letra");
const comprobar = document.getElementById("comprobar");
const modalBienvenida = document.getElementById("modal-bienvenida");
const btn_easy = document.querySelector(".easy");
const btn_normal = document.querySelector("#normal");
const btn_hard = document.querySelector("#hard");
let img_arbol = document.querySelector("#img_arbol");
const record_h2 = document.querySelector("#record");
const h2 = document.getElementById("palabraSecreta");
let arrayError = document.getElementById("arrayError");
let arbol = document.querySelector(".arbol");
const audio_fondo = document.querySelector("#audio_fondo")
const audio_win = document.querySelector("#audio_win")
const audio_lose = document.querySelector("#audio_lose")
const audio_victory = document.querySelector("#audio_victory")
const audio_loser = document.querySelector("#audio_loser")


//Comprobamos si existe "record" en el localStorage sino lo creamos!
if (localStorage.getItem("record")) {
  record_h2.textContent = `Record:${localStorage.getItem("record")}`;
} else {
  localStorage.setItem("record", puntaje);
}

//Mostrar modal de bienvenida al cargar la página
window.onload = () => {
  modalBienvenida.style.display = "block";
};


//juego
comprobar.addEventListener("click", () => {
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
          audio_win.play()

        }
      }
      if (palabraOculta === palabraSecreta) {
        puntaje++;
        partidaGanada(puntaje)
       
        if (puntaje > localStorage.getItem("record")) {
          localStorage.setItem("record", puntaje);
          record_h2.textContent = `Record: ${localStorage.getItem("record")}`;
        }
      }
    } else {
      if (letrasError.includes(letra.toUpperCase())) {
        
      } else {
        error--;
        audio_lose.play()
        letrasError.push(letra.toUpperCase());
        arrayError.textContent = letrasError.join("-");
        //Aquí un bucle con includes para no añadir la misma letraError 2 veces
      
        if (error === 0) {

         partidaPerdida(palabraSecreta, puntaje)

        } else if (error === 1) {
          arbol.style.backgroundImage = "url(img/img5.png)"
        } else if (error === 2) {
          arbol.style.backgroundImage = "url(img/img4.png)"
        } else if (error === 3) {
          arbol.style.backgroundImage = "url(img/img3.png)"
        } else if (error === 4) {
          arbol.style.backgroundImage = "url(img/img2.png)"
        } else if (error === 5) {
          arbol.style.backgroundImage = "url(img/img1.png)"
        }
      }
    }
  }

  letraSeleccionada.value = "";
  letraSeleccionada.focus();
});

btn_easy.addEventListener("click", () => {
  comenzarJuego(easy)
  
});

btn_normal.addEventListener("click", () => {
 comenzarJuego(normal)

});

btn_hard.addEventListener("click", () => {
  comenzarJuego(hard)
  
  
});

function comenzarJuego(dificultad){
  let array = arrayPalabras(dificultad);
  palabraSecreta = array[0];
  palabraOculta = array[1];
  h2.textContent = palabraOculta.toUpperCase();
  console.log(palabraSecreta);
  modalBienvenida.style.display = "none";
  if(dificultad !== hard){
    error = 6;
   /*  img_arbol.src = "img/arbol.png"; */
   arbol.style.backgroundImage = "url(img/arbol.png)"
  }else{
    error = 3;
    /* img_arbol.src = "img/img3.png"; */
    arbol.style.backgroundImage = "url(img/img3.png)"
  }
  letrasError = [];
  arrayError.textContent = "";
  letraSeleccionada.focus();
  audio_fondo.src = "audio/dramatic.mp3"
  audio_fondo.play()
}
