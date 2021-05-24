/* 
    Estructura de Control
*/

const puntaje = 1000;

if(puntaje == 1000)  {
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}

/* 
    = asignación
    == igualación

    En JS existe el === que es más estricto en su
    comparación.
    Compara si son iguales y hasta si son del mismo
    tipo de dato.


    !== diferente a
*/


// mayor que y menor que
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos Insuficientes');
}



// else if
const rol= 'ADMINISTRADOR';

if (rol === 'ADMINISTRADOR') {
    console.log('acceso a todo el sistema');
} else if (rol === 'EDITO') {
    console.log('Esres aditor, puedes entrar pero no tienes acceso a todo');
} else {
    console.log('no tiene acceso');    
}

