// FUNCIONES con Parametros y Argumentos


// Declaración de Función
function sumar(numero1, numero2) { // pasamos Parametros a esta Función
    console.log(numero1 + numero2);
};
sumar(10, 10); // aqui pasamos Argumentos o los Valores Reales

// Expresión de la Función
const sumar2 = function(n1, n2) {
    console.log(n1 + n2);  
};
sumar2(5, 10);


/* 
    Existen los parametros por defual
    function sumar(numero1 = 0, numero2 = 0) {

    esto hace que si al llamar a la funcion con 
    un solo argumento, JS tome el parametro por 
    defaul.

    sumar(1);

    Un ejemplo es quizas, facebook cuando no
    llenamos todos los campos en el registro
*/