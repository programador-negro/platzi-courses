/*
Ejemplo de callbacks
*/
function sumar(n1, n2){
    return n1 + n2;
}

function resultado(n1, n2, suma_callback){
    return suma_callback(n1, n2);
}
console.log(resultado(10,30,sumar))
// ejecutar en la terminal: npm run callback
// la palabra 'callback' del comando esta definida en el archivo package.json