const server = require('express')()
const express = require('express')

const LRU = require('lru-cache')

const microCache = LRU({
  max: 100,
  maxAge: 10000 // 重要提示：条目在 1 秒后过期。
})

const isCacheable = req => {
  return true
}

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./build/index.template.html', 'utf-8'),
  clientManifest
})

server.use('/dist', express.static('./dist'))
server.get('*', (req, res) => {

  const cacheable = isCacheable(req)
  if (cacheable) {
    const hit = microCache.get(req.url)
    if (hit) {
      console.log('===hit===')
      return res.end(hit)
    }
  }

  const context = {
    title: 'vue ssr',
    url: req.url
  }


  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
    if (cacheable) {
      microCache.set(req.url, html)
    }
  })

})
server.listen(8080)