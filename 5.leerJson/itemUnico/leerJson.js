"use strict";

const dataJson = require("./dataPrueba.json");

const imprimirJson = (json) => {
    //imprimir json tal cual
    console.log(json);
};

const imprimirJsonFormateado = (json) => {
    const jsonFormateado = JSON.stringify(json, null, 2); //spaceado de 2
    console.log(jsonFormateado);
};

const imprimirInformacionDeUnProducto = (producto) => {
    console.log(`El nombre del producto es: ${producto.nombre}`);
    console.log(`El precio del producto es: ${producto.precio}`);
    console.log(`La tienda del producto es: ${producto.tienda}`);
    console.log(`El stock del producto es: ${producto.stock}`);
    console.log(`En oferta?: ${producto.enOferta}`);
};

//imprimo el json
//imprimirJson(dataJson);

//imprimo el json formateado
//imprimirJsonFormateado(dataJson);

//cojo el JSON del producto en una constante, recordemos que sigue siendo un JSON
const producto = dataJson.producto;

//imprimo un producto
//imprimirJson(producto);

//imprimo un producto formateado
//imprimirJsonFormateado(producto);

//imprimo toda la info de un producto
//imprimirInformacionDeUnProducto(producto);
