const http = require('node:http')
const fs = require('node:fs/promises')

const accessKey = process.env.ACCESS_KEY
if (!accessKey) throw new Error('ACCESS_KEY is missing from .env')

// Only serve explicitly listed files, not .env.
const files = {
    '/': ['index.html', 'text/html'],
    '/script.js': ['script.js', 'text/javascript'],
    '/styles.css': ['styles.css', 'text/css'],
    '/icons/favicon.svg': ['icons/favicon.svg', 'image/svg+xml'],
    '/imgs/favicon.ico': ['imgs/favicon.ico', 'image/x-icon'],
}

http.createServer(async (req, res) => {
    try {
        if (req.url === '/api/photo') {
            const response = await fetch('https://api.unsplash.com/photos/random', {
                headers: { Authorization: `Client-ID ${accessKey}` },
            })
            if (!response.ok) throw new Error(`Unsplash returned ${response.status}`)

            const photo = await response.json()
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ url: photo.urls.regular }))
            return
        }

        const file = files[req.url]
        if (!file) {
            res.writeHead(404)
            res.end('Not found')
            return
        }

        const content = await fs.readFile(file[0])
        res.writeHead(200, { 'Content-Type': file[1] })
        res.end(content)
    } catch (error) {
        console.error(error)
        res.writeHead(500)
        res.end('Server error')
    }
}).listen(3000, '127.0.0.1', () => {
    console.log('Open http://localhost:3000')
})