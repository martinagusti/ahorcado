"use strict"

export const easy = ["aaaa", "bbbb", "cddd"]
export const normal = ["abcd", "abcd", "abcd"]
export const hard = ["zzz", "xxx", "yyy"]


let palabraOculta;
let palabraSecreta
let array = []

 export let arrayPalabras = function start(arrayRandom){
   
  let i = Math.floor(Math.random() * arrayRandom.length);
  palabraSecreta = arrayRandom[i]
  palabraOculta = palabraSecreta.replace(/./g, "_");
 
   array[0] = palabraSecreta 
   array[1] = palabraOculta
 return (array)
}






