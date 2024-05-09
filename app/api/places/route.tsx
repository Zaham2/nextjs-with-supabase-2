// import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest, res: NextResponse) {
    const { lat, lng } = { lat: 40.748817, lng: -73.985428 }
    
    
const url = 'https://api.foursquare.com/v3/places/nearby';

const data = fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${process.env.FOURSQUARE_AUTH_TOKEN}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));


//     const response = await fetch(`https://api.foursquare.com/v2/venues/explore?ll=${lat},${lng}&v=20211209`, {
//         headers: {
//     }
//   });
//   const data = await response.json();

  return NextResponse.json(data);
}



