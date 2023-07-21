const staticCacheName = 's-app-v1'

const assetUrls = [
    'index.html',
    'app.js',
    'css/style.css'
]

self.addEventListener(type: 'install', listener: async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
}) 

self.addEventListener(type: 'activate', listener: event => {
    console.log('[SW]: activate')
})

self.addEventListener(type: 'fetch', listener: event => {
    console.log('Fetch', event.request.url)
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}
