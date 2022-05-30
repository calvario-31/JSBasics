"use strict";

const imprimirLinea = function () {
  console.log("=========================");
};

//ARREGLOS (LISTAS EN JAVA)
const listaLibros = new Array();

listaLibros.push("Harry Potter"); //push mete al final
listaLibros.push("Narnia");
listaLibros.push("100 anos de soledad");
listaLibros.push("Condorito");
listaLibros.unshift("Soy el numero 1"); //unshift mete al inicio

console.log(listaLibros);

const tamLista = listaLibros.length; //tamaño de la lista

console.log("Itero por la lista:");

//for of
console.log("Usando for of");
for (const libro of listaLibros) {
  console.log(`El libro es: ${libro}`);
}

imprimirLinea();

console.log("Usando for each");
//for each
listaLibros.forEach((libro) => {
  console.log(`El libro es: ${libro}`);
});

imprimirLinea();

console.log(`el tamaño de la lista es: ${tamLista}`);
console.log(`el elemento inicial es: ${listaLibros[0]}`);
console.log(`el elemento final es es: ${listaLibros[tamLista - 1]}`);

imprimirLinea();

listaLibros.pop(); //pop quita del final

console.log("Después de hacer pop:");
console.log(listaLibros);

listaLibros.shift(); //pop quita del inicio

console.log("Después de hacer shift:");
console.log(listaLibros);
