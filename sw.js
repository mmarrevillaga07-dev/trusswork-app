const CACHE_NAME = 'trusswork-cache-v2'; // 💡 TIP: Increment this v2 -> v3 next time you update!
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
    // 🚀 FORCE NEW CODES IMMEDATELY WITHOUT WAITING FOR USER TO CLOSE TABS
    self.skipWaiting(); 
});

// 2. Activate Event: Clears out old cache assets and claims active tabs instantly
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
        }).then(() => {
            // 🚀 Force the new service worker to take control of the open webpage right away
            return self.clients.claim();
        })
    );
});

// 3. Fetch Event: Intercepts browser network calls to provide instant offline loading
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request).catch(() => {
                if (e.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
