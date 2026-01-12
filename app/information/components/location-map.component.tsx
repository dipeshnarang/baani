"use client";

import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { markerIcon } from "../constants/information.contant";

// const position: [number, number] = [28.4595, 77.0266]; // Gurugram

interface Position {
  coordinates: [number, number];
}

function ZoomControls() {
  const map = useMap();

  return (
    <Box className="absolute right-4 top-4 z-[1000] flex flex-col gap-2">
      <IconButton
        onClick={() => map.zoomIn()}
        className="bg-white shadow"
        size="small"
      >
        <AddIcon />
      </IconButton>

      <IconButton
        onClick={() => map.zoomOut()}
        className="bg-white shadow"
        size="small"
      >
        <RemoveIcon />
      </IconButton>
    </Box>
  );
}

export default function LocationMap({ coordinates }: Position) {
  return (
    <Box className="relative h-full w-full overflow-hidden rounded-2xl">
      <MapContainer
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={coordinates} icon={markerIcon} />
        <ZoomControls />
      </MapContainer>
    </Box>
  );
}
