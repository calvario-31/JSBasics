const dataJson = require("./dataPrueba2.json");

const imprimirJson = (json) => {
    //imprimir json tal cual
    console.log(json);
};

const imprimirInformacionProducto = (producto) => {
    console.log(`El nombre del producto es: ${producto.nombre}`);
    console.log(`El precio del producto es: ${producto.precio}`);
    console.log(`La tienda del producto es: ${producto.tienda}`);
    console.log(`El stock del producto es: ${producto.stock}`);
    console.log(`En oferta?: ${producto.enOferta}`);
};

const imprimirSeparador = () => {
    console.log("===========================================\n");
};

//imprimo el json
imprimirJson(dataJson);

//cojo el primer producto, recordemos que comienza en 0
const producto1 = dataJson.productos[0];

//muestro el json tal cual
imprimirJson(producto1);

//cojo el tercer producto, recordemos que comienza en 0
const producto3 = dataJson.productos[2];

//imprimo información del producto
imprimirInformacionProducto(producto3);

//imprimo todos los productos usando el foreach
dataJson.productos.forEach((producto) => {
    imprimirInformacionProducto(producto);
    imprimirSeparador();
});

//imprimo todos los productos y voy calculando la suma usando el foreach

let suma = 0.0;

dataJson.productos.forEach((producto) => {
    suma += producto.precio;
    imprimirInformacionProducto(producto);
    imprimirSeparador();
});

console.log(`El precio total es: ${suma}`);
