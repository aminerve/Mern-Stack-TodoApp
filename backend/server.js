require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const React = require('react')
const cors = require('cors')


const app = express()
const routes = require('./routes/ToDoRoute')
const connectToDB = require('./config/db')

//=============Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/*
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();

});
// Parsing incoming data from request
// app.use(bodyparser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors())

// All other Routes
app.use(routes)

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(3001, () => {
    console.log('Listening on port: 3001')
    connectToDB()
})