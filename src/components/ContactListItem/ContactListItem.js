import PropTypes from "prop-types";

const ContactListItem = ({ number, name, onDelete }) => {
  return (
    <li>
      <p>
        {name}:<span>{number}</span>
      </p>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  );
};
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactListItem;
