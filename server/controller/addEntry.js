const addEntryModel = require("../models/addEntrySchema");

const home = (req, res) => {
  res.json({ message: "This is homepage!" });
}

const addEntry = async (req, res) => {
  try {
    const { amount, date, expenses, expensesType, incomeSource } = req.body;

    console.log(amount, date, expenses, expensesType, incomeSource);
    const entry = await addEntryModel({ amount, date, expenses, expensesType, incomeSource });
    await entry.save();
    res.json({ message: "Entry added successfuly!" });
  }
  catch (err) {
    console.log("error: " + err);
    res.json({ message: "Something went wrong!", error: err.message });
  }
}

const getEntries = async (req, res) => {
  const getEntries = await addEntryModel.find({}, { expenses: 0, expensesType: 0 }).sort({ date: -1 });
  const getTotalAmount = await addEntryModel.aggregate([
    {
      $group: {
        _id: null, // group all documents
        totalAmount: { $sum: "$amount" } // sum 'amount' field
      }
    }
  ]);
  const totalAmount = getTotalAmount[0]?.totalAmount || 0;
  console.log(totalAmount)
  console.log(getEntries);
  res.json({ message: "Data fetched successfuly!", data: getEntries, totalAmount });
}

const getIncomeSourceData = async (req, res) => {
  try {
    const { incomeSource } = req.body;
    console.log(incomeSource);
    const getData = await addEntryModel.find({ incomeSource });
    res.status(200).json(getData);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message })
  }
}

module.exports = { home, addEntry, getEntries, getIncomeSourceData };