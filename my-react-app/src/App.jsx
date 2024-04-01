import { useState } from 'react'
import Map from 'react-map-gl';
import './App.css'

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function App() {
  return (
    <Map
      mapboxAccessToken={mapboxAccessToken}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App
