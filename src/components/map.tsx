"use client";

import { RefAttributes, useEffect, useMemo, useRef } from "react";
import {
  Circle,
  MapContainer,
  MapContainerProps,
  TileLayer,
  useMap,
} from "react-leaflet";
import { LatLngExpression, Map as TMap } from "leaflet";
import { cn } from "@/lib/utils";

type TView = {
  center: LatLngExpression;
  zoom: number;
};

type MapControllerProps = {
  isHovered: boolean;
  jakartaView: TView;
  indonesiaView: TView;
};

const MapController = ({
  isHovered,
  jakartaView,
  indonesiaView,
}: MapControllerProps) => {
  const map = useMap();

  useEffect(() => {
    if (isHovered) {
      map.flyTo(jakartaView.center, jakartaView.zoom, { duration: 1 });
    } else {
      map.flyTo(indonesiaView.center, indonesiaView.zoom, { duration: 1 });
    }
  }, [indonesiaView, isHovered, jakartaView, map]);

  return null;
};

export const Map = ({
  isZoomed = false,
  className,
  ...props
}: { isZoomed?: boolean } & MapContainerProps & RefAttributes<TMap>) => {
  const mapRef = useRef(null);

  const indonesiaView: TView = useMemo(
    () => ({
      center: [-2.5489, 118.0149],
      zoom: 2,
    }),
    [],
  );

  const jakartaView: TView = useMemo(
    () => ({
      center: [-6.2088, 106.8456],
      zoom: 8,
    }),
    [],
  );

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
      className={cn("bg-#d4dadc pointer-events-none size-full", className)}
      {...props}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
      <Circle
        center={jakartaView.center}
        radius={200000}
        pathOptions={{
          color: "#fb2c36",
          weight: 1,
          fill: false,
          opacity: isZoomed ? 0 : 1,
        }}
      />

      <MapController
        isHovered={isZoomed}
        jakartaView={jakartaView}
        indonesiaView={indonesiaView}
      />
    </MapContainer>
  );
};
