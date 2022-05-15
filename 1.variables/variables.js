"use strict";

let x = 5; //let es para que pueda cambiar de dato
x = 10; //si se sabe a priori que va a cambiar usar let, caso contrario const

//no usar var ya que es mutable e introduce cambios extraños en el código
//además de ser una notación antigua

const birthYear = 1992; //const nunca cambia
const palabra = "hola mundo";
const esHombre = true;

console.log(birthYear, typeof birthYear); //muestro el valor y tipo
console.log(palabra, typeof palabra);
console.log(esHombre, typeof esHombre);

const a = "10";
const b = 5;

const aNumber = Number(a);
const bString = String(b);

console.log(typeof a);
console.log(typeof aNumber);
console.log(typeof b);
console.log(typeof bString);

console.log(aNumber + b); //15
console.log(a + bString); //"105"

//string template, se puede declarar como string o llamar de frente en el log
const mensaje = `el valor de a es: ${a} y el de b es: ${b}`;
console.log(mensaje);
console.log(`el tipo de a es: ${typeof aNumber} y el b es: ${typeof bNumber}`);
