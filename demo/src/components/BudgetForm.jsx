import { useState } from 'react';

const BudgetForm = ({ addEntry }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !source || !date) return;

    addEntry({
      id: Date.now(),
      amount: parseFloat(amount),
      type,
      source,
      date
    });

    setAmount('');
    setSource('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="text" placeholder="Source or Reason" value={source} onChange={(e) => setSource(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default BudgetForm;
