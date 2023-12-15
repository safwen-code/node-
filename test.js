const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.write('donner non et prenom')
  res.end()
})

server.on('close', function () {
  console.log('bye bye')
})

server.listen(5000)

server.close()
