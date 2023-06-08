// Separate named imports, this makes the code more readable
import { Component } from "react";

import { Container, Name } from "components/App/App.styled";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  handleOnChange = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      name: e.currentTarget.value,
    });
    
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Name
          type="text"
          name="name"
          onChange={(e) => this.handleOnChange(e)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <h1>Contacts</h1>
        <ul></ul>
      </Container>
    );
  }
}
export default App;
