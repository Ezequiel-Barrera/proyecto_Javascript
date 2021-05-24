/* 
    Arrow Functions
    
    const sumar2 = function(n1, n2) {
        console.log(n1 + n2);
        
    }
    sumar2(5, 10);
    
*/

// se elimina la palabra "function" y se agrega " => "
// cuando tenes una sola linea podes sacar las llaves
const sumar2 = (n1, n2) => console.log(n1 + n2);


// cuando es una sola linea, las llaves se pueden sacar
const aprendiendo = (tecnologias) => {
    console.log(`Aprendiendo ${tecnologias}`);
}
// ejemplo
// cuando es un solo parametro, los parentesis se pueden ir
const aprendiendo1 = tecnologias => console.log(`Aprendiendo ${tecnologias}`);

aprendiendo('Javascript');


/////////////////////////////////////////////////////////////////////////////////////

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'MTelevisor 50 Pulgadas', precio: 700 },
    { nombre: 'Audiculares', precio: 300 },
    { nombre: 'Parlantes', precio: 400 },
    { nombre: 'Teclado', precio: 900 },
    { nombre: 'Notebook', precio: 1000 }
]

meses.forEach( menes =>{
    if(mes == 'Marzo') {
        console.log('Marzo si existe');        
    }
});


resultado = carrito.some( producto => producto.nombre === 'Celular');

resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

resultado = carrito.filter(producto => producto.precio > 500);

console.log(resultado);
