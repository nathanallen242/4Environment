import React from 'react';

const PovertyFilter = ({ selectedPovertyRange, handlePovertyRangeSelection }) => {
    const ranges = ['All', '0-25', '25-50', '50-75', '75-100'];
  
    const handleChange = (range) => {
      if (range === 'All') {
        const updatedRanges = Object.keys(selectedPovertyRange).reduce((acc, key) => {
          acc[key] = key === 'All'; // Set 'All' to true, others to false
          return acc;
        }, {});
        handlePovertyRangeSelection(updatedRanges);
      } else {
        handlePovertyRangeSelection({
          ...Object.keys(selectedPovertyRange).reduce((acc, key) => {
            if (key === 'All') acc[key] = false; // Uncheck 'All' if any other range is selected
            else acc[key] = selectedPovertyRange[key];
            return acc;
          }, {}),
          [range]: !selectedPovertyRange[range]
        });
      }
    };
  
    return (
      <div>
        <h3>Filter by Poverty Rate (%)</h3>
        {ranges.map((range) => (
          <div key={range}>
            <input
              type="checkbox"
              id={range}
              checked={selectedPovertyRange[range]}
              onChange={() => handleChange(range)}
            />
            <label htmlFor={range}>{range}</label>
          </div>
        ))}
      </div>
    );
  };
  
export default PovertyFilter;
