import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Sidebar from './SideBar';

const Map = ({ mapboxAccessToken, initialViewState, mapStyle, searchTerm, setSearchTerm, county, setCounty, selectedYear }) => {

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [geojsonData, setGeojsonData] = useState(null); // State to hold the original GeoJSON data
  const [selectedFeature, setSelectedFeature] = useState(null); // Step 2: State for selected feature data

  console.log(selectedYear)

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
      fetch(`https://nathanallen242.github.io/4Environment/data-collection/data/json/fl_${selectedYear}.geojson`)
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
       // Inside your useEffect where the map is initialized and event listeners are set
        map.on('click', 'geojsonFill', (e) => {
          const properties = e.features[0].properties;
          const coordinates = e.lngLat;

          const popup = new mapboxgl.Popup()
            .setLngLat([coordinates.lng, coordinates.lat])
            .setHTML(`<div style="max-width: 180px; word-wrap: break-word; color: black; text-align: left;">
              <p><strong>County:</strong> ${properties.County}, <strong>State:</strong> ${properties.State}</p>
              <p><strong>Census Tract: </strong> ${properties.CensusTract}</p>
              <p><strong>Poverty Rate:</strong> ${properties.PovertyRate}%</p>
              <p><strong>Food Desert Status:</strong> ${properties.LILATracts_1And10 ? '1 mile urban/10 miles rural' : (properties.LILATracts_halfAnd10 ? '1/2 mile urban/10 miles rural' : 'N/A')}</p>
            </div>`)
            .addTo(map);

          setSelectedFeature(properties);

          // Listen for the popup close event
          popup.on('close', () => {
            setSelectedFeature(null); // Reset selected feature when popup is closed
          });
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

  useEffect(() => {
    fetch(`https://nathanallen242.github.io/4Environment/data-collection/data/json/fl_${selectedYear}.geojson`)
      .then(response => response.json())
      .then(data => {
        setGeojsonData(data);
        if (mapRef.current.getSource('polygonData')) {
          mapRef.current.getSource('polygonData').setData(data);
        }
      })
      .catch(error => console.error('Error loading the GeoJSON data: ', error));
  }, [selectedYear]); // Dependency on selectedYear to fetch new data


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
      <Sidebar selectedFeature={selectedFeature} />

    </>
  );};

export default Map;
