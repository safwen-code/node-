const express = require('express')
const app = express()

app.get('/:id', (req, res) => {
  res.render('chambre.ejs', { etape: req.params.id })
})

app.get('/nombre/:id', (req, res) => {
  var noms = ['Robert', 'jacques', 'David']
  res.render('pages.ejs', { comp: req.params.id, noms })
})
app.listen(5000)
