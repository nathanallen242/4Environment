import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ mapboxAccessToken, initialViewState, mapStyle, polygonData }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken;
    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: mapStyle,
        center: [initialViewState.longitude, initialViewState.latitude],
        zoom: initialViewState.zoom
    });

    map.on('load', () => {
      // Add each set of polygon data to the map
      polygonData.forEach((polygonSet, index) => {
        map.addSource(`polygonSource${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [polygonSet] // Assuming each polygon set is an array of coordinates
            }
          }
        });

        map.addLayer({
          id: `polygonLayer${index}`,
          type: 'fill',
          source: `polygonSource${index}`,
          layout: {},
          paint: {
            'fill-color': '#088',
            'fill-opacity': 0.8
          }
        });
      });
    });

    // Clean up map instance on component unmount
    return () => map.remove();
  }, [mapboxAccessToken, initialViewState, mapStyle, polygonData]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
