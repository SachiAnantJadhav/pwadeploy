self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    e.waitUntil(
      caches.open('ecom-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/pwadeploy/index.html',
          '/pwadeploy/manifest.json',
          '/pwadeploy/logo192.png',
          '/pwadeploy/logo512.png',
        ]);
      })
    );
  });
 
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
 
