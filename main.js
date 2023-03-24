"use stric";


//Array de palabras a descubrir
const palabras = [
    "patata",
    "pimiento",
    "berenjena",
    "coliflor",
    "brocoli",
    "acelgas",
    "calabaza"
]

//Generar palabra aleatoria

const palabraRandom = Math.floor(Math.random() * palabras.length);
const palabraSecreta = palabras[palabraRandom]
console.log(palabraSecreta)

//Palabra Oculta
const palabraOculta = palabraSecreta.replace(/./g, "_");

//Mostrar palabra en pantalla
const h2 = document.getElementById("palabraSecreta");
h2.textContent = palabraOculta;



const letraSeleccionada = document.getElementById("letra");
const comprobar = document.getElementById("comprobar")
const reset = document.getElementById("reset")

addEventListener