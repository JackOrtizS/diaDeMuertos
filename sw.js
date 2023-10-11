const CACHE_NAME = "v1_cache"
CACHE_NAME.addAll = [
    './',
  //'index.html',
  //'main.js',
  //'manifest.json',
  //'styles.css',
  //'sw.js',
  //'/img/favicon_io/android-chrome-192x192.png',
  //'/img/favicon_io/android-chrome-512x512.png',
  //'/img/favicon_io/apple-touch-icon.png',
  //'/img/favicon_io/favicon-16x16.png',
  //'/img/favicon_io/favicon-32x32.png',
  //'/img/favicon_io/favicon.ico',
  //'/img/favicon_io/site.webmanifest',
  //'/img/altar1.jpg',
  //'/img/altar2.webp',
  //'/img/altar3.jfif',
  //'/img/comida1.webp',
  //'/img/comida2.jfif',
  //'/img/comida3.jpg',
    //'/img/logo.avif',
    //'/img/comida1.webp',

    //'/img/lugar1.jfif',
    //'/img/lugar2.webp',
    //'/img/lugar3.jpeg'

]

//Activacion del service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mi-cache').then((cache) => {
            return cache.addAll([
                './',
                'bootstrap.bundle.min.js',
                'bootstrap.min.css'

            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== "mi-cache") {
                        return caches.delete(cacheName)
                    }
                })
            );
        })
    );
});


//Intercepta la solicitud 
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request)
        })
    );
});