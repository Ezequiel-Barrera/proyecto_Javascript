/* 
    Diferencia entre Funcion y Metodo

    Todo tiene que ver con el contexto
    en el que son utilizadas
*/

const numero1 = 20;
const numero2 = "20";

/* si deseamos convertir string a numero
    podemos usar una función
*/

console.log( parseInt(numero2)); // parseInt() es una funcion

const numero3 = "Veinte";
console.log( parseInt(numero3)); // da error no puede pasarlo a numero

/* 
    si nombramos el objeto, y ponemos punto
    seguido va un metodo
*/
console.log( numero1.toString() );


/* 
    Entonces, las funciones se llaman por su nombre
    y reciben parametros por lo general

    Y los metodos, se llaman a el objeto, seguido de 
    un punto, y despues el nombre del metodo
*/