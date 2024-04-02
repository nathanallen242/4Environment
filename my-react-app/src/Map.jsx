import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ mapboxAccessToken, initialViewState, mapStyle }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = mapboxAccessToken;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [initialViewState.longitude, initialViewState.latitude],
      zoom: initialViewState.zoom,
    });

    map.on('load', () => {
      fetch('https://nathanallen242.github.io/4Environment/data-collection/data/json/data.geojson')
        .then(response => response.json())
        .then(data => {
          map.addSource('polygonData', {
            type: 'geojson',
            data: data,
          });

          // Layer for the fill color
          map.addLayer({
            id: 'geojsonFill',
            type: 'fill',
            source: 'polygonData',
            layout: {},
            paint: {
              'fill-color': '#888888', // Grey fill color
              'fill-opacity': 0.5,
            },
          });

          // Layer for the boundary lines
          map.addLayer({
            id: 'geojsonLine',
            type: 'line',
            source: 'polygonData',
            layout: {},
            paint: {
              'line-color': '#FF0000', // Red color for lines
              'line-width': 2,
            },
          });

          // Adding interactivity for displaying properties
          map.on('click', 'geojsonFill', (e) => {
            const properties = e.features[0].properties; // Assuming properties exist
            const coordinates = e.lngLat; // Get coordinates for the popup from the click event
          
            // Ensure the popup is positioned at the click coordinates
            new mapboxgl.Popup()
              .setLngLat([coordinates.lng, coordinates.lat]) // Set the popup at the click location
              .setHTML(`<p>Details: ${JSON.stringify(properties)}</p>`) // Customize based on what you want to show
              .addTo(map);
          });          
        })
        .catch(error => console.error('Error loading the GeoJSON data: ', error));
    });

    return () => map.remove();
  }, [mapboxAccessToken, initialViewState, mapStyle]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
