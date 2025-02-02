"use client";

import { RefAttributes, useEffect, useRef } from "react";
import {
  Circle,
  MapContainer,
  MapContainerProps,
  TileLayer,
  useMap,
} from "react-leaflet";
import { LatLngExpression, Map as TMap } from "leaflet";
import { cn } from "@/lib/utils";

const jakartaCoords: LatLngExpression = [-6.2088, 106.8456];

const indonesiaView = {
  center: [-2.5489, 118.0149] as LatLngExpression,
  zoom: 2,
};

const jakartaView = {
  center: jakartaCoords,
  zoom: 8,
};

const circleStyle = { color: "#fb2c36", weight: 1, opacity: 1, fill: false };

const MapController = ({ isHovered }: { isHovered: boolean }) => {
  const map = useMap();

  useEffect(() => {
    if (isHovered) {
      map.flyTo(jakartaView.center, jakartaView.zoom, { duration: 1 });
    } else {
      map.flyTo(indonesiaView.center, indonesiaView.zoom, { duration: 1 });
    }
  }, [isHovered, map]);

  return null;
};

export const Map = ({
  isZoomed = false,
  className,
  ...props
}: { isZoomed?: boolean } & MapContainerProps & RefAttributes<TMap>) => {
  const mapRef = useRef(null);

  return (
    <MapContainer
      ref={mapRef}
      center={indonesiaView.center}
      zoom={indonesiaView.zoom}
      scrollWheelZoom={false}
      zoomControl={false}
      doubleClickZoom={false}
      dragging={false}
      attributionControl={false}
      className={cn("pointer-events-none size-full bg-#d4dadc", className)}
      {...props}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" // simple
        // url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg" // watercolor
        // url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" // black
      />
      <Circle
        center={jakartaCoords}
        radius={250000}
        pathOptions={{ ...circleStyle, opacity: isZoomed ? 0 : 1 }}
      />

      <MapController isHovered={isZoomed} />
    </MapContainer>
  );
};
