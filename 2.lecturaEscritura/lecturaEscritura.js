"use strict";

const libro = prompt("Ingresa libro"); //retorna string
const edadLeida = prompt("Ingresa tu edad"); //retorna string

//tenemos que transformar
const edad = Number(edadLeida);

console.log(libro, typeof libro);
console.log(edadLeida, typeof edadLeida);
console.log(edad, typeof edad);
