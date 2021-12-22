import React from 'react';
import s from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <li className={s.contact_item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.delete}
            type="button"
            id={contact.id}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default Contacts;
