# PWA Tutorial

You can watch the video [here](https://youtu.be/sFsRylCQblw?t=266) or follow the written steps below. The written steps include two extra files, `style.css` and `script.js`.

Your web app will need the following files:

```
index.html
logo.png
manifest.json
service-worker.js
style.css
script.js
```

### Make a logo quickly if you want something different

For this app, it doesn't matter too much what your logo is, so you could generate one [here](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html). Download the square image, name it `logo.png`, and put it in your project.

## Written Steps

1: Add a link to your `manifest.json` in your HTML file (comment #1). Also register the service worker (comment #2):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>

    <link rel="stylesheet" href="style.css" />
    <!-- 1. Add this -->
    <link rel="manifest" href="manifest.json" />
    <!-- End -->
  </head>
  <body>
    <h1>Hello World</h1>

    <!-- 2. Add this -->
    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
      }
    </script>
    <!-- End -->
    <script src="script.js"></script>
  </body>
</html>
```

2: Generate all the neccesary icons for a PWA and list them in your `manifest.json`.

Start with your `manifest.json` like this:

```json
{
  "name": "My App",
  "short_name": "My App",
  "start_url": "/",
  "icons": [],
  "theme_color": "#000000",
  "background_color": "#FFFFFF",
  "display": "fullscreen",
  "orientation": "portrait"
}
```

Then, generate the icons from your `logo.png` file. These icons will be stored in an `icons` folder.

```bash
# Run this in your terminal, which you can open in Visual Studio Code with Ctrl+`.
npx pwa-asset-generator logo.png icons
```

Copy the json output at the bottom of your terminal into your `manifest.json`.

```json
{
  "name": "My App",
  "short_name": "My App",
  "start_url": "/",
  "icons": [
    {
      "src": "icons/manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "icons/manifest-icon-512.maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icons/manifest-icon-512.maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#000000",
  "background_color": "#FFFFFF",
  "display": "fullscreen",
  "orientation": "portrait"
}
```

3: Enable caching in your `service-worker.js` file. The `NetworkFirst()` strategy will use a network if available, otherwise it will use the cache. You may reverse this strategy with `CacheFirst()` if your app doesn't change often.

```js
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.0/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.NetworkFirst()
  // -- or --
  // new workbox.strategies.CacheFirst()
);
```

4: Serve the app from [http://localhost:3000](http://localhost:3000) (which you can visit in the browser). There should be a "install" icon in the address bar.

```bash
# In the terminal again.
npx serve
```

### For iOS Support

You have to add these HTML links to the `<head>` for iOS support:

```html
<link rel="apple-touch-icon" href="icons/apple-icon-180.png" />

<meta name="apple-mobile-web-app-capable" content="yes" />

<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2048-2732.jpg"
  media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2732-2048.jpg"
  media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1668-2388.jpg"
  media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2388-1668.jpg"
  media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1536-2048.jpg"
  media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2048-1536.jpg"
  media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1668-2224.jpg"
  media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2224-1668.jpg"
  media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1620-2160.jpg"
  media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2160-1620.jpg"
  media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1284-2778.jpg"
  media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2778-1284.jpg"
  media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1170-2532.jpg"
  media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2532-1170.jpg"
  media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1125-2436.jpg"
  media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2436-1125.jpg"
  media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1242-2688.jpg"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2688-1242.jpg"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-828-1792.jpg"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1792-828.jpg"
  media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1242-2208.jpg"
  media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-2208-1242.jpg"
  media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-750-1334.jpg"
  media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1334-750.jpg"
  media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-640-1136.jpg"
  media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
/>
<link
  rel="apple-touch-startup-image"
  href="icons/apple-splash-1136-640.jpg"
  media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
/>
```
