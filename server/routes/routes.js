const route = require("express").Router();
const { home, addEntry, getEntries, getIncomeSourceData } = require("../controller/addEntry");

route.get("/", home);
route.post("/addEntry", addEntry);
route.get('/getEntries', getEntries);
route.post("/getIncomeSourceData", getIncomeSourceData);

module.exports = route;