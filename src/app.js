const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load()
}

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

////////////////////////ROUTES//////////////////////////////

app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/snacks', require('./routes/snacks')) 

app.use('/snacks/:id/reviews', require('./routes/reviews'))

const snacks = require('./routes/snacks');
app.use('/api', snacks);

////////////////////////DEFAULT ROUTE////////////////////////

app.use(function(req, res, next) {
  next({ status: 404, message:'Route Not Found'})
})

////////////////////////ERROR HANDLER////////////////////////

app.use((err, _req, res, _next) => {
  console.error(err)
  const status = err.status || 500
  const message = err.message || 'Internal Server Error'
  res.status(status).json({ message, status })
})

////////////////////////INITITALIZE SERVER////////////////////////

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Howdy from ', port)
})

module.exports = { app }