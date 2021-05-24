/* 
    PROGRAMACION ORIENTADA A OBJETOS
    (forma antigua, ahora se usa clases---> archivo 29.js)
*/

/* 
    a diferencia de Java o C# por ejemplo, que ellos si
    hacen POO, en Javascript se usan Prototipos.
 */


// Object Literal
/* este es el mas usado, ero no es el más dinamico que digamos 
es mas estatico, nosotros le pasamos los valores a las propiedades
escritas todo a mano o a código duro*/
const producto = {
    nombre: 'Table',
    precio: 500
}

// Object Constructor
/* esto no es tan común en proyectos, porque es dinamico
y lo vas a usar solo cuando lo necesites, tiene una
sintaxis parecida a las funciones */
// "clase"
function Producto(nombre, precio) { // parametros formales (aqui parametros)
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.formatearProducto = function() { 
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
}


// instanciacion de la clase
const producto2 = new Producto('Monitor Curvo de 49"', 8000); // parametros reales (aqui argumentos)
const producto3 = new Producto('Notebook"', 7000);
/* la ventaja de esta forma es que creamos una "clase" que podemos instanciar 
multiples veces con diferentes valores, algo que con el primer ejemplo Object Literal 
no tienes como opcion, sino que debes crear diferentes variables e ir cambiando cada una*/


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());





////////////////////////////////////////
// Que son los Propotitos en Javascript?
////////////////////////////////////////

/* para poder fomatear este objeto, podria pasar el objeto completo
o pasarle por separado nombre y precio por separado*/
function formatearProducto(producto) { 
    return `El producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;
}

/* el problema con esto es que si creamos otro objeto
debemos crear una funcion especifica para ese objeto que la pueda modificar
los Prototipos permiten crear funciones que solo sean usadas por un solo objeto

    Un Prototype va ser un tipo de funcion que va a estar asociada
    a un tipo de objeto en especifico
*/
// Producto.prototype.formatearProducto = function() { 
//     return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
// }