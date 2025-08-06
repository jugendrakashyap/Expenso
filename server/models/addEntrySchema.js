const mongoose = require("mongoose")

const addEntrySchema = new mongoose.Schema({
    ammount: {type: String},
    date: {type: Date},
    expenseType: {type: String},
    incomeSource: {type: String}
})

const addEntryModel = new mongoose.model("entry", addEntrySchema);

module.exports = addEntryModel;