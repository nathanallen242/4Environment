import React, { useState } from 'react';
import Map from './Map';
import SearchBox from './Search';
import Dropdown from './Dropdown';
import icon from './assets/icon.png';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [county, setCounty] = useState('All')
  const [selectedYear, setSelectedYear] = useState('2019');

  return (
    <div className='mapbox'>
      <div className='navbar'>
        <a href="/about">
          <img 
            src={icon} 
            style={{ width: '40px', height: '40px' }} 
            className='icon'
            alt="About Page"
          />
        </a>
        <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm} county={county} setCounty={setCounty}/>
        <Dropdown setSelectedYear={setSelectedYear} />
      </div>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -81.7602544,
          latitude: 27.9944024,
          zoom: 6
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        county={county}
        setCounty={setCounty}
        selectedYear={selectedYear}
    />
    </div>
  );
}

export default App;
