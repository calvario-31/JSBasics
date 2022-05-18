"use strict";

function ejercicio1() {
    //sin break
    const letra = "b";

    switch (letra) {
        case "a":
            console.log("Elegiste la letra a");
        case "b":
            console.log("Elegiste la letra b");
        case "c":
            console.log("Elegiste la letra c");
        default:
            console.log("No me simpatizas");
    }
}

const ejercicio2 = () => {
    //con break
    const letra = "a";

    switch (letra) {
        case "a":
            console.log("Elegiste la letra a");
            break;
        case "b":
            console.log("Elegiste la letra b");
            break;
        case "c":
            console.log("Elegiste la letra c");
            break;
        default:
            console.log("No me simpatizas");
    }
};

ejercicio1();
//ejercicio2();
