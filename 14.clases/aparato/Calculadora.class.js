const { Aparato } = require("./Aparato.class");

class Calculadora extends Aparato {
    calcular2Suma = (a, b) => {
        return a + b;
    };

    calcular3Suma = (a, b, c) => {
        return a + b + c;
    };

    calcular4Suma = (a, b, c, d) => {
        return a + b + c + d;
    };

    calcular2Multiplicacion = (a, b) => {
        return a * b;
    };

    calcular3Multiplicacion = (a, b, c) => {
        return a * b * c;
    };

    #decirFraseSecreta = () => {
        console.log("Digo mi frase secreta");
    };
}

module.exports = new Calculadora();
