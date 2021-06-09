const mysql = require("mysql")
const dotenv = require('dotenv')

dotenv.config()

//Possible connexion👇
// const { mysql_database } = require("../config/dbconfig")

const mysql_database = {
    host     : 'localhost',
    user     : 'momoto',
    password : 'Vwuning34@',
    database : 'momoto_db'
}

//Création de la connexion avec le module mysql2 avec l'objet créé dans config.js
const db = mysql.createConnection(mysql_database)

//Connexion à la base de donnes
db.connect((err, conn) => {
    if (err) {
        console.error(`Un problème est survenu lors de la connexion à la base des données, l'error: ` + err.message)
    } else { console.log('Connexion à la base des données MySQL de Momoto réussie !')
        return conn
}
})

module.exports = db