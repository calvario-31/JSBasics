"use strict";

const imprimirLinea = () => {
    console.log("=========================\n");
};

const anadirItemsArray = (array) => {
    listaLibros.push("Harry Potter"); //push mete al final
    listaLibros.push("Narnia");
    listaLibros.push("100 anos de soledad");
    listaLibros.push("Condorito");
    console.log("Después de hacer push:");
    imprimirArray(listaLibros);

    imprimirLinea();
    console.log("Después de hacer unshift:");
    listaLibros.unshift("Soy el numero 1"); //unshift mete al inicio
    imprimirArray(listaLibros);
};

const imprimirArray = (array) => {
    console.log(array);
};

const imprimirTamArray = (array) => {
    console.log(`el tamaño de la lista es: ${listaLibros.length}`);
};

const imprimirElementosUsandoIndex = (array) => {
    const tam = array.length;
    //recordemos que los index comienzan en 0
    console.log(`el elemento inicial es: ${array[0]}`);
    console.log(`el elemento num 3 es: ${array[2]}`);
    console.log(`el elemento final es es: ${array[tam - 1]}`);
};

const quitarElementosArray = (array) => {
    listaLibros.pop(); //pop quita del final
    console.log("Después de hacer pop:");
    imprimirArray(listaLibros);
    imprimirLinea();

    listaLibros.shift(); //pop quita del inicio
    console.log("Después de hacer shift:");
    imprimirArray(listaLibros);
};

const recorrerArrayUsandoForOf = (array) => {
    let concatenador = "";

    for (const elemento of array) {
        concatenador += elemento;
        console.log(`El elemento es: ${elemento}`);
    }

    console.log(`La concatenación es: ${concatenador}`);
};

const recorrerArrayUsandoForEach = (array) => {
    let concatenador = "";

    array.forEach((elemento) => {
        concatenador += elemento;
        console.log(`El elemento es: ${elemento}`);
    });

    console.log(`La concatenación es: ${concatenador}`);
};

const listaLibros = new Array();

anadirItemsArray(listaLibros);
//imprimirElementosUsandoIndex(listaLibros);
quitarElementosArray(listaLibros);
//recorrerArrayUsandoForOf(listaLibros);
//recorrerArrayUsandoForEach(listaLibros);
