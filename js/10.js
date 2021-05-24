// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// DESTRUCTURING de Objetos

// forma anterior de hacerlo
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProductp;

// console.log(precioProducto);
// console.log(nombreProducto);

// Destructuring (sacar una estructura de un objeto)
// creamos la variable ya con el nombre apuntando a la propiedad del objeto
// const {precio} = producto;
// const { nombreProducto } = producto;
const { precio, noombreProducto } = producto;
// para que Destructuring es importante que el nombre coincida con la propiedad del Objeto

console.log(precio);
console.log(nombreProducto);