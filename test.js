const http = require('http')
const url = require('url')
var markdown = require('markdown').markdown
const server = http.createServer((req, res) => {
  console.log(markdown.toHTML('un paragraph'))
})

server.listen(5000)
