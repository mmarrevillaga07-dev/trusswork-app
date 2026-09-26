// =========================================================================
// 🚀 SERVICE WORKER RUNTIME INFRASTRUCTURE (sw.js)
// =========================================================================
const CACHE_NAME = "Trusswork-Terminal-v1";

// 1. Explicitly list all assets required for localized offline operations
const OFFLINE_ASSET_REGISTRY = [
    "./",
    "./index.html",
    "./app.js"
];

// 2. INSTALL LIFECYCLE EVENT: Pre-caches critical web platform assets
self.addEventListener("install", (event) => {
    console.log("Trusswork Worker Engine: Deploying persistent storage cache registries...");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(OFFLINE_ASSET_REGISTRY);
        }).then(() => {
            // Force the installing worker to become active instantly
            return self.skipWaiting();
        })
    );
});

// 3. ACTIVATE LIFECYCLE EVENT: Sweeps and drops obsolete system caches
self.addEventListener("activate", (event) => {
    console.log("Trusswork Worker Engine: Cache sweep protocol initializing...");
    event.waitUntil(
        caches.keys().then((cacheKeys) => {
            return Promise.all(
                cacheKeys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log(`Trusswork Worker Engine: Purging legacy cache [${key}]`);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => {
            // Direct the worker to take immediate control over open viewport tabs
            return self.clients.claim();
        })
    );
});
// 4. FETCH INTERCEPT PIPELINE: Handles all browser request loops
self.addEventListener("fetch", (event) => {
    // Leave database system calls to pass directly to IndexedDB uninterrupted
    if (event.request.url.includes("indexeddb")) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return from offline memory state if hit, otherwise fetch fresh
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                // Ensure received network values are valid before tracking them
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
                    return networkResponse;
                }

                // Clone response streams safely before writing them to the cache
                const structuralResponseClone = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, structuralResponseClone);
                });

                return networkResponse;
            }).catch((networkError) => {
                console.error("Trusswork Worker Engine: Operational request sync break: ", networkError);
                // Custom error routing fallbacks can be handled here if files mismatch
            });
        })
    );
});
