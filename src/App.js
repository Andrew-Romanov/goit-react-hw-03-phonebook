import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import initialContacts from './utils/contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  whenSubmit = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name))
      return alert(`${name} is already in contacts`);

    this.setState(prevState => ({
      contacts: [{ id: uuidv4(), name, number }, ...prevState.contacts],
    }));
  };

  whenDelete = idToDelete => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  render() {
    return (
      <MainContainer>
        <PageHeader title="React Homework 02. Phonebook" />

        <Section title="Add Contact">
          <ContactForm whenSubmit={this.whenSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter
            filterValue={this.state.filter}
            whenChange={this.handleChange}
          />
          <br />
          <ContactList currentState={this.state} whenDelete={this.whenDelete} />
        </Section>
      </MainContainer>
    );
  }
}

export default App;
