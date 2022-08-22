importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.5.0/workbox-sw.js"
  );
  
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.NetworkFirst()
    // -- or --
    // new workbox.strategies.CacheFirst()
  );