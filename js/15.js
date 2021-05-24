/* 
    Array Methods
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
/* 
    el arreglo meses es un arreglo unidimencional
    en JS no existen los arreglo asociativos, pero si
    los arreglos de objetos
*/

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'MTelevisor 50 Pulgadas', precio: 700 },
    { nombre: 'Audiculares', precio: 300 },
    { nombre: 'Parlantes', precio: 400 },
    { nombre: 'Teclado', precio: 900 },
    { nombre: 'Notebook', precio: 1000 }
]

/* 
    imaginemos que queremos saber si en arreglod e meses
    existe el mes de Marzo, usamos:
        forEach
    el cual se va a ejecutar al menos una vez por cada
    ocacion o elemento que exista en el arreglo
*/

meses.forEach(function(menes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
        
    }
});

/*  
        Includes
    comprobamos si un elemento existo o no existe en el arreglo
*/
let resultado = meses.includes('Marzo');
console.log(resultado); // devuelve un booleano
 
/*
    includes, es la mejor opcion en un arreglo "plano"
    pero no si es un arreglo de objetos
    usaremos mejor:
    
        Some
    
    some es ideal para arreglo de objetos
*/
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
});
console.log(resultado); // esto devuelve un booleano

/* 
    Reduce

    sirve para iterar en todos los elementos y averiguar
    por ejemplo el precio total de todos los elementos 
    del array
*/
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); // este "0" es el valor inical

console.log(resultado);


/* 
    Filter
*/

// filtramos todos los producto que tengan un precio mayor a 500
resultado = carrito.filter(function(producto){
    return producto.precio > 500
});

// todos los que tengan el mismo nombre
resultado = carrito.filter(function(producto){
    return producto.nombre > 'Celular'
});

console.log(resultado);
