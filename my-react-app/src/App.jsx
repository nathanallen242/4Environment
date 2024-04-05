import React, { useState, useEffect } from 'react';
import Map from './Map';
import SearchBox from './Search';
import icon from './assets/icon.png';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='mapbox'>
      <div className='navbar'>
        <img src={icon} style={{ width: '40px', height: '40px' }}></img>
        <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
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
    />
    </div>
  );
}

export default App;
