"use strict";

const dataJson = require("./dataPrueba.json");

const ejemploIfSolo = (a, b) => {
    //if solo
    if (a == b) {
        console.log("Son iguales");
    }
};

const ejemploIfElse = (a, b) => {
    //if/else
    if (a == b) {
        console.log("Son iguales");
    } else {
        console.log("Son diferentes");
    }
};

const ejemploIfElseAnidado = (a) => {
    //if/else anidado... el else es opcional
    if (a % 2 == 0) {
        console.log("es par");
    } else if (a % 3 == 0) {
        console.log("multiplo de 3");
    } else if (a % 5 == 0) {
        console.log("multiplo de 5");
    } else {
        console.log("me doy");
    }
};

const ejemploIfElseJson = () => {
    const producto = dataJson.productos[1];

    //cojo enOferta que es un boolean
    if (producto.enOferta) {
        console.log("Estoy en oferta!!");
    } else {
        console.log("aún NO estoy en oferta!");
    }
};

//ejemploIfSolo(3, 3);
//ejemploIfElse(3, 3);
//ejemploIfElseAnidado(17);
ejemploIfElseJson();
