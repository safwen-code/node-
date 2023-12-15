const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  var page = url.parse(req.url).pathname
  console.log(page)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<p>Voici <strong>html</strong></p>')
  res.end()
})

server.listen(5000)
