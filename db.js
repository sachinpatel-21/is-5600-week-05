// db.js
const mongoose = require('mongoose')

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/?authSource=admin')
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

module.exports = mongoose

=======
/**
 * In this example we are connecting to a local MongoDB instance. This instance is running via docker-compose in our GitHub Codespaces environment.
 * In a real-world application, you would want to use a cloud-based MongoDB service like MongoDB Atlas.
 */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/?authSource=admin')

module.exports = mongoose
>>>>>>> f9f32e7 (Save local changes before merge)
