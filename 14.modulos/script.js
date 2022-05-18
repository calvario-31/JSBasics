const {
    sumar2Numeros, //método
    restar2Numeros, //método
    PI, //constante
    constanteX,
} = require("./matematicas");
const impresora = require("./impresora"); //importo todo como un objeto impresora

const a = 22;
const b = 10;

const suma = sumar2Numeros(a, b);
const resta = restar2Numeros(a, b);

impresora.imprimirLinea();
impresora.imprimirTexto("hola soy script");
impresora.imprimirLinea();
impresora.imprimirTexto(`la suma es: ${suma}`);
impresora.imprimirTexto(`la resta es: ${resta}`);
impresora.imprimirLinea();
impresora.imprimirTexto(`el valor de PI es: ${PI}`);
impresora.imprimirLinea();
