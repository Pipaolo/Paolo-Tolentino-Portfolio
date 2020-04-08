'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f7b9ba6f98e6afccf869b9ab3569b416",
"assets/assets/images/bg1.jpg": "7ae419827af9732d062efa1a66982e17",
"assets/assets/images/bg2.jpg": "c16efc51041cf394f9ce5645bcad2da4",
"assets/assets/images/bg3.jpg": "10405a54f225ebe77b1a4bff5b57a7e5",
"assets/assets/images/bg4.jpg": "655fd9eadd0a8682aa545746e8c387b8",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "22fe07d042cdc2bb6ce01c2c7b701b5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c7470695d5eda87d8cf5d91a7a0f05ba",
"/": "c7470695d5eda87d8cf5d91a7a0f05ba",
"main.dart.js": "bb2551a4d355450d89e4959f5577bbca",
"manifest.json": "79cde0483ac99e522931c59ef82bee4f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
