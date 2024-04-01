import React, { useState } from 'react';
import Map from './Map';
import './App.css';
import icon from './assets/react.svg';

function App() {

  const miamiPolygonData = [
    [
      [-80.2002, 25.7877], // NW corner
      [-80.1875, 25.7877], // NE corner
      [-80.1875, 25.7735], // SE corner
      [-80.2002, 25.7735], // SW corner
      [-80.2002, 25.7877]  // Back to NW corner to close the polygon
    ],
    [
      [-80.1445, 25.8121], // NW corner
      [-80.1231, 25.8121], // NE corner
      [-80.1231, 25.7914], // SE corner
      [-80.1445, 25.7914], // SW corner
      [-80.1445, 25.8121]  // Back to NW corner to close the polygon
    ],
  ];
  

  return (
    <div className='mapbox'>
      <div className='navbar'>
        {/* <img src={icon} style="width: 40px; height: 40px;"></img> */}
        4Environment
      </div>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -81.7602544,
          latitude: 27.9944024,
          zoom: 6
        }}
        polygonData={miamiPolygonData}
    />
    </div>
  );
}

export default App;
