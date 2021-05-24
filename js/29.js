//////////////////////////////////////////////////////////////
// CLASES


// declarar
class Producto { // el nombre de las clases va con mayus.
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearPrducto() {
        return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`
    }
    retornoPrecio() {
        console.log(`${this.precio}`);
    }
}
// instanciar
const producto2 = new Producto('Monitor Curvo de 49"', 8000); // parametros reales (aqui argumentos)
const producto3 = new Producto('Notebook"', 7000);

//////////////////////////////////////////////////////////////
// Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearPrducto() {
        return `${super.formatearPrducto()} y su ISBN es ${this.isbn}`
    }

    retornoPrecio() {
        super.retornoPrecio();
        console.log('Y si hay en existencia');
        
    }
}
const libro = new Libro('Javasript la Revolucion', 120, '45613215645213');
console.log(libro);
console.log(libro.formatearPrducto());
console.log(libro.retornoPrecio());
console.log(producto2.formatearPrducto());
