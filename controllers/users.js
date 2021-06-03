const express = require('express')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
//Importing connection from 'config' folder.
const db = require('../config/dbconnection')
//Module to write SQL queries.
const mysql = require('mysql')
const jwt = require('jsonwebtoken')

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
    return decodeToken //👈We return the array to use when making the functions bellow
}

//Register user Function
exports.signIn((req, res) => {

})