const staticCacheName = 's-app-v1'

const assetUrls = [
    'index.html',
    'app.js',
    'css/style.css'
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => cache.addAll(assetUrls))
    )
}) 

self.addEventListener('activate', (event) => {
    console.log('[SW]: activate')
})
