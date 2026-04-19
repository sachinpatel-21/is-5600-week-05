// db.js
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/?authSource=admin')
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

module.exports = mongoose

