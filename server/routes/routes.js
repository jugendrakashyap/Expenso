const route = require("express").Router();
const { home, addEntry, getEntries } = require("../controller/addEntry");

route.get("/", home);
route.post("/addEntry", addEntry);
route.get('/getEntries', getEntries);

module.exports = route;