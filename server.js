const express = require("express");
const authWare = require("./middleware/authware");
const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config();

//creating a server
const app = express();
// Set PORT to 3001
const PORT = process.env.PORT || 3001;
const MONGODB_URI = require("./config/keys");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Kudos', { useNewUrlParser: true });

app.use(authWare);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);
require('./routes/html-routes.js')(app);


// Start the API server
app.listen(PORT, function() {
console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});