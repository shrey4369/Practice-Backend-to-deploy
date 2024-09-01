const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("You are on twitter page")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at our login page</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Code</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at port ${process.env.PORT}`);
})