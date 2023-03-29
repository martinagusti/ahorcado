"use strict";

import { arrayPalabras, easy, normal, hard} from "./word.js";



let palabraSecreta 
let palabraOculta 


//Mostrar palabra en pantalla
const h2 = document.getElementById("palabraSecreta");


//DOM
let letraSeleccionada = document.getElementById("letra");
const comprobar = document.getElementById("comprobar");
const modalBienvenida = document.getElementById("modal-bienvenida");
const btn_easy = document.querySelector(".easy")
const btn_normal = document.querySelector("#normal")
const btn_hard = document.querySelector("#hard")
let img_arbol = document.querySelector("#img_arbol")
const modal_h2 = document.querySelector("#modal_h2")
const modal_h3 = document.querySelector("#modal_h3")
const modal_img = document.querySelector("#modal_img")
const modal_p = document.querySelector("#modal_p")

//Mostrar modal de bienvenida al cargar la página
window.onload = () => {
  modalBienvenida.style.display = "block";
  
};



//Errores
let error = 6;
let letrasError = [];

//Mostrar letras erroneas
let arrayError = document.getElementById("arrayError");

//juego
comprobar.addEventListener("click", () => {
  const palabraSecretaArray = palabraSecreta.split("");
  let letra = letraSeleccionada.value;
  console.log(letra.toLowerCase())
  if(letra.toLowerCase() === ""){
    alert("Debes seleccionar una letra!")
  }else{
    if (palabraSecretaArray.includes(letra.toLowerCase())) {
      const palabraOcultaArray = palabraOculta.split("");
  
      for (let i = 0; i <= palabraSecretaArray.length - 1; i++) {
        if (palabraSecretaArray[i] === letra.toLowerCase()) {
          palabraOcultaArray[i] = letra.toLowerCase();
  
          palabraOculta = palabraOcultaArray.join("");
  
          h2.textContent = palabraOculta.toUpperCase();
        }
      }
      if (palabraOculta === palabraSecreta) {
        console.log("has ganado!");
  
        // Ventana modal ¡¡¡HAS GANADO!!!
        modalBienvenida.style.display = "block";
        modal_h2.textContent = "¡¡Enhorabuena, salvaste el cuello!! 🎉"
        modal_p.textContent = "Quieres volver a jugar?"
        modal_img.src = "img/win.png"
      }
    } else {
      if (letrasError.includes(letra.toUpperCase())) {
        console.log("letra repetida");
        console.log(letrasError);
      } else {
        error--;
        letrasError.push(letra.toUpperCase());
        arrayError.textContent = letrasError.join("-");
        //Aquí un bucle con includes para no añadir la misma letraError 2 veces
        console.log(error);
  
        if (error === 0) {
          img_arbol.src = "img/img6.png";;
          console.log("has perdido!");
          
  
          // Ventana modal ¡¡¡HAS PERDIDO!!!
  
          modalBienvenida.style.display = "block";
          modal_h2.textContent = "¡¡Perdiste el cuello amigo!!"
          modal_h3.textContent = `La palabra secreta era ${palabraSecreta}`
          modal_p.textContent = "Quieres volver a jugar?"
          modal_img.src = "img/lose.png"
  
      
  
        } else if (error === 1) {
          img_arbol.src = "img/img5.png";;
        } else if (error === 2) {
          img_arbol.src = "img/img4.png";;
        } else if (error === 3) {
          img_arbol.src = "img/img3.png";;
        } else if (error === 4) {
          img_arbol.src = "img/img2.png";;
        } else if (error === 5) {
          img_arbol.src = "img/img1.png";
        }
      }
    }


  }

  
  letraSeleccionada.value = "";
  letraSeleccionada.focus();
});



btn_easy.addEventListener("click", () =>  {
  
  let arrayEasy = arrayPalabras(easy)
  palabraSecreta = arrayEasy[0]
  palabraOculta = arrayEasy[1]
  h2.textContent = palabraOculta.toUpperCase();
  console.log(palabraSecreta)
  console.log(palabraOculta)
  modalBienvenida.style.display = "none";
  error = 6
  letrasError = []
  img_arbol.src = "img/arbol.png"
  arrayError.textContent = ""
  letraSeleccionada.focus()

})

btn_normal.addEventListener("click", () =>  {
  let arrayNormal = arrayPalabras(normal)
  palabraSecreta = arrayNormal[0]
  palabraOculta = arrayNormal[1]
  h2.textContent = palabraOculta.toUpperCase();
  console.log(palabraSecreta)
  modalBienvenida.style.display = "none";
  error = 6
  letrasError = []
  img_arbol.src = "img/arbol.png"
  arrayError.textContent = ""
  letraSeleccionada.focus()

})

btn_hard.addEventListener("click", () =>  {
  
  let arrayHard = arrayPalabras(hard)
  palabraSecreta = arrayHard[0]
  palabraOculta = arrayHard[1]
  h2.textContent = palabraOculta.toUpperCase();
  console.log(palabraSecreta)
  modalBienvenida.style.display = "none";
  error = 3
  letrasError = []
  img_arbol.src = "img/img3.png"
  arrayError.textContent = ""
  letraSeleccionada.focus()
  console.log("hola")

})