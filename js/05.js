/* 
    NUMEROS
*/

// en Javascript todos son numeros, no existe la diferencia entre enteros, con coma, o negativosconst nombre = "Ezequiel";
const numero1 = 100;
const numero2 = 200;
const numero3 = 300.20;
const numero4 = .20;
const numero5 = -5;

/*  si vemos la consola muestra a los numeros en azul
    con esto podemos identificar que podemos usar metodos con numeros 
*/

console.log(numero1);
console.log(numero2);
console.log(nombre);

/*  
    Operadores: +, -, /, * y %(modulo)

    Modulo es importante porque forma parte en las
    entrevistas de trabajo por lo general
*/ 
const numero6 = 7;
const numero7 = 6;
console.log(numero6 % numero7);
// devuelve el resto de una division

/* 
    Objet Math
    Si en la conlasa de Chrome escribimos: window y damos enter
    podemos buscar todas las funciones de Javascript podemos buscar
    el ojeto math, dandole al mismo podemos ver todos sus metodos
    ejemplo:
        > window.Math.random();
        >0.5401357268275095

*/

let resultado;

resultado = Math.PI;
resultado = Math.round(2.2); //
resultado = Math.ceil(2.1); // siempre redondea hacia arriba
resultado = Math.floor(2.1); // siempre redondea hacia abajo
resultado = Math.sqrt(144); // raiz cuadrada
resultado = Math.abs(-200); // pasa los numeros a positivo
resultado = Math.min( 3, 5, 1, 8, 2, 10 ); // muestra el minimo
resultado = Math.max( 3, 5, 1, 8, 2, 10 ); // muestra el maximo
resultado = Math.random(); // 
resultado = Math.floor( Math.random() * 30 ); // 


console.log(resultado);