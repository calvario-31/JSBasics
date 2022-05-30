"use strict";

const a = 10;
const b = 25;
const esHombre = true;
const esAlto = false;
const esMujer = !esHombre; //negación
const esBajo = !esAlto; //negación

const igualdadDesigualdad = () => {
    //para igualdad y desigualdad usar === y !== que son comparaciones estrictas
    //el == y != no son strictas y pueden introducir bugs en el código
    const aEsIgualb = a === b;
    const aEsDiferenteb = a !== b;

    console.log(`Son iguales? ${aEsIgualb}`);
    console.log(`Son diferentes? ${aEsDiferenteb}`);

    //es lo mismo que poner:
    console.log(`Son iguales? ${a === b}`);
    console.log(`Son diferentes? ${a !== b}`);
};

const desigualdad = () => {
    const aEsMayor = a > b;
    const aEsMayorIgual = a >= b;
    const aEsMenor = a < b;
    const aEsMenorIgual = a <= b;

    console.log(aEsMayor, aEsMayorIgual, aEsMenor, aEsMenorIgual);
};

const negacion = () => {
    console.log(`Negación de esHombre: ${esMujer}`);
    console.log(`Negación de esAlto: ${esBajo}`);
};

const andLogico = () => {
    const esHombreYAlto = esHombre && esAlto;
    const esMujerYAlto = esMujer && esAlto;
    const esMujerYBaja = esMujer && !esAlto;

    console.log(esHombreYAlto, esMujerYAlto, esMujerYBaja);
};

const orLogico = () => {
    const esHombreOAlto = esHombre || esAlto;
    const esMujerOAlto = !esHombre || esAlto;
    const esMujerOBaja = esMujer || esBajo;

    console.log(esHombreOAlto, esMujerOAlto, esMujerOBaja);
};

igualdadDesigualdad();
