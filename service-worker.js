const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/app.js',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});

// Interceptar las solicitudes de la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
