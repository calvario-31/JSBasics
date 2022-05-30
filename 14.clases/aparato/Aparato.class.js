class Aparato {
    #marca = "Cassio";

    static metodoEstatico() {
        console.log("Soy un método estático");
    }

    decirHolaMundo = () => {
        console.log("Hola mundo");
    };

    saludarATodos = () => {
        console.log("Hola a todos!");
    };

    decirFrase = (text = "Frase por defecto") => {
        console.log(text);
    };

    imprimirLinea = () => {
        console.log("====================================");
    };
}

module.exports = { Aparato };
