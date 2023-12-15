const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  var page = url.parse(req.url).pathname
  console.log(page)
  //   res.writeHead(200, { 'Content-Type': 'text/html' })
  if (page == '/') {
    res.write('accueil')
  } else if (page == '/sous') {
    res.write('sous page')
  } else if (page == '/etape/1') {
    res.write('etap')
  }
  res.end()
})

server.listen(5000)
