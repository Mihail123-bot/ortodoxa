import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Church {
  name: string;
  tradition: string;
  address: string;
  lat: number;
  lng: number;
}

interface ChurchMapProps {
  churches: Church[];
}

// Custom gold marker icon using inline SVG
const createGoldIcon = () => {
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#d4a853;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#c8993b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#b8862d;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000" flood-opacity="0.35"/>
        </filter>
      </defs>
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" 
            fill="url(#goldGrad)" stroke="#8B6914" stroke-width="0.8" filter="url(#shadow)"/>
      <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="serif">✝</text>
    </svg>
  `;

  return L.divIcon({
    html: svgIcon,
    className: "church-marker-icon",
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -42],
  });
};

const ChurchMap = ({ churches }: ChurchMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Stockholm
    const map = L.map(mapRef.current, {
      center: [59.33, 18.07],
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    // Use a desaturated tile layer for aesthetic fit
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    const goldIcon = createGoldIcon();

    // Add markers for each church
    churches.forEach((church) => {
      const marker = L.marker([church.lat, church.lng], { icon: goldIcon }).addTo(map);

      marker.bindPopup(
        `<div style="font-family: 'Playfair Display', serif; min-width: 180px;">
          <h3 style="margin: 0 0 4px 0; font-size: 14px; color: #1a1a2e; font-weight: 600;">${church.name}</h3>
          <p style="margin: 0 0 4px 0; font-size: 11px; color: #b8862d; font-style: italic;">${church.tradition}</p>
          <p style="margin: 0; font-size: 11px; color: #666;">📍 ${church.address}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${church.lat},${church.lng}" 
             target="_blank" rel="noopener noreferrer"
             style="display: inline-block; margin-top: 8px; font-size: 11px; color: #b8862d; text-decoration: none; border-bottom: 1px solid #b8862d;">
            Öppna i Google Maps →
          </a>
        </div>`,
        { closeButton: true, className: "church-popup" }
      );
    });

    // Fit bounds to show all markers with padding
    const group = L.featureGroup(
      churches.map((c) => L.marker([c.lat, c.lng]))
    );
    map.fitBounds(group.getBounds().pad(0.15));

    mapInstanceRef.current = map;

    // Enable scroll zoom when user clicks on the map
    map.on("click", () => {
      map.scrollWheelZoom.enable();
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [churches]);

  return (
    <>
      <style>{`
        .church-marker-icon {
          background: none !important;
          border: none !important;
        }
        .church-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          border: 1px solid rgba(184, 134, 45, 0.2);
        }
        .church-popup .leaflet-popup-tip {
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .leaflet-control-zoom a {
          background: #1a1a2e !important;
          color: #c8993b !important;
          border-color: rgba(184, 134, 45, 0.2) !important;
        }
        .leaflet-control-zoom a:hover {
          background: #252547 !important;
        }
      `}</style>
      <div ref={mapRef} className="w-full h-full" />
    </>
  );
};

export default ChurchMap;
