const mongoose = require('mongoose')
const db = mongoose.connection;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports = function() {
    mongoose.set('strictQuery', true)
    mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

    db.on('error', (error) => console.error(error))
    db.on('open', () => console.log('Connected to MongoDB'))
    db.on('close', () => console.log('Disconnected from MongoDB'))
}