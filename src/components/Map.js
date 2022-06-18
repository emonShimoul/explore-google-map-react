import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 22.845640,
    lng: 89.540329
  };

const Map = () => {
    return (
        <LoadScript
            // put the api key in .env.local file.
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        >
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;