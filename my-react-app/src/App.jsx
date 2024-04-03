import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './Map';
import SearchBox from './Search';
import icon from './assets/react.svg';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  // const [apiData, setApiData] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/fetch-docs')
  //     .then(response => {
  //       setApiData(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Failed to fetch API data:", error);
  //     });
  // }, []);

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='mapbox'>
      <div className='navbar'>
        {/* <img src={icon} style="width: 40px; height: 40px;"></img> */}
        4Environment
        <SearchBox/>
      </div>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -81.7602544,
          latitude: 27.9944024,
          zoom: 1
        }}
    />
    </div>
  );
}

export default App;
