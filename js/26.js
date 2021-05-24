/* 
    forEach y Map

    son metodos explusivos de arreglos
*/

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'MTelevisor 50 Pulgadas', precio: 700 },
    { nombre: 'Audiculares', precio: 300 },
    { nombre: 'Parlantes', precio: 400 },
    { nombre: 'Teclado', precio: 900 },
    { nombre: 'Notebook', precio: 1000 }
];


/* 
    forEach
    solo se puede ejecutar en arreglos
*/

// carrito.forEach(function() {
//     console.log('Una vez por cada elemento');
// });
carrito.forEach( producto => console.log('producto.nombre') );


// map
const arreglo2 = carrito.map( producto => console.log('producto.nombre') );


/*  
    las diferencias entre forEach y map

    forEach sirve o esta pensado para iterar y mostrar
    map esta pensado para crear un nuevo arreglo
*/