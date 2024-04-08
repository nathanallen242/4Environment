import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ mapboxAccessToken, initialViewState, mapStyle, searchTerm, setSearchTerm, county, setCounty }) => {

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [geojsonData, setGeojsonData] = useState(null); // State to hold the original GeoJSON data

  useEffect(() => {
    
    mapboxgl.accessToken = mapboxAccessToken;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle,
      center: [initialViewState.longitude, initialViewState.latitude],
      zoom: initialViewState.zoom,
    });
    
    mapRef.current = map

    map.on('load', () => {
      fetch('https://nathanallen242.github.io/4Environment/data-collection/data/json/data.geojson')
        .then(response => response.json())
        .then(data => {
          setGeojsonData(data)
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
              <p><strong>County:</strong> ${properties.County}, <strong>State:</strong> ${properties.State}</p>
              <p><strong>Census Tract: </strong>  ${properties.CensusTract}</p>
              <p><strong>Population (2010):</strong> ${properties.POP2010}</p>
              <p><strong>Occupied Housing Units:</strong> ${properties.OHU2010}</p>
              <p><strong>Poverty Rate:</strong> ${properties.PovertyRate}%</p>
              <p><strong>Median Family Income:</strong> $${properties.MedianFamilyIncome}</p>
              <p><strong>Low-Income Tracts:</strong> ${properties.LowIncomeTracts ? 'Yes' : 'No'}</p>
              <p><strong>Food Desert Status:</strong> ${properties.LILATracts_1And10 ? '1 mile urban/10 miles rural' : (properties.LILATracts_halfAnd10 ? '1/2 mile urban/10 miles rural' : 'N/A')}</p>
              <p><strong>SNAP Benefits Housing Units:</strong> ${properties.TractSNAP}</p>
              <hr>
      <p><strong>Demographics:</strong></p>
      <p><strong>White:</strong> ${properties.TractWhite} (${((properties.TractWhite / properties.POP2010) * 100).toFixed(2)}%)</p>
      <p><strong>Black or African American:</strong> ${properties.TractBlack} (${((properties.TractBlack / properties.POP2010) * 100).toFixed(2)}%)</p>
      <p><strong>Hispanic or Latino:</strong> ${properties.TractHispanic} (${((properties.TractHispanic / properties.POP2010) * 100).toFixed(2)}%)</p>
      <p><strong>Asian:</strong> ${properties.TractAsian} (${((properties.TractAsian / properties.POP2010) * 100).toFixed(2)}%)</p>
      <p><strong>Other Races:</strong> ${properties.TractOMultir} (${((properties.TractOMultir / properties.POP2010) * 100).toFixed(2)}%)</p>
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


  useEffect(() => {
    // This checks if geojsonData is loaded and if a county is selected, or "default" is chosen
    if (geojsonData && county && mapRef.current) {
      let filteredData;
      if (county === "All") {
        // If "default" is selected, use the original geojsonData without filtering
        filteredData = geojsonData;
      } else {
        // Otherwise, filter the geojsonData for the selected county
        filteredData = {
          ...geojsonData,
          features: geojsonData.features.filter(feature => feature.properties.County === county),
        };
      }
      updateMapData(filteredData);
    }
  }, [county, geojsonData]);

  const updateMapData = (data) => {
    if (mapRef.current.getSource('polygonData')) {
      mapRef.current.getSource('polygonData').setData(data);
    } else if (mapRef.current.isStyleLoaded()) { // Ensure the map style is loaded before adding source and layers
      mapRef.current.addSource('polygonData', {
        type: 'geojson',
        data: data,
      });
      // Add layers here
    }
  };
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
