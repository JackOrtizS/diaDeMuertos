//Configurar el service worker
alert('Hola')
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('sw.js')//ruta del archivo del Service Worker
    .then(function(registration){
        //El service worker se ha registrado correctamente
        console.log('Service Worker registrado con exito.', registration);
    })
    .catch(function(error){
        //Hubo error al registrar el service worker
        console.error(' Error al registrar el Service Worker: ', error);
    })
}else{
    console.error('Error: No soporta el service Worker');
}