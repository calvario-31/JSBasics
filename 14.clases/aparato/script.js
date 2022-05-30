const Calculadora = require("./Calculadora.class");

const multiplicacion = Calculadora.calcular2Multiplicacion(5, 2);
const suma1 = Calculadora.calcular2Suma(3, 1);
const suma2 = Calculadora.calcular3Suma(1, 2, 3);
const suma3 = Calculadora.calcular4Suma(1, 2, 3, 5);

console.log(`suma1: ${suma1}`);
console.log(`suma2: ${suma2}`);
console.log(`suma3: ${suma3}`);
console.log(`multiplicacion: ${multiplicacion}`);

Calculadora.imprimirLinea();
Calculadora.decirFrase();

Calculadora.imprimirLinea();
Calculadora.decirFrase("Soy una frase");
