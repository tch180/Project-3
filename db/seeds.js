require('dotenv').config();

///////////////////////
//Express & Router 
///////////////////////
var express = require("express");
var router = express.Router();

///////////////////////
//Mongoose & Schemas 
///////////////////////
var mongoose = require("mongoose");
var schema = require("./schema.js");




///////////////////////
// DataBase Connection
///////////////////////
mongoose.connect(process.env.MONGODB_URI)


const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
})
db.once('open', () => {
    console.log('Connected to MongoDB! Surprised? Me too!')
})



///////////////////////
//Models 
///////////////////////

const recipeModel = schema.recipeModel;
const chefModel = schema.chefModel;
const usersModel = schema.usersModel;



///////////////////////
//  Recipe Model 
///////////////////////
const Marsala = new recipeModel({
    name: "Chicken Marsala",
    description: "Creamy Chicken Marsala",
    image: "https://i.imgur.com/UIywQQI.jpg?1",
    price: '$55',
    quantity: 4,


});
const greenbean = new recipeModel({
    name: "Greenbean Alamdine",
    description: "Sauteed greenbeans",
    image: "https://i.imgur.com/IPnOsnu.jpg",
    price: '$25',
    quantity: 4,
});
const redpotato = new recipeModel({
    name: "Garlic roasted RedBliss potatoes",
    description: "roasted potatoes",
    image: "https://i.imgur.com/tQ3DxIA.jpg",
    price: '$15',
    quantity: 4,
});
const MeatLoaf = new recipeModel({
    name: "Asian MeatLoaf",
    description: "Asian inspired meatloaf",
    image: "https://i.imgur.com/UZdXmqk.jpg",
    price: '$35',
    quantity: 4,
});

const recipe = [MeatLoaf, redpotato, greenbean, Marsala]
recipe.forEach((recipe) => {
    recipe.save()
        .then((recipe) => {
            console.log(`${recipe.name} saved `)
        })
        .catch((error) => {
            console.log(error)
        });

})



//////////////////////
//  Users Models
///////////////////////

const bob = new usersModel({
    name: "bob, Smith",
    email: "BobSmith@gmail.com",
});
const Victory = new usersModel({
    name: "Victory, Smith",
    email: "VictorySmith@gmail.com",
});
const Elias = new usersModel({
    name: "Elias, Smith",
    email: "EliasSmith@gmail.com",
});

const users = [bob, Victory, Elias]

users.forEach((users) => {
    users.save()
        .then((users) => {
            console.log(`${users.name} saved `)
        })
        .catch((error) => {
            console.log(error)
        });

})


///////////////
//Chefs
///////////////

const chefbob = new chefModel({
    name: 'Chef Bob',
    bio: 'Labore deserunt duis aliquip et id irure tempor do et.',
    price: 60,
    Speciality: 'Asian and pastrys',
})
const chefrob = new chefModel({
    name: 'Chef Robert',
    bio: 'Labore deserunt duis aliquip et id irure tempor do et.',
    price: 35,
    Speciality: 'Mexican',
})
const chefClare = new chefModel({
    name: 'Chef Clare',
    bio: 'Labore deserunt duis aliquip et id irure tempor do et.',
    price: 45,
    Speciality: 'Italian',
})

const chefs = [chefbob, chefrob, chefClare]
chefs.forEach((chefs) => {
    chefs.save()
        .then((chefs) => {
            console.log(`${chefs.name} saved `)
        })
        .catch((error) => {
            console.log(error)
        });

})

/*  recipe.create(chefModel, function(err) {
       console.log("SEED:  Chefs are active ");
       res.redirect('/');
 });  */



//======================
// EXPORTS
//====================== 
/* module.exports = router; */
db.close();