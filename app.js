// app.js
<<<<<<< HEAD
=======
const path = require('path')
>>>>>>> f9f32e7 (Save local changes before merge)
const express = require('express')
const path = require('path')
const api = require('./api')
<<<<<<< HEAD

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Product routes
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)
app.post('/products', api.createProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)

// Order routes
app.get('/orders', api.listOrders)
app.get('/orders/:id', api.getOrder)
app.post('/orders', api.createOrder)
app.put('/orders/:id', api.editOrder)
app.delete('/orders/:id', api.deleteOrder)
=======
const autoCatch = require('./lib/auto-catch')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// Product routes
app.get('/products', autoCatch(api.listProducts))
app.get('/products/:id', autoCatch(api.getProduct))
app.post('/products', autoCatch(api.createProduct))
app.put('/products/:id', autoCatch(api.editProduct))
app.delete('/products/:id', autoCatch(api.deleteProduct))

// Order routes
app.get('/orders', autoCatch(api.listOrders))
app.get('/orders/:id', autoCatch(api.getOrder))
app.post('/orders', autoCatch(api.createOrder))
app.put('/orders/:id', autoCatch(api.editOrder))
app.delete('/orders/:id', autoCatch(api.deleteOrder))

// Missing route handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})
>>>>>>> f9f32e7 (Save local changes before merge)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
<<<<<<< HEAD
  res.status(500).json({ error: err.message })
})

const DEFAULT_PORT = Number(process.env.PORT || 3000)
const MAX_PORT = DEFAULT_PORT + 10

function startServer (port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      if (port < MAX_PORT) {
        console.warn(`Port ${port} is already in use. Trying port ${port + 1}...`)
        startServer(port + 1)
        return
      }

      console.error(`Ports ${DEFAULT_PORT} through ${MAX_PORT} are all in use. Set a different PORT.`)
      process.exit(1)
    }

    console.error(err)
    process.exit(1)
  })
}

startServer(DEFAULT_PORT)
=======
  res.status(err.status || 500).json({ error: err.message })
})

const PORT = process.env.PORT || 3002
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Use a different PORT or stop the process using it.`)
    process.exit(1)
  }
  throw err
})
>>>>>>> f9f32e7 (Save local changes before merge)

module.exports = app
