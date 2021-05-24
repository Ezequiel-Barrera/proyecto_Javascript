// Codigo Asincrono
// Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');
        
        setTimeout( () => {
            resolve('Los Clientes fueron Descargados');
        }, 5000)
    }); 
}


async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        console.log('Este código si se bloquea');
        console.log(resultado);
        
    } catch (error) {
        console.log(error);
        
    }
}

app();


/* espera 5' segundos y tira el console.log
setTimeout( function() {
    console.log('set timeout...');
    
}, 5000);
*/

/* en intervalos de 5' segundos imprime el console.log
setInterval( function() {
    console.log('set timeout...');
    
}, 5000);
 */