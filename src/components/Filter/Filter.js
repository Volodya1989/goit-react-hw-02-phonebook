const Filter = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
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
      })}
    </ul>
  );
};
export default Filter;
