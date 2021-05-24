/* 
    Diferencias entre 
*/

/* 
    una caracteristica de las funciones es que tienes que declararlas
    y despues mandarlas a llamar.
    muchas veces se comente el error que creamos una funcion pero nunca
    la llamamos, o llamamos una funcion que nunca creamos.


*/

// Declaración de Función
sumar();
function sumar() {
    console.log(10 + 10);     
}; // si funciona y nos muestra el valor en la consola


// Expresión de la Función
sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}; // nos da error en la consola

/* 
    aqui la diferencia pasar porque la segunda funcion 
    nos arroja error en la consola de chrome.
    esto pasa por lo que se conoce el Javascript como el 
    
        Hoisting
    
    Hoisting es un término que no encontrará utilizado en 
    ninguna especificación previa a ECMAScript® 2015 Language 
    Specification. El concepto de Hoisting fue pensado como 
    una manera general de referirse a cómo funcionan los 
    contextos de ejecución en JavaScript (específicamente las 
    fases de creación y ejecución). Sin embargo, el concepto 
    puede ser un poco confuso al principio.

    Javascript se ejecuta en 2 vueltas. 
    En la primera se registra todas las funciones, 
    despues se registran las llamadas a funciones,
    
    La primera etapa se la conoce como la etapa de creación
    donde se registran las funciones y las variables,
    y la segunda se conoce como la etapa de Ejecución
*/