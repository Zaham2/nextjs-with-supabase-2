import React from "react";

export class Places {
    id!: number;
    start_ts!: Date | null;
    end_ts!: Date | null;
    item_value!: string | null;
    lat_long!: string | null;
    created_at!: Date | null;
    updated_at!: Date | null;
    user_id!: number | null;
    description!: string | null;
    activity_duration_seconds!: number | null;
    activity_duration_hours!: number | null;
    activity_duration_formatted!: string | null;
    // marker!: google.maps.Marker | null;
}

export interface MapProps {
    initialCenter: { lat: number; lng: number };
    defaultZoomLevel: number;
    apiKey: string;
    places: Places[]
}

export interface Point {
   lat: number;
   lng: number;
}

// I know its the same props :)
export interface MapContainerProps {
    // initialCenter: Point;
    defaultZoomLevel: number;
    apiKey: string;
    places: Places[];
    // children: React.ReactNode;
  }

export interface MarkerProps {
    lat: number;
    lng: number;
    place: Places;
    children: React.ReactNode;
}

export interface BubbleProps {
    place: Places
    // children: React.ReactNode;
}

// export interface Marker {

// }
