require('dotenv').config()
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
const URL = process.env.DB_URL

app.use(express.json())
app.use(cookieParser)
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

const start = async () => {
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => console.log('Server has been started...'))
    } catch (e) {
        console.log(e)
    }
}

start() 