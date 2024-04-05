const SearchBox = ({ searchTerm ,setSearchTerm }) => {

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



  return (
    <div className="search-container">
        <input
            className="search-bar"
            placeholder="Search"
            inputMode="text"
            onChange={handleChange}
            onKeyDown={handleEnter}
        />
    </div>
  );
};

export default SearchBox;