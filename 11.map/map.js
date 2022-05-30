"use strict";

const map = new Map();

map.set(1, "carlos");
map.set(2, "patrick");
map.set(3, "adonis");
map.set(4, "juan");
map.set(5, "meme");

const keySelected = Number(prompt("Enter an id"));
const nameSelected = map.get(keySelected);

console.log(nameSelected);
