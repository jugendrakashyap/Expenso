const mongoose = require("mongoose")

const addEntrySchema = new mongoose.Schema({
    amount: {type: Number},
    date: {type: Date},
    expenses: {type: Array},
    expensesType: {type: Array},
    incomeSource: {type: String}
})

const addEntryModel = new mongoose.model("entry", addEntrySchema);

module.exports = addEntryModel;