import { Popup } from 'react-leaflet';
import { soilInfo } from '../lib/soilInfo';

export default function SoilPopup({ info, onClose }) {
  const { latlng, properties } = info;
  const soilType = properties.order;
  const infoData = soilInfo[soilType] || {};

  return (
    <Popup position={latlng} onClose={onClose}>
      <div>
        <h4>{soilType}</h4>
        <p><strong>Controller:</strong> {infoData.controller || 'N/A'}</p>
        <p><strong>Information:</strong> {infoData.information || 'N/A'}</p>
        <p><strong>Moolelo:</strong> {infoData.moolelo || 'N/A'}</p>
      </div>
    </Popup>
  );
}
