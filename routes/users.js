const bouncer = require("express-bouncer")(500, 900000); // importation du paquet express-bouncer pour luter contre attaques par force brute
const express = require('express'); // importation du paquet express
const router = express.Router(); // création du router

const usersCtrl = require('')

//TODO middlewares d'authetification et validation

router.post('/signup') //Création d'un utilisateur
router.post('/login') //connexion d'un utilisateur
router.get('/:id') //Recupération d'un utilisateur
router.put('/update') //Mise à jour d'un utilisateur
router.delete('/:id') //supression d'un utilisateur

module.exports = router