/* 
Son funciones que se pasan como parametro a otra funcion y que se llaman cuando un evento ocurra
EJ. setTimeout(functionReference, delay(ms), param1, param2, ... , paramN)
*/


/*************** */
/* CONSTANTES */
/*************** */
const tiempoEspera = 2000;
const tiempoEspera2 = 4000;
const limpiarTimemout2 = false;


/*************** */
/* FUNCIONES */
/*************** */
const imprimir = (texto, delay) => {
    console.log(texto, delay, 'ms');
}


/*************** */
/* TIMEOUT 1 */
/*************** */
console.log('BEFORE setTimout...');

setTimeout(imprimir, tiempoEspera,'Despues de transcurrido: ', tiempoEspera);

console.log('AFTER setTimout...');


/**************** */
/* TIMEOUT 2 */
/**************** */
console.log('BEFORE setTimout 2...');

const refTimeout = setTimeout(imprimir, tiempoEspera2,'Despues de transcurrido: ', tiempoEspera2);

if (refTimeout) {
    console.log('DENTRO de refTimeout setTimout 2...');
    console.log('Referencia del setTimeout 2 es: ', refTimeout);
    if (limpiarTimemout2) clearTimeout(refTimeout);
}


/*
Entra a ejecutar el codigo anterior porque al configurar el setTimeout devuelve un objeto y el if es true.
Sin embargo si se quiere que se ejecute despues de alguna otra accion, hay que utilizar una promesa.
Con el clearTimeout se destruye el objeto y por eso no se ejecuta el segundo de 4000ms si la variable limpiarTimeout es true.
*/


