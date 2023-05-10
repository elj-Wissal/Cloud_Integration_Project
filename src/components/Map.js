import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map() {
  // Create a ref to hold the map container element
  const mapContainer = useRef(null);
  // Create a ref to hold the map instance
  const map = useRef(null);
  // Define the initial longitude and latitude using state
  const [lng] = useState(-6.8498); // Rabat's longitude
  const [lat] = useState(34.0209); // Rabat's latitude
  // Define the initial zoom level using state
  const [zoom] = useState(14);
  // Define the API key using state
  const [API_KEY] = useState('cfSuClVzw0c2WTVJ4oql');

  // Initialize the map when component is mounted
  useEffect(() => {
    // If map already exists, return early
    if (map.current) return;
    // Create a new map instance and store it in the map ref
    map.current = new maplibregl.Map({
      container: mapContainer.current, // Set the map container element
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`, // Set the map style with API key
      center: [lng, lat], // Set the initial center of the map
      zoom: zoom // Set the initial zoom level of the map
    });
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
