"use client";
import React, { useEffect, useState, useRef } from "react";

import {
  APIProvider,
  Map,
  useMap,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Linkify from "linkify-react";

import { MarkerClusterer } from "@googlemaps/markerclusterer";

import sentou from "./sentou";

export const SentouMapView = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        zoom={9}
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
        center={{ lat: 36.8, lng: 136.70425100483305 }}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        style={{ width: "100%", height: "100vh" }}
      >
        <Markers points={sentou} />
      </Map>
    </APIProvider>
  );
};

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

const Markers = ({ points }: Props) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);
  const [infowindowOpen, setInfowindowOpen] = useState(null);

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point,i) => (
        <>
          <Marker
            position={point}
            key={point.key}
            onClick={() => setInfowindowOpen(i)}
            ref={(marker) => setMarkerRef(marker, point.key)}
          ></Marker>

          {infowindowOpen === i && (
            <InfoWindow
              position={{ lat: point.lat, lng: point.lng }}
              onCloseClick={() => setInfowindowOpen(null)}
            >
              <div style={{ color: "#333" }}>
                <h4>{point.name}</h4>

                <Linkify>
                  <p>{point.text}</p>
                </Linkify>
              </div>
            </InfoWindow>
          )}
        </>
      ))}
    </>
  );
};
