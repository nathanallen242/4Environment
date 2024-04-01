import { useState } from 'react'
import Map from 'react-map-gl';
import './App.css'

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function App() {
  return (
    <div className='mapbox'>
      <div className='navbar'>

      </div>
      <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={{
        longitude: -81.7602544,
        latitude: 27.9944024,
        zoom: 6
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    />
    </div>
  );
}

export default App
