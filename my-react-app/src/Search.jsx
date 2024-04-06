
const SearchBox = ({ searchTerm ,setSearchTerm, county, setCounty }) => {

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setSearchTerm(event.target.value);
    }
  }

  const handleChange = (event) => {
    if (event.target.value === "") {
      setSearchTerm(event.target.value);
    }
  }

  const handleChangeCounty = (event) => {
    setCounty(event.target.value); // Always update the county with the selected option
  }



  const floridaCounties = [
    'All',
    'Alachua', 'Baker', 'Bay', 'Bradford', 'Brevard',
    'Broward', 'Calhoun', 'Charlotte', 'Citrus', 'Clay',
    'Collier', 'Columbia', 'DeSoto', 'Dixie', 'Duval',
    'Escambia', 'Flagler', 'Franklin', 'Gadsden', 'Gilchrist',
    'Glades', 'Gulf', 'Hamilton', 'Hardee', 'Hendry',
    'Hernando', 'Highlands', 'Hillsborough', 'Holmes', 'Indian River',
    'Jackson', 'Jefferson', 'Lafayette', 'Lake', 'Lee',
    'Leon', 'Levy', 'Liberty', 'Madison', 'Manatee',
    'Marion', 'Martin', 'Miami-Dade', 'Monroe', 'Nassau',
    'Okaloosa', 'Okeechobee', 'Orange', 'Osceola', 'Palm Beach',
    'Pasco', 'Pinellas', 'Polk', 'Putnam', 'St. Johns',
    'St. Lucie', 'Santa Rosa', 'Sarasota', 'Seminole', 'Sumter',
    'Suwannee', 'Taylor', 'Union', 'Volusia', 'Wakulla',
    'Walton', 'Washington',
  ];
   // Style objects
   const containerStyle = {
    display: 'flex',
    alignItems: 'center', // This ensures vertical alignment is centered among child elements.

  };

  const searchBarStyle = {
    width: '160px',
    padding: '10px',
    backgroundColor: 'whitesmoke',
    color: 'black',
    marginBottom: '0px', // Keep or adjust as needed for your layout.
    borderWidth: '1px',
    outline: 'none',
    borderColor: '#ccc', // Matching with dropdown border color for consistency.
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '15px',
    fontFamily: '"American Typewriter", sans-serif',
  };
  
  const countyDropdownStyle = {
    padding: '10px',
    border: '1px solid #ccc', // Ensuring consistency in border width and color.
    borderRadius: '10px',
    backgroundColor: 'whitesmoke', // Uniform background color.
    cursor: 'pointer',
    fontSize: '15px',
    fontFamily: '"American Typewriter", sans-serif',
    color: '#333',
    marginLeft: '10px', // Space between dropdown and button, if they're side by side.
  };
  
  
  return (
    <div style={containerStyle}>

        <input
            style={searchBarStyle}
            placeholder="Search"
            inputMode="text"
            onChange={handleChange}
            onKeyDown={handleEnter}
        />
        <select style={countyDropdownStyle} onChange={handleChangeCounty} value={county}>
        <option value="">Select a county</option>
        {floridaCounties.map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
    </div>
  );


   
  
};

export default SearchBox;