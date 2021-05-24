// Promises en Javascript

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado'); // el Promise se cumplio
    } else {
        reject('No se pudo inicar sesión'); // el NO se Promise se cumplio
    }
});

usuarioAutenticado
    .then( function(resultado) {
        console.log(resultado);
    })
    .catch( function(error) {
        console.log(error);
    })

/*pasado a arrow function quedari asi 
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) )
*/


/* en los promises existen 3 valores o estados
 Pending : No se a cumplido, ni se a rechazado, esta en espera
        seguramente te falto algo por hacer.
 Fulfilled :  Se cumplio la promesa.
 Rejected : Se ha rechazado, no se pudo cumplir.
 */