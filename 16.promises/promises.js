//promise es un contenedor de un valor asíncrono
//se tiene que esperar que el promise termine -> fulfilled /rejected

//intentamos coger el request sin promise
const getCountrySinPromise = (country) => {
    return fetch(`https://restcountries.com/v2/name/${country}`);
};

//con promises:
const getCountryDataConPromise = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            return response.json(); //json() es asíncrono entonces cojo el promise en el siguiente then
        })
        .then((data) => {
            //capturo el .json en este promise y muestro la información
            console.log(data[0]);
            console.log(data[0].languages[0]);
        });
};

//con async await:
const getCountryDataAsyncAwait = async (country) => {
    const response = await fetch(
        `https://restcountries.com/v2/name/${country}`
    );
    const data = await response.json();
    console.log(data[0]);
    console.log(data[0].languages[0]);
};

getCountrySinPromise("portugal");
getCountryDataConPromise("portugal");
getCountryDataAsyncAwait("portugal");
