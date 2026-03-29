"use client";

import dynamic from "next/dynamic";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "leaflet/dist/leaflet.css";
import { markerIcon } from "../constants/information.contant";
import type { ReactNode } from "react";

// ---------- Types ----------
interface Position {
  coordinates: [number, number];
}

// ---------- Dynamic Leaflet Imports ----------
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

// ---------- Zoom Controls ----------
const ZoomControls = dynamic(
  async () => {
    const { useMap } = await import("react-leaflet");

    function ZoomControlsInner() {
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

    return ZoomControlsInner;
  },
  { ssr: false }
);

// ---------- Component ----------
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