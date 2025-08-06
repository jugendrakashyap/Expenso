
const addEntryModel = require("../models/addEntrySchema");

const addEntry = async (req, res) => {
    const { ammount, date, expenseType, incomeSource } = req.body;

    try {
        const entry = await addEntryModel({ ammount, date, expenseType, incomeSource });
        await entry.save();
        res.send({ message: "Entry added successfuly!" });
    }
    catch (err) {
        console.log("error: " + err);
        res.send({ message: "Something went wrong!" });
    }
}