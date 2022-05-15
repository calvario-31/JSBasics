console.log("hola soy calculadora");

const marca = "Casio"; //privado
const peso = "100"; //privado

const PI = 3.1416;
const PO = 1.2525;
const PU = 1222.111;

export const sumar2Numeros = (a, b) => {
  return a + b;
};

export const restar2Numeros = (a, b) => {
  return a - b;
};

export { PI, PO as constanteX, PU };
