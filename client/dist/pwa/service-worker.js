if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,n,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+c.slice(1)};return Promise.all(n.map(c=>{switch(c){case"exports":return i;case"module":return r;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"any-camera-app"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"camera.png",revision:"83bbd6a2a963e584cc0d900bdfac8998"},{url:"cameras_data.json",revision:"a7024d5892fbbab5811618dcfe62fb7b"},{url:"cancel.svg",revision:"6acdfdce31d9b78d958e637d7f694f73"},{url:"css/2.0dca0f9f.css",revision:"84a6bd5631e4fb8b8faa05e92169e476"},{url:"css/3.28d4abce.css",revision:"9e23eb4a3ccc59d6ad1a48d6843bb587"},{url:"css/4.f770fafc.css",revision:"1053e3522b8b9595eb9d685cd089ccd3"},{url:"css/app.ba6d44a0.css",revision:"b33326dbdce17526c8ede13763cba9bd"},{url:"css/vendor.0f66e709.css",revision:"27fc5fd4b61dcc5d62c5e83f6791fb2f"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.3a3e0eb8.woff",revision:"2cfd66c1c5370b239746ff14c6d07e73"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.404ad2ff.woff2",revision:"61bc143dec7039dd6aac95721ddc4522"},{url:"icons/android-icon-144x144.png",revision:"0ea779fe944647010077896562af62d1"},{url:"icons/android-icon-192x192.png",revision:"70aac167afbd21296ff0c5fe8dccc134"},{url:"icons/android-icon-36x36.png",revision:"7a0d06a9df4420a97825004ee5eee061"},{url:"icons/android-icon-48x48.png",revision:"325158dd09b8a6e8456c7a9ef130a0d7"},{url:"icons/android-icon-72x72.png",revision:"0a04cba8a151c7687d244e1f122c66dd"},{url:"icons/android-icon-96x96.png",revision:"ace89c7f8b62250dfe2787b8c199545e"},{url:"icons/apple-icon-114x114.png",revision:"d6133010697b4f97a785ba4440c04966"},{url:"icons/apple-icon-120x120.png",revision:"17ccfdf71981d20781aa873546b8cdbd"},{url:"icons/apple-icon-144x144.png",revision:"0ea779fe944647010077896562af62d1"},{url:"icons/apple-icon-152x152.png",revision:"75590b53918a234fcba450632754cdab"},{url:"icons/apple-icon-180x180.png",revision:"00b182877ee5238fa9e5e6c97184518c"},{url:"icons/apple-icon-57x57.png",revision:"432049593c2b9e91e6c35161bea9bb1b"},{url:"icons/apple-icon-60x60.png",revision:"9ae2808d31f66963e60bc216adbaedad"},{url:"icons/apple-icon-72x72.png",revision:"0a04cba8a151c7687d244e1f122c66dd"},{url:"icons/apple-icon-76x76.png",revision:"8fdeb275990b25827e7266cf9c10b697"},{url:"icons/apple-icon-precomposed.png",revision:"3fe50e00ecb1ef0519cd2d61d43f4363"},{url:"icons/apple-icon.png",revision:"3fe50e00ecb1ef0519cd2d61d43f4363"},{url:"icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"icons/favicon-16x16.png",revision:"7d36c2e9995644bd1340cebfb9312405"},{url:"icons/favicon-32x32.png",revision:"27fec9b90d48838dea6286b94f042342"},{url:"icons/favicon-96x96.png",revision:"ace89c7f8b62250dfe2787b8c199545e"},{url:"icons/favicon.ico",revision:"20e216a2441dec6ace0e8cf040f2bcbe"},{url:"icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"icons/ms-icon-144x144.png",revision:"0ea779fe944647010077896562af62d1"},{url:"icons/ms-icon-150x150.png",revision:"1487947cd899b4cf6551fe17567dbc46"},{url:"icons/ms-icon-310x310.png",revision:"050d9a6b2f15a5075b5c8bbcb910a9e4"},{url:"icons/ms-icon-70x70.png",revision:"1a72c9266a6c2186654b2761ecfca068"},{url:"index.html",revision:"e97ee090b32edc05895f2a90af36c24e"},{url:"js/2.5e6f8c7e.js",revision:"b545e93a6a96ef6e226f4c993790708c"},{url:"js/3.158a807d.js",revision:"da6b735dda24c2703b0b0b34577a2d60"},{url:"js/4.e9263cbf.js",revision:"b7d756eff37d84673812d6dafe41bae4"},{url:"js/5.906715ef.js",revision:"0f08f073f0acdc877f6303ba8fa75a8c"},{url:"js/6.413027c0.js",revision:"217a59c3c11496a8b79d18036e3a57d6"},{url:"js/app.478e55b6.js",revision:"21df6b0ac5027d4a173485a12d991d63"},{url:"js/vendor.7140c5d2.js",revision:"db8852b9fd0ab007a261a54c2a0ba326"},{url:"manifest.json",revision:"9a00e5547b71869f1729ee261b36a043"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
