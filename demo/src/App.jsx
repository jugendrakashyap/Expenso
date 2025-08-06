import { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import EntryList from './components/EntryList';
import Summary from './components/Summary';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('budgetEntries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('budgetEntries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <BudgetForm addEntry={addEntry} />
      <Summary entries={entries} />
      <EntryList entries={entries} />
    </div>
  );
};

export default App;
