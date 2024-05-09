"use client";

import React, { useContext, useEffect } from 'react'
// import Map from './Map'
// import Marker from './Marker'
import { MapContainerProps, Places as Place } from '@/helpers/classes'
import { Map } from './Map'
import DatePicker from './DatePicker';
import GlobalContext from '@/contexts/GlobalContext';
import { getAverageLatLong } from '@/helpers/functions';


const MapContainer = ({ apiKey, defaultZoomLevel, places }: MapContainerProps) => {

  const { day } = useContext(GlobalContext)

  const filteredPlaces = places.filter((place: Place) => {
    const endTsDate = new Date(place.end_ts!)
    const eventDate = new Date(day)

    if 
    (
    endTsDate.getFullYear() === eventDate.getFullYear() && 
    endTsDate.getMonth() === eventDate.getMonth() && 
    endTsDate.getDate() === eventDate.getDate())
    {
      return place
    }
  })

  const center = getAverageLatLong(filteredPlaces)

  return (
    <div className='flex flex-col'>
      <div 
      className=" bg-slate-400"
      >
        <DatePicker />
      </div>
      <Map apiKey={apiKey} initialCenter={center} defaultZoomLevel={defaultZoomLevel} places={filteredPlaces} />
    </div>
  )
}

export default MapContainer
