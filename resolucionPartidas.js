"use strict"

const modalBienvenida = document.getElementById("modal-bienvenida");
const modal_h2 = document.querySelector("#modal_h2");
const modal_h3 = document.querySelector("#modal_h3");
const modal_p = document.querySelector("#modal_p");
const puntaje_h2 = document.querySelector("#puntaje");
let arbol = document.querySelector(".arbol");

export function partidaPerdida(palabraSecreta, puntaje){
    arbol.style.backgroundImage = "url(img/img6.png)"
          
    // Ventana modal ¡¡¡HAS PERDIDO!!!

    modalBienvenida.style.display = "block";
    modal_h2.textContent = "¡Perdiste el cuello amigo!";
    modal_h3.textContent = `La palabra secreta era ${palabraSecreta}`;
    modal_p.textContent = "¿Quieres volver a jugar?";
    puntaje = 0;
    puntaje_h2.textContent = `Puntaje: 0`;
    modal_img.src = "img/lose.png";
    audio_fondo.src = ""
    audio_loser.play()
}

export function partidaGanada(puntaje ){
     // Ventana modal ¡¡¡HAS GANADO!!!
     modalBienvenida.style.display = "block";
     modal_h2.textContent = "¡Bien 🎉, salvaste el cuello! ";
     modal_p.textContent = "¿Quieres volver a jugar?";
     modal_img.src = "img/win.png";
     puntaje_h2.textContent = `Puntaje: ${puntaje}`;
     audio_fondo.src = "" 
     audio_victory.play()
}
