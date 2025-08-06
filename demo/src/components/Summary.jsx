const Summary = ({ entries }) => {
  const income = entries.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const expense = entries.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
  const balance = income - expense;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Income: ₹{income}</p>
      <p>Total Expense: ₹{expense}</p>
      <p>Balance: ₹{balance}</p>
    </div>
  );
};

export default Summary;
