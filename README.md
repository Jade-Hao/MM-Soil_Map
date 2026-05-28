# SoilMap-MM

A public, interactive soil series map of Hawai'i built with Next.js and Leaflet. All data is stored locally for fast, reliable access.

## Features
- Interactive Leaflet map with ESRI satellite imagery
- Soil polygons for all major Hawaiian islands
- Filtering and info popups by soil type
- No authentication required

## Getting Started
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Visit [http://localhost:3000](http://localhost:3000)

## Directory Structure
- `public/geojson/`: GeoJSON files for each island
- `src/components/`: React components (map, sidebar, popups)
- `src/lib/`: Soil info and utility functions

## License
MIT
