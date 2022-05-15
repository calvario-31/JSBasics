"use strict";

const a = 3;
const b = 5;

//if solo
if (a == b) {
  console.log("Son iguales");
}

//if/else
if (a == b) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

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
