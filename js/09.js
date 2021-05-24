// Objetos

const nombreProducto = 'Monitor 20 Pulgadas';
const precio = 300;
const disponible = true;

// lo anterior vendria a ser igual el siguiente objeto

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


/* // para acceder a las propiedades del objeto
console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);
// esta fue la sintaxis del punto

// la siguiente no es tan común
console.log(producto['precio']);
console.log(producto["nombreProducto"]);
 */

// MODIFICAR un Objeto

// para AGREGAR nuevas propiedades
producto.imagen = 'imagen.jpg';

// ELIMINAR propiedades
delete producto.disponible;

console.log(producto);