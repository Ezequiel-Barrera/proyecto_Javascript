/* 
    Metodos de Propiedad

    son funciones pero con la 
    sintaxis de metodo
*/

// objeto que tiene una funcion
const reproducir = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción con el ID: &{id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproduciendoPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCansion = function(id) {
    console.log(`Eliminando la cancion: ${id}`);
    
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCansion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Heavy Metal');

