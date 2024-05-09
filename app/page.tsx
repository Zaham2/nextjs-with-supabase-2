import DatePicker from "@/components/DatePicker";
import Map from "@/components/Map";
import MapContainer from "@/components/MapContainer";
import GlobalContext from "@/contexts/GlobalContext";
import { Places } from "@/helpers/classes";
import { getAverageLatLong } from "@/helpers/functions";
import React from "react";

export default async function Index() {

  const allPlaces: Places[] = await fetch(`${process.env.NEXT_BASE_URL}/users`, {  //TODO: Rename this route
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  return (
    <div>
      <MapContainer apiKey={process.env.MAPS_API_KEY!} defaultZoomLevel={10} places={allPlaces} />
    </div>
  );
}
