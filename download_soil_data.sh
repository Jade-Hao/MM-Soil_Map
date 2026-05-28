#!/bin/bash

# Create geojson directory if it doesn't exist
mkdir -p public/geojson

echo "Downloading soil data files..."

curl -o public/geojson/lanai_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/lanai_soil_combined.json
curl -o public/geojson/oahu_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/oahu_soil_combined.json
curl -o public/geojson/molokai_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/molokai_soil_combined.json
curl -o public/geojson/maui_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/maui_soil_combined.json
curl -o public/geojson/kauai_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/kauai_soil_combined.json
curl -o public/geojson/hawaii_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/hawaii_soil_combined.json
curl -o public/geojson/kahoolawe_soil_combined.json https://lepolad.github.io/interactive-soil-map/poly_files/kahoolawe_soil_combined.json

echo "Download complete!"
