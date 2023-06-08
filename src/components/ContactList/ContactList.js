import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem";

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => onDelete(id)}
            />
          );
        })
      ) : (
        <div>No contacts listed.</div>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
