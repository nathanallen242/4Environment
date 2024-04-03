import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ mapboxAccessToken, initialViewState, mapStyle, searchTerm, setSearchTerm }) => {

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    
    mapboxgl.accessToken = mapboxAccessToken;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [initialViewState.longitude, initialViewState.latitude],
      zoom: initialViewState.zoom,
    });
    
    mapRef.current = map

    // if (searchTerm) {
    //   mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN
    //   fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json?access_token=${mapboxAccessToken}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       const [longitude, latitude] = data.features[0].center;

    //       map.flyTo({
    //         center: [longitude, latitude],
    //         essential: true, 
    //         zoom: 10,
    //       });

    //     })
    //     .catch(error => console.error('Error geocoding location: ', error));
    // }

    map.on('load', () => {
      fetch('https://nathanallen242.github.io/4Environment/data-collection/data/json/data.geojson')
        .then(response => response.json())
        .then(data => {
          map.addSource('polygonData', {
            type: 'geojson',
            data: data,
          });

          // Layer for the fill color
          map.addLayer(
            {
            id: 'geojsonFill',
            type: 'fill',
            source: 'polygonData',
            layout: {},
            paint: {
              'fill-color': [
                'case',
                ['==', ['get', 'LA1and10'], 0], '#32CD32', 
                ['==', ['get', 'LA1and10'], 1], '#FF5733',
                '#000000'
              ],
              'fill-opacity': 0.2,
            }            
          });

          // Layer for the boundary lines
          map.addLayer({
            id: 'geojsonLine',
            type: 'line',
            source: 'polygonData',
            layout: {},
            paint: {
              'line-color': '#000000', // Red color for lines
              'line-width': 0.1,
            },
          });

          // Adding interactivity for displaying properties
          map.on('click', 'geojsonFill', (e) => {
            const properties = e.features[0].properties; // Assuming properties exist
            const coordinates = e.lngLat; // Get coordinates for the popup from the click event
          
            // Ensure the popup is positioned at the click coordinates
            new mapboxgl.Popup()
              .setLngLat([coordinates.lng, coordinates.lat]) // Set the popup at the click location
              .setHTML(`<div style="max-width: 180px; word-wrap: break-word; color: black; text-align: left;">
              <p><strong>County Name:</strong> ${properties.County}</p>
              <p><strong>Low Income:</strong> ${properties.LowIncomeTracts ? 'Yes' : 'No'}</p>
              <p><strong>Poverty Rate:</strong> ${properties.PovertyRate}%</p>
              <p><strong>Median Family Income:</strong> $${properties.MedianFamilyIncome}</p>
            </div>`)
                .addTo(map);
          });          
        })
        .catch(error => console.error('Error loading the GeoJSON data: ', error));
    });

    return () => map.remove();
  }, []);

  const flyToLocation = (longitude, latitude) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [longitude, latitude],
        essential: true,
        zoom: 13,
      });
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json?access_token=${mapboxAccessToken}`)
        .then(response => response.json())
        .then(data => {
          const [longitude, latitude] = data.features[0].center;
          flyToLocation(longitude, latitude);
        })
        .catch(error => alert('This location does not exist'));
    }
  }, [searchTerm, mapboxAccessToken]);

return (
    <>
      <style>
        {`
          .mapboxgl-popup-close-button {
            color: #000; /* Custom color for the close button */
          }
        `}
      </style>
      <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
    </>
  );};

export default Map;
