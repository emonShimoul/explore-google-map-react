import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const location = {
    lat: 22.845640,
    lng: 89.540329
};

const Direction = ({origin, destination}) => {
    const [response, setResponse] = useState(null);
    const directionsCallback = res => {
        if(res != null){
            setResponse(res);
        }
    }
    return (
        <div>
            <LoadScript
            // put the api key in .env.local file.
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                height: '100vh',
                width: '100%'
                }}
                // required
                zoom={14}
                // required
                center={location}
            >
                    <DirectionsService
                    // required
                    options={{
                        destination: destination,
                        origin: origin,
                        travelMode: 'DRIVING'
                    }}
                    // required
                    callback={directionsCallback}
                    />

                {
                response !== null && (
                    <DirectionsRenderer
                    // required
                    options={{ 
                        directions: this.state.response
                    }}
                    />
                )
                }
            </GoogleMap>
          </LoadScript>
        </div>
    );
};

export default Direction;