import DatePicker from "@/components/DatePicker";
import Map from "@/components/Map";
import MapContainer from "@/components/MapContainer";
import GlobalContext from "@/contexts/GlobalContext";
import { Places } from "@/helpers/classes";
import { getAverageLatLong } from "@/helpers/functions";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function Index() {

  const supabase = createClient();
  const allPlaces = (await supabase
    .from('Places')
    .select('*'))
    .data as Places[];

  return (
    <div>
      <MapContainer apiKey={process.env.MAPS_API_KEY!} defaultZoomLevel={10} places={allPlaces} />
    </div>
  );
}
