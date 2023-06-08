const Filter = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.length>0 ? (
        filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name}:<span>{number}</span>
              </p>
              <button type="button" onClick={() => onDelete(id)}>
                delete
              </button>
            </li>
          );
        })
      ) : (
        <div>Contact list is currently empty.</div>
      )}
    </ul>
  );
};
export default Filter;
