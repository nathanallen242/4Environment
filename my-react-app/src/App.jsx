import { useState } from 'react'
import Map from 'react-map-gl';
import './App.css'
import icon from './assets/react.svg'

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function App() {
  return (
    <div className='mapbox'>
      <div className='navbar'>
        {/* <img src={icon} style="width: 40px; height: 40px;"></img> */}
        4Environment
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
