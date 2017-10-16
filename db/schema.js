///////////////////////
//Require Mongoose
///////////////////////
const mongoose = require('mongoose')



///////////////////////
//Create Schema 
///////////////////////
const Schema = mongoose.Schema

///////////////////////
//Chef SCHEMA
///////////////////////

const chefSchema = new Schema({
    name: String,
    bio: String,
    Price: Number,
    Specialty: String,
})

///////////////////////
//RECIPES SCHEMA
///////////////////////
const recipeSchema = new Schema({
    name: String,
    description: String,
    image: String,
    Price: String,
    Quantity: Number,

})

///////////////////////
//USERS SCHEMA
///////////////////////
const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,

    }, 
    address: {
        type: String,
        required: true
    },
    

})


///////////////
//Accounts Schema
///////////////
const accountSchema = Schema({
    balance: Number,
    transactions: String,


})


///////////////////////
//Models 
///////////////////////
const recipe = mongoose.model('recipe', recipeSchema);
const chef = mongoose.model('chef', chefSchema)
const users = mongoose.model('users', usersSchema);
//export your recipe with module.exports()


///////////////////////
//Export Models //////
//////////////////////
module.exports = {
    recipeModel: recipe,
    chefModel: chef,
    usersModel: users,
}