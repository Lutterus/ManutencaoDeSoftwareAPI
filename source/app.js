const express = require('express')
const routes = require('./routes/routes.js')

const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send('Everything seems fine here')
})

app.get('/api/getPrograms/:userId', routes.getPrograms)

app.listen(PORT, () => {
  console.log(`Started application at port: ${PORT}`)
})