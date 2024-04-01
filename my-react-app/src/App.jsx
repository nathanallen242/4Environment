import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import './App.css';
import icon from './assets/react.svg';

function App() {
  const [viewport, setViewport] = useState({
    longitude: -81.7602544,
    latitude: 27.9944024,
    zoom: 6
  });
  const [coordinates, setCoordinates] = useState({ longitude: -81.7602544, latitude: 27.9944024 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  return (
    <div className='mapbox'>
      <div className='navbar'>
        {/* <img src={icon} style="width: 40px; height: 40px;"></img> */}
        4Environment
      </div>
      <Map
        mapboxAccessToken={mapboxAccessToken}
        {...viewport}
        onMove={evt => {
          setViewport(evt.viewState);
          setCoordinates({ longitude: evt.viewState.longitude.toFixed(4), latitude: evt.viewState.latitude.toFixed(4) });
        }}
        maxBounds={[
          [-87.6333, 24.5], // Southwest coordinates
          [-79.8, 31] // Northeast coordinates
        ]}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      >
      </Map>
      <div style={{ position: 'absolute', top: 0, left: 0, margin: '10px', padding: '5px'}}>
          {`Lon: ${coordinates.longitude}, Lat: ${coordinates.latitude}`}
        </div>
    </div>
  );
}

export default App;
