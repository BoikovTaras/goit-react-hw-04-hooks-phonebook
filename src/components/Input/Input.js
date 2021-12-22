import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import s from './Input.module.css';

class Input extends Component {
  state = {
    name: '',
    number: '',
  };

  contact = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  addNewContact = event => {
    if (
      this.props.contacts.find(
        item => item.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      return window.alert(`${this.state.name} is alredy in contacts`, 5000);
    } else {
      this.props.addContact(this.renderContact());
      this.reset();
    }
  };

  renderContact = () => {
    const { name, number } = this.state;
    return { id: nanoid(), name: name, number: number };
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form}>
        <h3 className={s.title}>Name</h3>
        <label>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.contact}
            placeholder="Enter name"
          />
          <h3 className={s.title}>Number</h3>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.contact}
            placeholder="Enter phone number"
          />
        </label>
        <button className={s.button} type="submit" onClick={this.addNewContact}>
          Add contact
        </button>
      </form>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default Input;
