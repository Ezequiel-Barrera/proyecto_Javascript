// Arrays o Arreglos

// sintaxis con [ ]
const numeros = [12,13,15,18,19];

console.log(numeros);
console.table(numeros);

// con el constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);
console.table(meses);

// un arreglo puede tener cualquier tipo de dato, hasta un objeto u otro arreglo
const arreglo = ["Hola", 10, tru, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,3,4]];

console.log('arreglo');

// acceder a los valores de un arreglo
// a partir de su posicion en el arreglo
console.log(numeros[4]);

// conocer la extension de un arreglo
console.log(meses.length);

/* 
    los arreglos tienen iteradores
    uno de ellos es:
        forEach
*/
numeros.forEach( function(numero) {
    console.log(numero);
});

/* 
    este forEach es especifico de Javascript 
    en otros lenguajes existe el for
    tambien en JS, pero es mas usado este
    forEach

*/