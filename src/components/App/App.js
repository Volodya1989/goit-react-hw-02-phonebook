// Separate named imports, this makes the code more readable
import { Component } from "react";
import { Container, Phonebook } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
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
        <Phonebook>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Phonebook>
        <h1>Contacts</h1>

        <Filter
          filter={filter}
          onChangeFilter={this.changeFilter}
          id={this.loginInputId}
        />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
