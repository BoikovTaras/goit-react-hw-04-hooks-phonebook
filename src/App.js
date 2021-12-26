import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './App.module.css';

import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = event => setContacts([...contacts, event]);

  const deleteContact = id =>
    setContacts(contacts.filter(item => item.id !== id));

  const filterContact = e => setFilter(e.currentTarget.value);

  const filteredContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  };

  useEffect(() => {
    const getContacts = localStorage.getItem('contacts');
    const contactArr = JSON.parse(getContacts);
    if (contactArr) {
      setContacts(contactArr);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <Title title="Phonebook" />
      <Input contacts={contacts} addContact={addContact} />
      <Title title="Contacts" />
      <Filter value={filter} onChange={filterContact} />
      <Contacts contacts={filteredContacts()} deleteContact={deleteContact} />
    </div>
  );
}

App.propTypes = {
  filter: PropTypes.string,
};
