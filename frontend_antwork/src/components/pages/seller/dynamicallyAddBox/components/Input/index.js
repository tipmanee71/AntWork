import React, { Component }  from 'react';

const Input = ({ handleChange, placeholder, value }) => (
  <textarea
    className="uk-input"
    placeholder={placeholder}
    value={value}
    type="text"
    onChange={handleChange}
    rows="5"
  />
);

export default Input;
