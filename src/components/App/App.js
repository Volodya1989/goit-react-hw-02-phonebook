// Separate named imports, this makes the code more readable
import { Component } from "react";
import { Container } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  addContact = (data) => {
    data.id = nanoid();

    this.setState((prevState) => {
      const isPresentOnList = !!prevState.contacts.find(
        (contact) => contact.name === data.name
      );
      if (isPresentOnList) {
        alert(`${data.name} is already present in this current list`);
        return;
      }

      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />

        <h1>Contacts</h1>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.changeFilter}
            id={this.loginInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
        </label>
        <ul>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}:{number}
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}
export default App;
