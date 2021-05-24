/* 
    TIPOS DE DATOS
*/

// String o Caddena de Texto
const producto = "Monitor de 20 Pulgadas";
/* 
    se pueden usar comillas simples o dobles
    '' o "", pero no se pueden mezclar
    si necesitamos usar comillas dentro de una variable
    o constante, tenemos que salvar la comilla, ejemplo:
        const producto = 'Monitor de 20\" Pulgadas';
 */

// Menos comunes
// Crear una constante con un Constructor
const producto2 = String('Monitor 30 Pulgadas');
// Crear una constante con un Constructor como un Objeto
const producto3 = new String('Monitor 50 Pulgadas');

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);


// Metodos para String
/* 
    console.log(prodcuto);
    es una funcion, porque le estamos pasando el valor entre parentesis
    sin embargo cuando le agregas un punto y un nombre
    se transforma en un Metodo. Por ejemplo:

        console.log(producto.length);

    En el caso de .length no es un Metodo mas bien es una Propiedad.
    Al usar Metodos, los mismos van acompañados de parentesis.
*/

// IndexOf (retorna posición)
const tweet = 'Aprendiendo Javascript con el curso de Desarrollo Web Completo';
console.log(tweet.indexOf('Javascript'));

// Includes (retorna True o False)
console.log(tweet.includes('Javascript'));