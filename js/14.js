/* 
    METODOS para Arrays
*/

const numeros = [12,13,15,18,19];

// agregamos elem. a un arreglo al final del arreglo
numeros[5] = 60; // esta forma no es muy comun, porque tenes que saber la estencion del arreglo
// si colocamos un indice que ya existe, esto lo que hara es modificar dicho contenido
numeros[2] = 60;

/* 
    es mas común usar un Metodo llamado:
        Push
    esto agregara un elemento al final del arreglo
    no necesitamos saber cuanto mide el arreglo
    o la posicion en donde agregamos este elemento
*/
numeros.push(60); // agrega al final del arreglo
numeros.push(70);
numeros.push(80,90,100); //podemos agregar varios elementos a la vez

/* 
    el problema con .push es que hoy en dia no se recomienda modificar
    los arreglos originales
    veamos otra forma:
        unshift
    agrega los elementos al principio del arreglo
*/
numeros.unshift(-10,-20,-30); // agrega al principio del arreglo

/* 
    existen formas de eliminar elementos de un arreglo
*/
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

meses.pop(); // elimina el ultimo elemento del arreglo
meses.shift(); // elimina el primer elemento del arreglo

/* 
    metodo splice
    este metodo toma dos argumentos
    el primero es desde donde va a eliminar
    le pasamos como primer parametro el indice
    desde donde comenzara.
    el segundo argumento es la cantidad de elementos
    que eliminara desde esa posicion hacia el final
    del arreglo
*/
meses.splice(2,1);

/* 
    LA DESVENTAJA DE ESTOS METODOS ES QUE ESTAMOS
    MODIFICANDO EL ARREGLO ORIGINAL

    Un enfoque que esta ganando mucha fuerza es que
    es mejor crear un arreglo nuevo.

    Rest Operator o Spread Operator
*/

// esto imita a .push ya que agrega un elemento al final
// pero de un nuevo arreglo
const nuevoArreglo = [...meses, 'Junio'];

// este imita a .unshift ya que agrega un elemento al principio
// pero de un nuevo arreglo
const nuevoArreglo2 = ['Julio', ...meses];