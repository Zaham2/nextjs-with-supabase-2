'use client';


// let zoomLevelForAllMarkers = 20

// 1. count all markers for today
// 2. start at initial zoom (20)
// 3. check if all markers are visible  ---> ezai?
// 4. if not, zoom out by 1
// 5. repeat until all markers are visible or zoom level is 0

import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Library } from '@googlemaps/js-api-loader';
import { MapProps, Places } from '@/helpers/classes';
import { fromTStoTS, getAverageLatLong, splitLatLong } from '@/helpers/functions';

const libraries: Library[] = ['places'];

export const Map = ({ apiKey, initialCenter, defaultZoomLevel, places }: MapProps) => {

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = React.useState<Places | null>(null);

  const handleLoad = (mapInstance: any) => {
    setMap(mapInstance);
  };

  const markers = places.map((place) => (
    <Marker key={place.id} position={splitLatLong(place.lat_long!)}
      onMouseOver={() => { setSelectedMarker(place) }}
    />))

  return (
    <LoadScript
      googleMapsApiKey={apiKey!}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '80vh' }}
        zoom={defaultZoomLevel}
        center={getAverageLatLong(places)}
        onLoad={handleLoad}
      >
        <div>

          {map && markers}
          {selectedMarker && (
            <InfoWindow
              position={splitLatLong(selectedMarker.lat_long!)}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div className=' '>
                <h3>{fromTStoTS(new Date(selectedMarker.start_ts!), new Date(selectedMarker.end_ts!))}</h3>
                <p>{selectedMarker.activity_duration_formatted}</p>
              </div>
            </InfoWindow>
          )}
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
