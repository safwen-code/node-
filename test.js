const express = require('express')
const app = express()

app.get('/:id', (req, res) => {
  res.render('chambre.ejs', { etape: req.params.id })
})

app.listen(5000)
