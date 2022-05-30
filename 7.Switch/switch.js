"use strict";

const ejemploSwitch = (letra) => {
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
};

const ejemploSwitchBreak = (letra) => {
    //con break
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

ejemploSwitch("b");
//ejemploSwitchBreak("a");
