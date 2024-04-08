import React, { useState, useEffect } from 'react';

const Dropdown = ({ setGeojsonData }) => {
  const [selectedYear, setSelectedYear] = useState('2019');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://nathanallen242.github.io/4Environment/data-collection/data/json/data_${selectedYear}.geojson`);
        const data = await response.json();
        setGeojsonData(data);
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchData();
  }, [selectedYear, setGeojsonData]);

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
    <select style={dropdownStyle} value={selectedYear} onChange={handleYearChange}>
      <option value="2010">2010</option>
      <option value="2015">2015</option>
      <option value="2019">2019</option>
    </select>
  );
};

export default Dropdown;