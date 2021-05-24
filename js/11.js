"use strict"; // Correr JS en modo estricto
// esto implica que debemos usar buenas practicas

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// esto nos agrega una propiedad nueva
producto.imagen = 'imagen.jpg';

/* un Objeto se puede modificar, aun si esta en const o let
se pueden agregar nuevos propiedades a los objetos.
Esto podria dicirse que una limitando de los objetos.
Si quieres prevenir que eso suceda,
Tienes que usar una funcion como la siguiente:
*/
Object.freeze(producto);
/* freeze seria como congelar, le pasamos por parametro el objeto
freeze no te permite agregar propiedades, y tampoco permite que sea
modificado */
// producto.imagen = 'imagen.jpg'; 
/*todo salie bien sin errores, pero si arriba en la primera linea
colocamos un "use strict" las cosas cambian */
console.log(Object.isFrozen(producto));

Object.seal(producto1);

console.log(Object.isSealed(producto));

console.log(producto);

/* 
    Diferencias entre Freeze y Seal
    
    freeze no te permite agrgar nuesvas propiedades
    y tampoco que deja eliminar las que tiene el objeto
    tampcoo te deja cambiar un valor que ya existe en un objeto

    seal, al igual que freeze no te permite agregar, ni borrar
    propiedades.
    pero si te permite, modificar valores de las propiedades existentes
*/