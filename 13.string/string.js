const frase = "Hola mundo $, Como estas?";

const indiceDolar = frase.indexOf("$");
const longitudFrase = frase.length;
const recortarFrase = frase.slice(0, 4); //recorto a partir de 0 hasta 4
const recortoUltimaLetra = frase.slice(-1);

const fraseMayuscula = frase.toUpperCase(); //transformo a mayúscula
const fraseMinuscula = frase.toLowerCase(); //transformo a minúscula
const fraseSinEspacios = frase.trim(); //le quito los espacios

const reemplazoDolar = frase.replace("$", "PEN"); //reemplazo una letra por otra
