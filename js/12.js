/* 
    UNIR DOS OBJETOS CON EL SPREAD
*/


// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// unimos 2 objetos, pero sin modificar los originales
const nuevoProducto = { ...producto, ...medidas };
// las buenas practicas nos dicen que no debemos mutar los objetos originales



