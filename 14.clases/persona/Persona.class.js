class Persona {
    //atributos privados
    #religion = "cristiano";

    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    //métodos privados
    #decirAlgoPrivado() {
        console.log("shhh");
    }

    //metodos públicos
    decirUnaFrase() {
        this.#decirAlgoPrivado();
        console.log("Digo una frase");
    }

    //método statics
    static responder() {
        console.log("soy un método estático no necesito instanciar");
    }

    //getter
    get religion() {
        return this.#religion;
    }
}

module.exports = { Persona };
