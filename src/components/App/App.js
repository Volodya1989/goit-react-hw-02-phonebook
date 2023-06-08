// Separate named imports, this makes the code more readable
import { Component } from "react";
import { Container } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
        alert(`${data.name} is already in contacts`);
      } else {
        return {
          contacts: [...prevState.contacts, data],
        };
      }
    });
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
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
        <Filter
          filteredContacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
