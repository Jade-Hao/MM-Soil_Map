import { useState } from 'react';
import { soilInfo } from '../lib/soilInfo';

const SOIL_TYPES = Object.keys(soilInfo);

export default function Sidebar({ onFilterChange }) {
  const [selected, setSelected] = useState('');

  function handleChange(e) {
    setSelected(e.target.value);
    if (onFilterChange) onFilterChange(e.target.value);
  }

  return (
    <div id="sidebar">
      <h2>Hawai'i Soil Series Map</h2>
      <label htmlFor="soil-type">Filter by Soil Type:</label>
      <select id="soil-type" value={selected} onChange={handleChange}>
        <option value="">All</option>
        {SOIL_TYPES.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      {selected && soilInfo[selected] && (
        <div style={{ marginTop: 20 }}>
          <h3>{selected}</h3>
          <p><strong>Controller:</strong> {soilInfo[selected].controller}</p>
          <p><strong>Information:</strong> {soilInfo[selected].information}</p>
          <p><strong>Moolelo:</strong> {soilInfo[selected].moolelo}</p>
        </div>
      )}
    </div>
  );
}
