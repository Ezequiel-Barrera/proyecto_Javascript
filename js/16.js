/* 
    Funciones
*/

// Declaración de Función
function sumar() {
    console.log(10 + 10);
        
};
// aca la llamas
sumar();

// Expresión de la Función
const sumar2 = function() {
    console.log(3 + 3);
    
};
sumar2();

// IIFE
// son funciones que no necesitan llamarse porque se llaman ellas mismas
(function() {
    console.log('Esta es una función');
    
})();
/* 
    estas tipos de funciones no son tan recomendables para 
    reutilizarse, porque mas que nada sirven para PROTEGER
    las variables y que no se mezcles con otro archivo.
    
    las IIFE son utilices para proteger funciones y variables
    para que no se usen en otros archivos
*/
