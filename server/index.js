const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const connectDb = require("./config/db")
const route = require("./routes/routes");

connectDb();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*"}));


app.use("/", route);

app.listen(4000, () => {
    console.log("server is running on http://localhost:4000");
})