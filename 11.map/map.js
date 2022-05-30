"use strict";

const llenarMap = () => {
    map.set(1, "carlos");
    map.set(2, "patrick");
    map.set(3, "adonis");
    map.set(4, "juan");
    map.set(5, "meme");
};

const cogerNombrePorId = (id) => {
    return map.get(id);
};

const map = new Map();

llenarMap();
const nameSelected = cogerNombrePorId(1);
console.log(nameSelected);
