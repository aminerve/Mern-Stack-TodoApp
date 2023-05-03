require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const userRoute = require('./routes/users/userRoute')
const authRoute = require('./routes/users/authRoute')

const app = express()
const routes = require('./routes/ToDoRoute')
const api = require('./routes/userRoute')
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
app.use(cors());
app.use(morgan('dev'))
app.use(helmet());

// All other Routes
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use(routes)

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('/api/v1', api)

app.listen(3001, () => {
    console.log('Listening on port: 3001')
    connectToDB()
})