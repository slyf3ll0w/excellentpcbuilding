"use client";

import { useEffect, useRef, useState } from "react";

const CITIES = [
  { name: "Springfield", slug: "springfield", lat: 37.2090, lon: -93.2923, isHome: true },
  { name: "Bolivar",     slug: "bolivar",     lat: 37.6137, lon: -93.4113, isHome: false },
  { name: "Willard",     slug: "willard",     lat: 37.3007, lon: -93.4277, isHome: false },
  { name: "Battlefield", slug: "battlefield", lat: 37.1162, lon: -93.3721, isHome: false },
  { name: "Republic",    slug: "republic",    lat: 37.1201, lon: -93.4800, isHome: false },
  { name: "Billings",    slug: "billings",    lat: 37.0637, lon: -93.5530, isHome: false },
  { name: "Clever",      slug: "clever",      lat: 36.9693, lon: -93.4704, isHome: false },
  { name: "Nixa",        slug: "nixa",        lat: 37.0434, lon: -93.2952, isHome: false },
  { name: "Ozark",       slug: "ozark",       lat: 37.0173, lon: -93.2043, isHome: false },
  { name: "Sparta",      slug: "sparta",      lat: 37.0412, lon: -93.0738, isHome: false },
  { name: "Monett",      slug: "monett",      lat: 36.9293, lon: -93.9238, isHome: false },
  { name: "Ava",         slug: "ava",         lat: 36.9515, lon: -92.6601, isHome: false },
  { name: "Forsyth",     slug: "forsyth",     lat: 36.6743, lon: -92.5745, isHome: false },
  { name: "Branson",     slug: "branson",     lat: 36.6437, lon: -93.2185, isHome: false },
];

// Convex hull of all 14 cities, expanded ~15 miles outward
const SERVICE_AREA_POLYGON = [
  [37.76, -93.43],
  [36.92, -92.51],
  [36.59, -92.47],
  [36.55, -93.22],
  [36.90, -94.07],
];

// Primary color hex approximation for Leaflet SVG/HTML usage
const PRIMARY = "#5b5fe8";
const CARD_BG = "#262017";

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    // Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Theme overrides for Leaflet controls & popups
    if (!document.getElementById("leaflet-theme")) {
      const style = document.createElement("style");
      style.id = "leaflet-theme";
      style.textContent = `
        .leaflet-container { background: ${CARD_BG}; font-family: inherit; }
        .leaflet-control-zoom {
          border: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 0 !important;
        }
        .leaflet-control-zoom a {
          background: ${CARD_BG} !important;
          color: #fff !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          border-radius: 0 !important;
          line-height: 28px !important;
          font-size: 18px !important;
        }
        .leaflet-control-zoom a:hover { background: rgba(255,255,255,0.08) !important; }
        .leaflet-popup-content-wrapper {
          background: ${CARD_BG};
          border: 1px solid rgba(255,255,255,0.1);
          color: #f5f0e8;
          border-radius: 0;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        }
        .leaflet-popup-tip-container { display: none; }
        .leaflet-popup-close-button { color: rgba(255,255,255,0.5) !important; font-size: 18px !important; top: 8px !important; right: 10px !important; }
        .leaflet-popup-close-button:hover { color: #fff !important; }
        .leaflet-popup-content { margin: 14px 18px; min-width: 160px; }
        .leaflet-control-attribution {
          background: rgba(20,16,10,0.75) !important;
          color: rgba(255,255,255,0.35) !important;
          font-size: 9px !important;
          backdrop-filter: blur(4px);
        }
        .leaflet-control-attribution a { color: ${PRIMARY} !important; }
        .leaflet-attribution-flag { display: none !important; }
      `;
      document.head.appendChild(style);
    }

    function initMap() {
      const L = (window as any).L;
      if (!L || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [37.05, -93.20],
        zoom: 9,
        scrollWheelZoom: false,
        zoomControl: true,
      });
      mapRef.current = map;

      // CartoDB Dark Matter — dark tiles that match the site theme
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      // Service area polygon
      L.polygon(SERVICE_AREA_POLYGON, {
        color: PRIMARY,
        weight: 2,
        dashArray: "8 5",
        fillColor: PRIMARY,
        fillOpacity: 0.13,
        opacity: 0.6,
      }).addTo(map);

      // City markers
      CITIES.forEach((city) => {
        const size = city.isHome ? 16 : 11;
        const glowSize = city.isHome ? 32 : 22;

        const icon = L.divIcon({
          className: "",
          html: `
            <div style="position:relative;width:${glowSize}px;height:${glowSize}px;display:flex;align-items:center;justify-content:center;">
              <div style="
                position:absolute;
                width:${glowSize}px;height:${glowSize}px;
                border-radius:50%;
                background:${PRIMARY};
                opacity:0.18;
              "></div>
              <div style="
                width:${size}px;height:${size}px;
                border-radius:50%;
                background:${PRIMARY};
                border:${city.isHome ? "3px" : "2px"} solid ${CARD_BG};
                box-shadow:0 0 ${city.isHome ? 12 : 7}px ${PRIMARY}cc;
                position:relative;
                z-index:1;
              "></div>
            </div>
          `,
          iconSize: [glowSize, glowSize],
          iconAnchor: [glowSize / 2, glowSize / 2],
          popupAnchor: [0, -(glowSize / 2 + 4)],
        });

        const marker = L.marker([city.lat, city.lon], { icon }).addTo(map);

        marker.bindPopup(`
          <div style="padding:2px 0;font-family:inherit;">
            <p style="font-weight:700;font-size:13px;margin:0 0 3px;color:#f5f0e8;">
              ${city.isHome ? "🏠 " : ""}${city.name}, MO
            </p>
            <p style="font-size:11px;color:rgba(255,255,255,0.5);margin:0 0 8px;">
              ${city.isHome ? "Home base" : "Service city"}
            </p>
            <a href="/services/pc-build/${city.slug}"
               style="font-size:11px;color:${PRIMARY};font-weight:600;text-decoration:none;">
              View PC build service →
            </a>
          </div>
        `);
      });

      setLoading(false);
    }

    if ((window as any).L) {
      initMap();
    } else if (!document.getElementById("leaflet-js")) {
      const script = document.createElement("script");
      script.id = "leaflet-js";
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = initMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="border-2 border-border overflow-hidden relative" style={{ height: "500px" }}>
      {loading && (
        <div className="absolute inset-0 bg-card flex items-center justify-center z-10 pointer-events-none">
          <p className="text-muted-foreground text-sm">Loading map…</p>
        </div>
      )}
      <div ref={containerRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}
