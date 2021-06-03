const express = require('express')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
//Importing connection from 'config' folder.
const db = require('../config/dbconnection')
//Module to write SQL queries.
const mysql = require('mysql')
const jwt = require('jsonwebtoken')
const validator = require("validator")

//Reading env files
dotenv.config()

//Function that helps to get access to the token
let decodeToken = function(req) {
    //We retrieve the token part from the authorization after the "Bearer "
    let token = req.headers.authorization.split(' ')[1]
    /* The "decodedToken" variable will create an array containing 
    the userId and the access level after comparing with the .env variable
    that has the secret to generate tokens */
    let decodedToken = jwt.verify(token, process.env.JWT_AUTH_SECRET_TOKEN)
    decodedToken - [decodeToken.userId, decodeToken.access_level]
    return decodeToken //👈 We return the array to use when making the functions bellow
}

//Register user Function
exports.signUp = (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    const email = req.body.email
    const password = req.body.password
    const bio = req.body.bio

    if (validator.isEmail(String(email))) {
        bcrypt.hash(password, 10, (error, hash) => {
            let sql = "INSERT INTO users (nom, prenom, email, password, bio) VALUES (?,?,?,?,?)"
            let inserts = [nom, prenom, email, hash, bio]
            sql = mysql.format(sql, inserts)

            const usersSignup = db.query(sql, (error, user) => {
                if (!error) {
                    res.status(201).json({
                        message: "L'utilisateur a été créé avec succès",
                        //On génère un token qui permet à l'utilisateur de se connecter directement lors de la création du compte
                        token: jwt.sign({ userId: user.insertId, access_level: 0 },
                            process.env.JWT_AUTH_SECRET_TOKEN, { expiresIn: process.env.JWT_EXPIRATION }
                        )
                    })
                } else {
                    return res.status(409).json({ error: "Cet utilisateur existe déjà !" })
                }
            })
        })
    } else {
        return res.status(400).json({ error: "Votre email est invalide !" })
    }

}