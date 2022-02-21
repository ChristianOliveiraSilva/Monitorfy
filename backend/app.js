const express = require('express')

const process = require('./routes/process')
const services = require('./routes/services')
const performance = require('./routes/performance')
const others = require('./routes/others')

const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('System is working')
})

app.get('/process', process);
app.get('/services', services);
app.get('/performance', performance);
app.get('/others', others);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
