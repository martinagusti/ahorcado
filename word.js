"use strict"

export const easy = [
"zanahoria",
"patata",
"brocoli",
"boniato",
"acelgas",
"pimiento",
"coliflor",
"berenjena",
"alcachofa",
"cebolla",
]

export const normal = [
  "thailandia",
  "peru",
  "venezuela",
  "argentina",
  "españa",
  "francia",
  "alemania",
  "colombia",
  "marruecos",
  "portugal",

]

export const hard = [
  "javascript",
  "array",
  "backend",
  "frontend",
  "fullstack",
  "funcion",
  "constante",
  "objeto",
  "asincronia",
  "fetch"
]


export let palabraOculta;
export let palabraSecreta;
let array = []

 export let arrayPalabras = function start(arrayRandom){
   
  let i = Math.floor(Math.random() * arrayRandom.length);
  palabraSecreta = arrayRandom[i]
  palabraOculta = palabraSecreta.replace(/./g, "_");
 
   array[0] = palabraSecreta 
   array[1] = palabraOculta
 return (array)
}

console.log(array[0])
console.log(array[1])





