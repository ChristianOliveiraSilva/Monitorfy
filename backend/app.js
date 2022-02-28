const express = require('express')
const path = require('path')
const process = require('./routes/process')
const services = require('./routes/services')
const performance = require('./routes/performance')
const others = require('./routes/others')

const app = express()
const port = 80

app.set('json spaces', 2);

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get('/process', process);
app.get('/services', services);
app.get('/performance', performance);
app.get('/others', others);

app.get('*', (req, res) => {
  res.send('404')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
