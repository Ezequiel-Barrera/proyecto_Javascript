// For loop

for (let i = 1; i < 10; i++) {
    if( i % 2 === 0) {
        console.log(`El Número ${i} es PAR`);
    } else {
        console.log(`El Número ${i} es IMPAR`);
    };

}

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'MTelevisor 50 Pulgadas', precio: 700 },
    { nombre: 'Audiculares', precio: 300 },
    { nombre: 'Parlantes', precio: 400 },
    { nombre: 'Teclado', precio: 900 },
    { nombre: 'Notebook', precio: 1000 }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}


// While Loop
// se ejecuta primera la condicion y despues se ve si se ejecuta o no
let i = 0; // Indice

white( i <= 100) { // Condición
    if (i % 2 === 0) {
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }

    i++; // Incremento
}


// Do While Loop
// se ejecuta almenos una vez y despues de pregunta la condicion
let i = 0;

do {
    console.log(i);
    
    i++;
} while ( i < 10);



/* 
    While tiene que evaluar la condicion para que se ejecute
    Do While se ejecuta al menos una vez y despues se pregunta por la condicion
*/