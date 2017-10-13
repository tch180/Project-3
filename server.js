require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

///////////////
//DataBase 
///////////////
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on('connected', () => {
console.log(`--------------- JARVIS IS UP AND RUNNING ON ${PORT} `);
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());

///////////////
//Middleware 
///////////////
app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/client/build/index.html')
})


///////////////
//PORT 
///////////////

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log(`--------------------SERVER IS UP AND RUNNING ON PORT ${PORT} BOSS`);
})