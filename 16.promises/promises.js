//promise es un contenedor de un valor asíncrono
//se tiene que esperar que el promise termine -> fulfilled /rejected

//intentamos coger el request
//const request = fetch("https://restcountries.com/v2/name/portugal");
//imprime el promise pero NO el resultado
//console.log(request);

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); //asíncrono
    })
    .then(function (data) {
      console.log(data);
    });
};
 */

//con promises:

const getCountryData = (country) => {
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

const getCountryData2 = async (country) => {
  const response = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await response.json();
  console.log(data[0]);
  console.log(data[0].languages[0]);
};

//getCountryData("portugal");
getCountryData2("portugal");
