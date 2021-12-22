import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './App.module.css';

import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = event => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, event],
    }));
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  };

  componentDidMount() {
    console.log('Страница зарендерилась');
    const getContacts = localStorage.getItem('contacts');
    const contactArr = JSON.parse(getContacts);
    if (contactArr) {
      this.setState({ contacts: contactArr });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <div className={s.container}>
        <Title title="Phonebook" />
        <Input contacts={contacts} addContact={this.addContact} />
        <Title title="Contacts" />
        <Filter value={filter} onChange={this.filterContact} />
        <Contacts
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string,
};

export default App;
