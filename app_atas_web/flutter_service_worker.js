'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "5c52ef23bd54c9f9891680467660486d",
"/assets/assets/avatar.png": "7b74973857b0fff7ed24484ea83b4813",
"/assets/assets/compromissos.png": "069f4a39301fb0039afa79a14e081a1d",
"/assets/assets/data.json": "d41d8cd98f00b204e9800998ecf8427e",
"/assets/assets/development.png": "f814704da72706411b864a314b84ad00",
"/assets/assets/features.png": "32b3b6b244b2a51f492f66ad5f01bdf1",
"/assets/assets/fonts/Work_Sans/WorkSans-Bold.ttf": "9e150cff4fc476012d62575e7b17b2d7",
"/assets/assets/fonts/Work_Sans/WorkSans-Medium.ttf": "816c43ce4c83ecd53572f8ec92d85bc2",
"/assets/assets/fonts/Work_Sans/WorkSans-SemiBold.ttf": "74460583ab1c0fa092289a5de795eb2b",
"/assets/assets/logo.png": "6c3776323d67bf083ea2ae1aa08b0947",
"/assets/assets/logo43.png": "4e5ef13ddc4bc435246d7d97edf279bc",
"/assets/assets/logos.png": "eea71ef5d12b3db093f4dde65135a8ef",
"/assets/assets/notifications.png": "5199b3904475cc8503ffb4d2d692903c",
"/assets/assets/players.json": "568ab2d07360e7b3dbd68d9e52caf07e",
"/assets/FontManifest.json": "19e55cff58d8f134b73126775c770231",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "338bbc444845b061525dadab584a850c",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"/assets/packages/tip_dialog/images/2.0x/icon_notify_done.png": "21b990ec5c0976fe695d06ae1e161d08",
"/assets/packages/tip_dialog/images/2.0x/icon_notify_error.png": "0b90b0b3907eca3b9a54fcf864a9fcdd",
"/assets/packages/tip_dialog/images/2.0x/icon_notify_info.png": "dc674b1f6e86dd75aa2eee5bb6acee13",
"/assets/packages/tip_dialog/images/3.0x/icon_notify_done.png": "d160f913863bc37c4983c5d00fdf5df4",
"/assets/packages/tip_dialog/images/3.0x/icon_notify_error.png": "e1e8be014c914b05d34a401154cb401d",
"/assets/packages/tip_dialog/images/3.0x/icon_notify_info.png": "4bf33f2a7ffebc0d38f2b3e403fa693b",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "3c110133f6844cbe6ce45433180eb175",
"/main.dart.js": "9eb250c86fb3c38193a3d572e3c5e35b",
"/manifest.json": "674bd2f0c1f3b159e4714779e6a461f8"
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
