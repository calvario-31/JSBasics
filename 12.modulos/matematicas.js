console.log("hola soy calculadora");

const marca = "Casio"; //privado
const peso = "100"; //privado

const PI = 3.1416;

const sumar2Numeros = (a, b) => {
    return a + b;
};

const restar2Numeros = (a, b) => {
    return a - b;
};

module.exports = { PI, sumar2Numeros, restar2Numeros };
