"use strict";

let x = 0;

//BUCLE WHILE
while (x >= 0 && x <= 10) {
  x = Number(prompt("Elige entre 0 and 10. Presiona otro numero para salir"));
  console.log(`Elegiste: ${x}`);
}
