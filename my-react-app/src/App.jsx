import React, { useState } from 'react';
import Map from './Map';
import SearchBox from './Search';
import icon from './assets/icon.png';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [county, setCounty] = useState('Default'); // Default to Broward
  const [dataSourceUrl, setDataSourceUrl] = useState(`${API_URL}/parse`);

  // This function is called when the county is changed in the dropdown
  const handleCountyChange = (e) => {
    setCounty(e.target.value);
    setDataSourceUrl(`${API_URL}/parse?county=${e.target.value}`);
  };

  return (
    <div className='mapbox'>
      <div className='navbar'>
        <img src={icon} style={{ width: '40px', height: '40px' }} alt="Icon"/>
        <SearchBox/>
        {/* Dropdown for selecting a county */}
        <div style={{ backgroundColor: 'transparent', color: 'black', paddingLeft: 20 }}>
          <select id="county-select" onChange={handleCountyChange} value={county}>
            {/* Add options for all Florida counties */}
            <option value="default">Default</option>
            <option value="Broward">Broward</option>
            <option value="Miami-Dade">Miami-Dade</option>
            <option value="Palm Beach">Palm Beach</option>
            {/* Add more counties as needed */}
          </select>
        </div>
      </div>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -81.7602544,
          latitude: 27.9944024,
          zoom: 6
        }}
        dataSourceUrl={dataSourceUrl}
      />
    </div>
  );
}

export default App;
