const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  var params = querystring.parse(url.parse(req.url).query)
  res.writeHead(200, { 'content-Type': 'text/html' })
  if ('prenon' in params && 'non' in params) {
    res.write('hi ' + params['prenon'] + 'name' + params['non'])
  } else {
    res.write('donner non et prenom')
  }
  res.end()
})

server.listen(5000)
