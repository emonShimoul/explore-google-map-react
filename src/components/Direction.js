import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const location = {
    lat: 22.845640,
    lng: 89.540329
};

const Direction = () => {
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
                        destination: this.state.destination,
                        origin: this.state.origin,
                        travelMode: this.state.travelMode
                    }}
                    // required
                    callback={this.directionsCallback}
                    />

                {
                this.state.response !== null && (
                    <DirectionsRenderer
                    // required
                    options={{ 
                        directions: this.state.response
                    }}
                    // optional
                    onLoad={directionsRenderer => {
                        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                    }}
                    // optional
                    onUnmount={directionsRenderer => {
                        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
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