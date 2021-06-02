const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const connection = require('./config/dbconnection')

const app = express()

app.use('/test', (req, res) => {
    connection.query('SELECT 123', (err, results, fields) => {
        if (err) throw err;
        console.log('Bonjour tout le monde')
        res.send(fields)
      });
    
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})