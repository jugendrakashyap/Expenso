const mongoose = require('mongoose')
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

function connectDb() {
    mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connecte Successfully"))
    .catch((err) => console.log("Error: " + err));
}

module.exports = connectDb;