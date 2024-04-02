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
      zoom: initialViewState.zoom,
    });

    if (polygonData) {
      map.on('load', () => {
        // Assuming 'geoJsonData' is a valid GeoJSON object
        map.addSource('polygonData', {
          type: 'geojson',
          data: polygonData,
        });

        map.addLayer({
          id: 'geojsonLayer',
          type: 'fill',
          source: 'polygonData',
          layout: {},
          paint: {
            'fill-color': '#888888', // Example fill color
            'fill-opacity': 0.5, // Example fill opacity
          },
        });
      });
    }

    return () => map.remove();
  }, [mapboxAccessToken, initialViewState, mapStyle, polygonData]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
