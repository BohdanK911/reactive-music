console.log('object');
const CACHE_NAME = 'default-app-cache';
const urlsToCache = ['/'];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
