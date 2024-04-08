import React from 'react';

const Dropdown = ({ setSelectedYear }) => {

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const dropdownStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'whitesmoke',
    cursor: 'pointer',
    fontSize: '15px',
    fontFamily: '"American Typewriter", sans-serif',
    color: '#333',
  };

  return (
    <select style={dropdownStyle} onChange={handleYearChange}>
      <option value="2010">2010</option>
      <option value="2015">2015</option>
      <option value="2019">2019</option>
    </select>
  );
};

export default Dropdown;
