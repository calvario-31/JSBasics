import { Ingeniero } from "./Ingeniero.class";

const ingeniero = new Ingeniero(60, "Carlos", 25, "2555FF", "INF");

ingeniero.calcularTodo(3, 4);
console.log(`mi codigo de ingeniero es: ${ingeniero.codigoIngeniero}`);
console.log(`digo una frase: ${ingeniero.decirUnaFrase()}`);
