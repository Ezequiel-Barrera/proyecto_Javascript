// This


// referencia al mismo objeto con function
const reservacion = {
    nombre: 'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: function() { //importante usar la funcion de esta forma
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
};

console.log(reservacion.informacion());




// con arrow function
window.nombre = 'Un Nombre';

const reservacion2 = {
    nombre: 'Juan',
    apellido: 'De la Torre',
    total: 5000,
    pagado: false,
    informacion: () => {// si usamos un arrow function
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}
/* 
    al usar un arrrow function, el mismo no va a hacer referencia con THIS
    al mismo objeto, sino que apunta a WINDOW
    para que funcione los this tendriamos que agregar esos this a la ventana global
*/


//EJERCICIO DE ENTREVISTA
const reservacion3 = {
    nombre: 'Juan',
    informacion: () => {
        console.log(`${this.nombre}`);
        
    }
}
// cual es el resultado de esto?
// > undefined