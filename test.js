const http = require('http')
const url = require('url')
const querystring = require('querystring')
const { emit } = require('process')
const EventEmitter = require('events').EventEmitter

const jeu = new EventEmitter()
jeu.on('gameover', function (message) {
  console.log(message)
})
jeu.emit('neauveu jeu', 'vs avez perdu', 35)
const server = http.createServer((req, res) => {
  res.writeHead(200)
  res.write('donner non et prenom')
  res.end()
})

server.listen(5000)
