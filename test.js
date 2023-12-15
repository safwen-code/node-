const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.send('Vs ete a page')
})

app.get('/sous', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.send('Vs ete a sous')
})

app.get('/etape/1', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.send('Vs ete a etatp')
})
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain')
  res.status(404).send('page introuvable')
})

app.listen(5000)
