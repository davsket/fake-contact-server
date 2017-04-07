const bodyParser = require('body-parser')
const cors       = require('cors')
const express    = require('express')

const app  = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.post('/', (req, res) => {
  res.json({
    success: true,
    message: 'Message received!!',
    body: req.body
  })
})

app.get('/', (req, res) => {
  res.send('hola!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})