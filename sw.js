const CACHE_NAME = 'trusswork-cache-v1';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json'
];

// 1. Install Event: Opens the cache and stores all static layout assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Trusswork SW: Caching core assets for offline usage.');
            return cache.addAll(ASSETS);
        })
    );
});

// 2. Activate Event: Clears out old cache assets when updating version strings
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('Trusswork SW: Clearing obsolete cache store:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// 3. Fetch Event: Intercepts browser network calls to provide instant offline loading
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            // Return from local cache storage first, otherwise fetch over the network
            return cachedResponse || fetch(e.request).catch(() => {
                // Optional fallback strategy when both cache and network fail (offline requests)
                if (e.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
