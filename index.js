const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const connection = require('./config/dbconnection')

//Routes
const usersRoutes = require('./routes/users')

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/users", usersRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})