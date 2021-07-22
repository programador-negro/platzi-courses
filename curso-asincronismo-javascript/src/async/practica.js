const fetchData = require('./functions.js');


const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(`${character.origin.url}`);

    //console.log(data.info.count);
    console.log('}- '+character.name);
    console.log('}- '+origin.dimension);
    console.log('}- '+character.status);
    console.log('}- '+character.species);
    
    
    const location = await fetchData(`${character.location.url}`);
    console.log(location.name);

    var FgWhite = "\x1b[37m";
    var FgYellow = "\x1b[33m";
    var BgWhite = "\x1b[47m";
    var FgMagenta = "\x1b[45m";
    var Dim = "\x1b[2m";
    var BgBlack = "\x1b[40m";

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
python
Pandas
Django
c#
ASP.NET Core
javascript
CSS
HTML
Web Services
SQL y TSQL
linux Bash



Git


*/