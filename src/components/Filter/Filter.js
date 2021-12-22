import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.find_form}>
      Find contact by Name
      <input
        className={s.find_input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter searching name"
      />
    </label>
  );
};

export default Filter;
