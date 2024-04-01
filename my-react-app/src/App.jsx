import { useState } from 'react'
import Map from 'react-map-gl';
import './App.css'

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function App() {
  return (
    <div className='mapbox'>
      <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={{
        longitude: -81.7602544,
        latitude: 27.9944024,
        zoom: 6
      }}
      style={{ width: '100vw', height: 'calc(100vh - 50px)' }} // Example with 20px subtracted from the height for any top UI elements
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    />
    </div>
  );
}

export default App
