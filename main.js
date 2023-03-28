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
let palabraOculta = palabraSecreta.replace(/./g, "_");

//Mostrar palabra en pantalla
const h2 = document.getElementById("palabraSecreta");
h2.textContent = palabraOculta.toUpperCase();

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
const restart2 = document.querySelector("#restart2");
const body = document.querySelector("body");

//Errores
let error = 6;
let letrasError = [];

//Mostrar letras erroneas
let arrayError = document.getElementById("arrayError");

//juego
comprobar.addEventListener("click", () => {
  const palabraSecretaArray = palabraSecreta.split("");

  

  if (palabraSecretaArray.includes((letraSeleccionada.value))) {
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
      containerWin.setAttribute("class", "container-win")
      
    }
  } else {
    if (letrasError.includes((letraSeleccionada.value).toUpperCase())) {
      console.log("letra repetida");
      console.log(letrasError)
    } else {
      error--;
      letrasError.push((letraSeleccionada.value).toUpperCase());
      arrayError.textContent = letrasError.join("-");
      //Aquí un bucle con includes para no añadir la misma letraError 2 veces
      console.log(error);
      

      if (error === 0) {
        body.style.backgroundImage = "url(img/fondo-movil-vacio.jpg)"
        console.log("has perdido!");
        containerLose.setAttribute("class", "container-lose")

        // Ventana modal ¡¡¡HAS PERDIDO!!!
        modalLose.removeAttribute("class", "modal-LoseInicio");
        modalLose.setAttribute("class", "modal-Lose");
        solucion.textContent = `La palabra secreta era ${palabraSecreta}`;
      } else if (error === 1) {
        body.style.backgroundImage = "url(img/movil-pierna.jpg)"
      } else if (error === 2) {
        body.style.backgroundImage = "url(img/fondo-movil-2brazos.jpg)"
      } else if (error === 3) {
        body.style.backgroundImage = "url(img/fondo-movil-1brazo.jpg)"
      } else if (error === 4) {
        body.style.backgroundImage = "url(img/fondo-movil-cuerpo.jpg)"
        
      } else if (error === 5) {
        body.style.backgroundImage = "url(img/fondo-movil-cabeza.jpg)"
        
      }
    }
  }
  letraSeleccionada.value = "";
  letraSeleccionada.focus()
});

function reiniciar(){
  //volver a generar la palabra secreta
  //fallos volver a 0
  // imagen en 0
  //textos en 0 
}


restart.addEventListener("click", () => {
  reiniciar()
});

restart2.addEventListener("click", () => {
  reiniciar()
});







