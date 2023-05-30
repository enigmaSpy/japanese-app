/* eslint-disable no-restricted-globals */

function installOfflinePage(event) {
    const offlinePage = new Request('/offline.html');
    event.waitUntil(
      fetch(offlinePage)
        .then(response => {
          return caches.open('offline')
            .then(cache => {
              return cache.put(offlinePage, response);
            });
        })
    );
  }
  
  function respondWithOfflinePage(event) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.open('offline')
            .then(cache => {
              return cache.match('/offline.html');
            });
        })
    );
  }
  
  self.addEventListener('install', installOfflinePage);
  self.addEventListener('fetch', respondWithOfflinePage);