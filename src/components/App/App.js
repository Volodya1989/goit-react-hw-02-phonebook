// Separate named imports, this makes the code more readable
import { Component } from "react";
import { Container, Name } from "components/App/App.styled";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };
  handleOnChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        contacts: prevState,
      };
    });
    this.reset();
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name
            <Name
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleOnChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul></ul>
      </Container>
    );
  }
}
export default App;