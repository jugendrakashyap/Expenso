const express = require('express')
const app = express();
const connectDb = require("./config/db")
connectDb();

app.get('/', (req, res) => {
    res.send("Hello word");
})

app.listen(4000, () => {
    console.log("server is running on http://localhost:4000");
})