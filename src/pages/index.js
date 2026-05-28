// import dynamic from 'next/dynamic';
// import Sidebar from '../components/Sidebar';

// const SoilMap = dynamic(() => import('../components/SoilMap'), { ssr: false });

// export default function Home() {
//   return (
//     <div>
//       <Sidebar />
//       <SoilMap />
//     </div>
//   );
// }

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

//import Leaflet map 
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), { ssr: false });

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/geojson/oahu_soil_combined.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={[21.3, -157.8]} zoom={10} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data && <GeoJSON data={data} />}
      </MapContainer>
    </div>
  );
}
