// try y catch

/* 
en Javascript podes escribir 1000 lineas de codigo, pero si 
uno de las lineas esta mal, ya todo el código deja de funcionar
por eso existe try y catch, ellos atrapan tu error, y te lo
muestran

try, intenta hacer esto
cath, sino sale, atrapa y dime el error
*/

const numero1 = 20;
const numero2 = 30;

console.log(numero1);

try {
    console.log(numero2);
    
} catch (error) {
    console.log(error);
}

console.log(numero3);

/* try catch se usa en situaciones muy especificas
y que sea de importancia para tu aplicacion,
no se puede usar en todo tu código.
Ej.: si un usuario puso o no inicar sesion,
si en una base de datos e pudorealizar la comunicacion,
si un pago se pudo realizar o no.
Solo donde sea critico
 */