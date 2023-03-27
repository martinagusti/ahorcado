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
h2.textContent = palabraOculta;

//DOM 
let letraSeleccionada = document.getElementById("letra");
const comprobar = document.getElementById("comprobar");
const reset = document.getElementById("reset");
const imagen = document.getElementById("persona");


//Errores
let error= 6;
let letrasError = [];

//Mostrar letras erroneas
let arrayError = document.getElementById("arrayError");




//juego
comprobar.addEventListener("click", () => {
  const palabraSecretaArray = palabraSecreta.split("");

  if (palabraSecretaArray.includes(letraSeleccionada.value)) {
    const palabraOcultaArray = palabraOculta.split("");

    for (let i = 0; i <= palabraSecretaArray.length - 1; i++) {
      if (palabraSecretaArray[i] === letraSeleccionada.value) {
        palabraOcultaArray[i] = letraSeleccionada.value;
        console.log(palabraOcultaArray);

        palabraOculta = palabraOcultaArray.join("");
        console.log(palabraOculta);

        h2.textContent = palabraOculta;
      } 
    } if (palabraOculta === palabraSecreta) {
      console.log("has ganado!");
      //Aquí agregar una ventana modal ¡¡¡HAS GANADO!!!
    } 
  }else{
    if (letrasError.includes(letraSeleccionada.value)){
       console.log("letra repetida")
    } else {
    error --;
    letrasError.push(letraSeleccionada.value)
    arrayError.textContent = letrasError.join("-");
    //Aquí un bucle con includes para no añadir la misma letraError 2 veces
    console.log(error)
    console.log(letrasError)

    if(error === 0){
      console.log("has perdido!");
      //Aquí agregar una ventana modal ¡¡¡HAS PERDIDO!!!
    } else if (error === 1){
      persona.src = "./img/imagen-1.png"
    } else if (error === 2){
      persona.src = "./img/imagen-2.png"
    } else if (error === 3){
      persona.src = "./img/imagen-3.png"
    }else if (error === 4){
      persona.src = "./img/imagen-4.png"
    }else if (error === 5){
      persona.src = "./img/imagen-5.png"
    }
  }}
  letraSeleccionada.value = "";
  
});
