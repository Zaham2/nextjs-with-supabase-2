import { GoogleMap } from "@react-google-maps/api";
import { Places, Point } from "./classes";

// export function extractTimeFromTimestamp(timestamp: any): string {
//     console.log(typeof timestamp)
//     return timestamp;
// }


// export function extractTimeInHoursFromTimestamp(timestamp: any): string {
//     console.log(typeof timestamp)
//     return timestamp;
// }

export function extractDateFromTimestamp(timestamp: any): string { 
    return timestamp;
}


export function fromTStoTS(startTS: Date , endTS: Date): string {
    return startTS.getHours() + ':' + startTS.getMinutes() + ' - ' + endTS.getHours() + ':' + endTS.getMinutes();
}

export function getAverageLatLong(places: Places[]): Point {

    if(places.length === 0) return { lat: 0, lng: 0 }

    const numberOfPlaces = places.length;
    let totalLat: number = 0
    let totalLong: number = 0
    places.map((place) => {
        const { lat, lng } = splitLatLong(place.lat_long!)
        totalLat += Number(lat)
        totalLong += Number(lng)
    })

    return { 
        lat: totalLat / numberOfPlaces, 
        lng: totalLong / numberOfPlaces 
    }
}

export function splitLatLong (latLong: string) {
    const [lat, lng] = latLong.trim().split(',')
    return { lat: parseFloat(lat), lng: parseFloat(lng) }
  }
