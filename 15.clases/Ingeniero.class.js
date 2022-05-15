import { Persona } from "./Persona.class.js";

class Ingeniero extends Persona {
  #cervezaFavorita = "pilsen";

  constructor(id, nombre, edad, codigoIngeniero, espIngenieria) {
    super(id, nombre, edad);
    this.codigoIngeniero = codigoIngeniero;
    this.espIngeniera = espIngenieria;
  }

  //getter

  get cervezaFavorita() {
    return this.#cervezaFavorita;
  }

  //métodos privados
  #calcularSuma(a, b) {
    return a + b;
  }

  #calcularResta(a, b) {
    return a - b;
  }

  //métodos públicos
  calcularTodo(a, b) {
    const suma = this.#calcularSuma(a, b);
    const resta = this.#calcularResta(a, b);
    console.log(`la suma es: ${suma} y la resta es: ${resta}`);
  }
}

export { Ingeniero };
