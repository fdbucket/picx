if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,d)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=d(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a59a8da5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about.a5c44f06.css",revision:"0002acd75a1a2c84a7900f3d286de9d9"},{url:"assets/about.d99abfbe.js",revision:"fd4c28db7887af5c9d73b4c290cd8fba"},{url:"assets/index.2dd04abe.js",revision:"9c289623dd1de4602c3cde4d6ddb5bde"},{url:"assets/index.95a0ec59.css",revision:"2dec65d86b6e56e9b2b11cebcf5d193d"},{url:"assets/register-sw.74361854.js",revision:"8ee730511ab4a41e88d4aca9f4632737"},{url:"assets/vendor.73c4a0ce.css",revision:"7e5d56c2db6690f948913aec1ec2406a"},{url:"assets/vendor.a60c3d53.js",revision:"983e9a9e81751cbeaf6827a56ac0058c"},{url:"index.html",revision:"b012f5295f1eb4faf05e7824bbedc50f"},{url:"./logo@192x192.png",revision:"2141830aeff90ef6988f4e01aba62fad"},{url:"./logo@512x512.png",revision:"9cd91af1d1005f1c7d42933c465f0dcc"},{url:"manifest.webmanifest",revision:"6d847755b6ef3df5aff4a353336c2732"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
