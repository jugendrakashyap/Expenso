import { useState, useEffect } from 'react'
import axios from "axios";
import './home.css';

function Home() {
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [entries, setEntries] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [expensesType, setExpensesType] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(0);
  const [incomeSource, setIncomeSource] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      await fetch("http://localhost:4000/getEntries")
        .then(async (res) => {
          const response = await res.json();
          setEntries(response.data);
          setTotalAmount(response.totalAmount)
          console.log(response.message);
        })
        .catch(err => console.log(err));
    }
    fetchData();

  }, [])

  const handlePostRequest = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/addEntry", { amount, date, incomeSource })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    window.location.reload();
  }

  function addEntryPopUp(value) {
    let property = document.getElementById("addEntryPopup");

    value ? property.style.display = "flex" : property.style.display = "none";
  }
  return (
    <div style={{ width: "100%" }}>
      <button onClick={() => addEntryPopUp(true)}>Add Entry</button>
      <div className='addEntry-container' id='addEntryPopup'>
        <form className='addEntry-form' action="">
          <button onClick={() => addEntryPopUp(false)}>close</button>
          <input type="number" name="amount" onChange={(e) => setAmount(e.target.value)} id="" placeholder='Enter Ammount' />
          <input type="date" name="date" id="" onChange={(e) => setDate(e.target.value)} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="">Income Source</label>
            <select name="" id="" onChange={(e) => setIncomeSource(e.target.value)}>
              <option value="">select</option>
              <option value="Bhai">Bhai</option>
              <option value="Papa">Papa</option>
              <option value="Renu">Renu</option>
              <option value="Sister">Sister</option>
            </select>
          </div>
          <button onClick={handlePostRequest}>Add</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Expenses</th>
            <th>Expenses Type</th>
            <th>Income Source</th>
          </tr>
        </thead>
        <tbody>
          {
            entries.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.amount}</td>
                  <td>{new Date(value.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                  </td>
                  <td>{value.expenses}</td>
                  <td>{value.expensesType}</td>
                  <td>{value.incomeSource}</td>
                </tr>
              )
            })
          }
          <tr className='footer-row'>
            <td colSpan={2}>Total Amount: {totalAmount}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home