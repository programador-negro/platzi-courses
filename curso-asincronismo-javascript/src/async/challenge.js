let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// funcion principal
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // instanciamos la conexion
    const xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open('GET', url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = (() => {
      // comparamos el 4 porque eso indica que se completo la peticion
      if(xhttp.readyState === 4){
        // verificamos que el status este en 200, 200 es que es correcto
        xhttp.status === 200
          // si esta en 200
          ? resolve(JSON.parse(xhttp.responseText))
          // si no esta en 200
          : reject(new Error('Error ' + url_api))
      }
    });
    // por ultimo enviamos la peticion
    xhttp.send();
  });
}
// exportamos la funcion
//module.exports = fetchData;

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);

    const character = await fetchData(`${url_api}${data.results[0].id}`);
    
    const origin = await fetchData(`${character.origin.url}`);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

    console.log(character.status);
    console.log(character.species);
    console.log(character.status);
    
    const location = await fetchData(`${character.location.url}`)
    console.log(location.name);

    FgWhite = "\x1b[37m"
    var FgYellow = "\x1b[33m"
    location.residents.forEach(async (element) => {
        var ser = await fetchData(element);
        console.log(FgYellow,"Creature: "+ser.name);
        console.log(FgWhite,"   Planet: "+ser.origin.name);
    });
    console.log("personajes viviendo en el planeta "+location.name);

  } catch (err) {
    console.error(err);
  }
};

anotherFunction(API);
console.log("ASINCRONISMO");

/*
primero se imprimira el contenido de 'console.log("hola mundo");'

luego el contenido de 'anotherFuntion(API);'

*/