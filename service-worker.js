const CACHE_NAME = "eliteauto-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/script.js",
  "/manifest.json",
  "/assets/images/logo-white.png",
  "/assets/images/logo-dark.png"
  // Add other important files
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
