// DEPENDENCIES
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path")

let prefix = '';

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    prefix = '/api'
}

// ROOT
app.get(`${prefix}/`, (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Social Meet Up'
    })
})

// // CONTROLLERS 
const eventsController = require('./controllers/events_controller')
app.use(`${prefix}/events`, eventsController);

const locationsController = require('./controllers/locations_controller')
app.use(`${prefix}/locations`, locationsController)

const hobbiesController = require('./controllers/hobbies_controller')
app.use(`${prefix}/hobbies`, hobbiesController)


// LISTEN
const port = process.env.PORT || 3001
app.listen(port, ()=>{
    console.log(`🎸I am listening at ${port}`)
})
