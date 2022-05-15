import {
  sumar2Numeros, //método
  restar2Numeros, //método
  PI, //constante
  constanteX, //renombrado desde el módulo
  PU as constanteY, //renombrado desde aquí
} from "./matematicas.js";
import * as Impresora from "./impresora.js"; //importo todo como un objeto impresora
//const { metodoX } = require("./antiguoJs.js"); //antigua forma de llamar, va a botar error en el browser

const a = 22;
const b = 10;

const suma = sumar2Numeros(a, b);
const resta = restar2Numeros(a, b);

Impresora.imprimirLinea();
Impresora.imprimirTexto("hola soy script");
Impresora.imprimirLinea();
Impresora.imprimirTexto(`la suma es: ${suma}`);
Impresora.imprimirTexto(`la resta es: ${resta}`);
Impresora.imprimirLinea();
Impresora.imprimirTexto(`el valor de PI es: ${PI}`);
Impresora.imprimirTexto(`el valor de PO es: ${constanteX}`);
Impresora.imprimirTexto(`el valor de PU es: ${constanteY}`);
Impresora.imprimirLinea();

//metodoX();
