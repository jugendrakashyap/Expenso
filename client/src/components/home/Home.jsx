import { useState, useEffect } from 'react'
import axios from "axios";
import './home.css';

function Home() {
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [entries, setEntries] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [expensesType, setExpensesType] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountData, setTotalAmountData] = useState([]);

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

  const getIncomeSourceData = async (value) => {
    setTotalAmount(0)
    axios.post("http://localhost:4000/getIncomeSourceData", { incomeSource: value })
      .then(async (res) => {
        const data = res.data;
        console.log(data)
        setEntries(data)
        const amounts = [];
        data.map(value => {
          console.log(value.amount)
          amounts.push(value.amount)
        })
        setTotalAmountData(amounts)
        console.log(amounts)
        console.log(totalAmountData)
        console.log("total amount", totalAmount)
      })
      .catch(err => console.log(err));
  }


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

  function showNavBtns(value) {
    const element = document.getElementById(value);
    element.style.display = element.style.display == "flex" ? "none" : "flex";
  }
  return (
    <main>
      <section className='sidebar'>
        <div>
          <h1>Expenso</h1>
        </div>
        <button onClick={() => addEntryPopUp(true)}>Add Entry</button>
        <nav>
          <div className='navigation'>Expences</div>
          <div className='navigation'>Monthly</div>
          <div className='navigation'>Yearly</div>
          <div className='navigation'>Expences</div>
          <div className='nav-main-container'>
            <p className='navigation' onClick={() => showNavBtns("incomeSourceContainer")}>Income Source</p>
            <div className="btns-container" id='incomeSourceContainer'>
              <button className='navigation nav-btn' onClick={() => getIncomeSourceData("Bhai")}>Bhai</button>
              <button className='navigation nav-btn' onClick={() => getIncomeSourceData("Papa")}>Papa</button>
              <button className='navigation nav-btn' onClick={() => getIncomeSourceData("Renu")}>Renu</button>
              <button className='navigation nav-btn' onClick={() => getIncomeSourceData("Sister")}>Sister</button>
            </div>
          </div>
        </nav>
      </section>
      <section className='section-2'>
        <div className='addEntry-container' id='addEntryPopup'>
          <div className='addEntry-form-container'>
            <button className='close-popup' onClick={() => addEntryPopUp(false)}>×</button>
            <form className='addEntry-form' action="">
              <input type="number" name="amount" onChange={(e) => setAmount(e.target.value)} id="" placeholder='Enter Ammount' />
              <input type="date" name="date" id="" onChange={(e) => setDate(e.target.value)} />
              <select name="" id="" onChange={(e) => setIncomeSource(e.target.value)}>
                <option value="">Select Income Source</option>
                <option value="Bhai">Bhai</option>
                <option value="Papa">Papa</option>
                <option value="Renu">Renu</option>
                <option value="Sister">Sister</option>
              </select>
              <input type="text" placeholder='Remark' />
              <div className='form-btns'>
                <button>Reset</button>
                <button onClick={handlePostRequest}>Add</button>
              </div>
            </form>
          </div>
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
      </section>
    </main >

  )
}

export default Home