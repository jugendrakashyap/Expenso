const EntryList = ({ entries }) => {
  if (entries.length === 0) return <p>No entries yet.</p>;

  return (
    <div className="entry-list">
      <h2>All Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.date} - <strong>{entry.type.toUpperCase()}</strong> ₹{entry.amount} ({entry.source})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
