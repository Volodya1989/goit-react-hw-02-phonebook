// Separate named imports, this makes the code more readable
import { Component } from "react";
import { Container } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (data) => {
    this.setState((prevState) => {
      data.id = nanoid();
      const isPresentOnList = !!prevState.contacts.find((contact) => contact.name === data.name);
      if (isPresentOnList) {
        alert(`${data.name} is already present in this current list`)
        return;
     }
       return {
         contacts: [...prevState.contacts, data],
       };
    });
    // console.log(this.state);
  };
  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />

        <h1>Contacts</h1>
        <ul>
          {contacts.map(({ name, number, id }) => {
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
