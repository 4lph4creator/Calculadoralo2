const CACHE_NAME = "lo2-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./stiletto.css",
  "./app.js",
  "./img/bg.png",
  "./img/logo.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
