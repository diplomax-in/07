const cacheName = "diplomax-cache-v1";
const filesToCache = [
  "/07/", // path to your repo root
  "/07/index.html",
  "/07/style.css",       // replace with your css file
  "/07/script.js",       // replace with your js file
  "/07/manifest.json",
  "/07/applogo.png",
  "/07/applogo.png"
];

// Install Service Worker
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

// Fetch resources
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});