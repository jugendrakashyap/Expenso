import { useState } from 'react'
import AddEntry from '../addEntry/AddEntry';

function Home() {
  const [showAddEntry, setShowAddEntry] = useState(false)

  function showAddEntryPopUp() {
    setShowAddEntry(!showAddEntry);
  }
  return (
    <div>
      <button onClick={showAddEntryPopUp}>Add Entry</button>
      {showAddEntry && (<AddEntry />)}
    </div>
  )
}

export default Home