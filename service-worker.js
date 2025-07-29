const cacheName = "diplomax-cache-v1";
const filesToCache = [
  "/07/",
  "/07/index.html",
  "/07/style.css",
  "/07/script.js",
  "/07/manifest.json",
  "/07/applogo.png"
];

// ✅ Install Service Worker and cache essential files
self.addEventListener("install", event => {
  console.log("📦 Installing service worker...");
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("✅ Caching files...");
      return cache.addAll(filesToCache);
    })
  );
});

// ✅ Fetch cached resources if available, else go to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      // Optional fallback: Return a custom offline page here if needed
    })
  );
});

// ✅ Activate: Cleanup old caches if any
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheKeys =>
      Promise.all(
        cacheKeys.map(key => {
          if (key !== cacheName) {
            console.log("🧹 Deleting old cache:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});