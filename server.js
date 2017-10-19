require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const chef = require('./routes/chefscontroller');
const user = require('./routes/usercontroller');
const recipes = require('./routes/menucontroller')



///////////////
//DataBase
///////////////
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log(`--------------- JARVIS IS UP AND RUNNING `);
});

// If the connection throws an error
connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});

app.use(bodyParser.json());

///////////////
//Middleware
///////////////
app.use(express.static(__dirname + "/client/build/"));
app.use("/api/secondChef", chef);
app.use("/api/users", user );
//app.use("/api/recipes", recipes);


///////////////
//PORT
///////////////

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `--------------------SERVER IS UP AND RUNNING ON PORT ${PORT} BOSS`
  );
});
