"use strict";

//tradicional
function imprimirLinea() {
    console.log("=========================");
}

function calcularSuma(a, b) {
    return a + b;
}

//expresión, debe ser declarada antes de ser llamada
//se le asigna un nombre
const imprimirLinea2 = function () {
    console.log("=========================");
};

//expresión, debe ser declarada antes de ser llamada
//se le asigna un nombre
const calcularSuma2 = function (a, b) {
    return a + b;
};

//arrow, es como expresión debe ser declarada antes de ser llamada
//se le asigna un nombre
const imprimirLinea3 = () => {
    console.log("=========================");
};

//arrow con una sola línea
const calcularSuma3 = (a, b) => a + b;

//arrow con varias líneas
const calcularSuma4 = (a, b, c) => {
    return a * b * c;
};

//parámetros por defecto
const decirFrase = (texto = "Hola mundo") => {
    console.log(texto);
};

imprimirLinea();
const suma = calcularSuma(4, 5);
imprimirLinea2();
const suma2 = calcularSuma2(4, 5);
imprimirLinea3();
const suma3 = calcularSuma3(4, 5);
imprimirLinea3();
const suma4 = calcularSuma3(4, 5);
imprimirLinea3();
decirFrase("soy un nuevo string");
decirFrase();
