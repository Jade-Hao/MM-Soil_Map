import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Pane } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SoilPopup from './SoilPopup';

const ISLANDS = [
  'lanai', 'oahu', 'molokai', 'maui', 'kauai', 'hawaii', 'kahoolawe'
];

export default function SoilMap() {
  const [geojsonData, setGeojsonData] = useState({});
  const [selectedSoilType, setSelectedSoilType] = useState(null);
  const [filter, setFilter] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    async function fetchGeojson() {
      const data = {};
      for (const island of ISLANDS) {
        const response = await fetch(`/geojson/${island}_soil_combined.json`);
        if (response.ok) {
          data[island] = await response.json();
        }
      }
      setGeojsonData(data);
    }
    fetchGeojson();
  }, []);

  // Filtering logic
  function onEachFeature(feature, layer) {
    if (!feature.properties) return;
    const soilType = feature.properties.order;
    if (!filter || filter === soilType) {
      layer.on({
        click: () => setPopupInfo({
          latlng: layer.getBounds().getCenter(),
          properties: feature.properties
        })
      });
    } else {
      layer.remove();
    }
  }

  return (
    <div id="map">
      <MapContainer center={[20.8247, -156.919409]} zoom={8} style={{ height: '100vh', width: '70vw' }}>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        <Pane name="ahupuaaPane" style={{ zIndex: 500 }} />
        <Pane name="seriesPane" style={{ zIndex: 450 }} />
        {Object.entries(geojsonData).map(([island, data]) => (
          <GeoJSON
            key={island}
            data={data}
            onEachFeature={onEachFeature}
            pane="seriesPane"
            style={feature => ({
              color: '#3388ff',
              weight: 1,
              fillOpacity: 0.5,
              fillColor: filter && feature.properties.order !== filter ? '#ccc' : '#3388ff'
            })}
          />
        ))}
        {popupInfo && (
          <SoilPopup info={popupInfo} onClose={() => setPopupInfo(null)} />
        )}
      </MapContainer>
    </div>
  );
}
