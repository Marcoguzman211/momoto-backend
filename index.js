const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
// const connection = require('./config/dbconnection')

const app = express()

app.use('/test', (req, res) => {
    res.send('Ok otra vez')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})