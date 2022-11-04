const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/devcoffee/",
  "/devcoffee/index.html",
  "/devcoffee/css/style.css",
  "/devcoffee/js/app.js",
  "/devcoffee/images/coffee1.jpg",
  "/devcoffee/images/coffee2.jpg",
  "/devcoffee/images/coffee3.jpg",
  "/devcoffee/images/coffee4.jpg",
  "/devcoffee/images/coffee5.jpg",
  "/devcoffee/images/coffee6.jpg",
  "/devcoffee/images/coffee7.jpg",
  "/devcoffee/images/coffee8.jpg",
  "/devcoffee/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
