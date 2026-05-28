"use client";

import Link from "next/link";
import { useState } from "react";

// Real lat/lon → SVG coordinate conversion
// Bounds: lat 36.45–37.80, lon -94.15 to -92.35
const LAT_MAX = 37.80, LAT_MIN = 36.45;
const LON_MIN = -94.15, LON_MAX = -92.35;
const W = 800, H = 560, PAD = 62;

function toXY(lat: number, lon: number) {
  const x = PAD + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * (W - PAD * 2);
  const y = PAD + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * (H - PAD * 2);
  return [Math.round(x), Math.round(y)];
}

const CITIES = [
  { name: "Springfield", slug: "springfield", lat: 37.2090, lon: -93.2923, isHome: true,  anchor: "start",  dx:  10, dy:  -7 },
  { name: "Bolivar",     slug: "bolivar",     lat: 37.6137, lon: -93.4113, isHome: false, anchor: "middle", dx:   0, dy: -11 },
  { name: "Willard",     slug: "willard",     lat: 37.3007, lon: -93.4277, isHome: false, anchor: "end",    dx: -10, dy:  -7 },
  { name: "Battlefield", slug: "battlefield", lat: 37.1162, lon: -93.3721, isHome: false, anchor: "end",    dx: -10, dy:  -7 },
  { name: "Republic",    slug: "republic",    lat: 37.1201, lon: -93.4800, isHome: false, anchor: "end",    dx: -10, dy:   6 },
  { name: "Billings",    slug: "billings",    lat: 37.0637, lon: -93.5530, isHome: false, anchor: "end",    dx: -10, dy:  -7 },
  { name: "Clever",      slug: "clever",      lat: 36.9693, lon: -93.4704, isHome: false, anchor: "end",    dx: -10, dy:   6 },
  { name: "Nixa",        slug: "nixa",        lat: 37.0434, lon: -93.2952, isHome: false, anchor: "middle", dx:   0, dy:  17 },
  { name: "Ozark",       slug: "ozark",       lat: 37.0173, lon: -93.2043, isHome: false, anchor: "start",  dx:  10, dy:   6 },
  { name: "Sparta",      slug: "sparta",      lat: 37.0412, lon: -93.0738, isHome: false, anchor: "start",  dx:  10, dy:  -7 },
  { name: "Monett",      slug: "monett",      lat: 36.9293, lon: -93.9238, isHome: false, anchor: "end",    dx: -10, dy:   5 },
  { name: "Ava",         slug: "ava",         lat: 36.9515, lon: -92.6601, isHome: false, anchor: "start",  dx:  10, dy:   5 },
  { name: "Forsyth",     slug: "forsyth",     lat: 36.6743, lon: -92.5745, isHome: false, anchor: "start",  dx:  10, dy:   5 },
  { name: "Branson",     slug: "branson",     lat: 36.6437, lon: -93.2185, isHome: false, anchor: "middle", dx:   0, dy:  17 },
].map(c => ({ ...c, ...(([x, y]) => ({ x, y }))(toXY(c.lat, c.lon)) }));

// Convex hull of all cities, expanded ~35px outward from centroid
const SERVICE_AREA = "325,86 660,335 689,441 406,472 108,343";

export function ServiceAreaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const springfield = CITIES.find(c => c.isHome)!;

  return (
    <div className="border-2 border-border overflow-hidden bg-card">
      <svg
        viewBox="0 0 800 560"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto block"
        aria-label="Excellent PC Building service area — Southwest Missouri"
      >
        <defs>
          {/* Dot grid pattern */}
          <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.8" fill="rgba(255,255,255,0.07)" />
          </pattern>
          {/* Glow filter for Springfield */}
          <filter id="homeglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Glow for hovered cities */}
          <filter id="cityglow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Base background */}
        <rect width="800" height="560" style={{ fill: "var(--card)" }} />
        {/* Dot grid texture */}
        <rect width="800" height="560" fill="url(#mapgrid)" />

        {/* Service area fill */}
        <polygon
          points={SERVICE_AREA}
          style={{ fill: "var(--primary)", stroke: "var(--primary)" }}
          fillOpacity={0.08}
          strokeOpacity={0}
        />
        {/* Service area dashed border */}
        <polygon
          points={SERVICE_AREA}
          fill="none"
          style={{ stroke: "var(--primary)" }}
          strokeOpacity={0.35}
          strokeWidth={1.5}
          strokeDasharray="7 4"
        />

        {/* Subtle spokes from Springfield to each city */}
        {CITIES.filter(c => !c.isHome).map(city => (
          <line
            key={`spoke-${city.slug}`}
            x1={springfield.x} y1={springfield.y}
            x2={city.x} y2={city.y}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={1}
          />
        ))}

        {/* City markers */}
        {CITIES.map(city => {
          const isHov = hovered === city.slug;
          const r = city.isHome ? 7 : 4.5;
          return (
            <Link key={city.slug} href={`/services/pc-build/${city.slug}`}>
              <g
                onMouseEnter={() => setHovered(city.slug)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Home base pulse ring */}
                {city.isHome && (
                  <circle cx={city.x} cy={city.y} r={16}
                    style={{ fill: "var(--primary)" }} fillOpacity={0.12} />
                )}
                {/* Hover ring */}
                {(isHov || city.isHome) && (
                  <circle cx={city.x} cy={city.y} r={r + 5}
                    style={{ fill: "var(--primary)" }} fillOpacity={0.2} />
                )}
                {/* Main dot */}
                <circle
                  cx={city.x} cy={city.y} r={r}
                  style={{ fill: "var(--primary)", stroke: "var(--card)" }}
                  fillOpacity={isHov || city.isHome ? 1 : 0.75}
                  strokeWidth={city.isHome ? 2.5 : 1.5}
                  filter={city.isHome ? "url(#homeglow)" : isHov ? "url(#cityglow)" : undefined}
                />
                {/* Label */}
                <text
                  x={city.x + city.dx}
                  y={city.y + city.dy}
                  textAnchor={city.anchor as "start" | "end" | "middle"}
                  fontSize={city.isHome ? 11.5 : 10}
                  fontWeight={city.isHome ? "700" : isHov ? "600" : "500"}
                  style={{
                    fill: isHov || city.isHome ? "var(--foreground)" : "var(--muted-foreground)",
                    fontFamily: "inherit",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {city.name}
                </text>
              </g>
            </Link>
          );
        })}

        {/* Compass — N indicator */}
        <g transform="translate(748, 80)">
          <circle cx="0" cy="0" r="18"
            style={{ fill: "var(--muted)", stroke: "var(--border)" }}
            fillOpacity={1} strokeWidth={1} />
          <polygon points="0,-11 3,5 0,2 -3,5"
            style={{ fill: "var(--primary)" }} />
          <polygon points="0,11 3,-5 0,-2 -3,-5"
            fill="rgba(255,255,255,0.2)" />
          <text x="0" y="-15" textAnchor="middle" fontSize="9" fontWeight="700"
            style={{ fill: "var(--foreground)", fontFamily: "inherit" }}>N</text>
        </g>

        {/* Legend */}
        <g transform="translate(22, 520)">
          <circle cx={6} cy={0} r={6}
            style={{ fill: "var(--primary)" }} filter="url(#homeglow)" />
          <text x={16} y={4} fontSize={10}
            style={{ fill: "var(--muted-foreground)", fontFamily: "inherit" }}>Home base</text>
          <circle cx={100} cy={0} r={4}
            style={{ fill: "var(--primary)" }} fillOpacity={0.75} />
          <text x={110} y={4} fontSize={10}
            style={{ fill: "var(--muted-foreground)", fontFamily: "inherit" }}>Service city (click to explore)</text>
          <polygon points="188,-7 218,-7 218,7 188,7"
            style={{ fill: "var(--primary)", stroke: "var(--primary)" }}
            fillOpacity={0.1} strokeOpacity={0.4} strokeWidth={1.5} />
          <text x={225} y={4} fontSize={10}
            style={{ fill: "var(--muted-foreground)", fontFamily: "inherit" }}>Service area</text>
        </g>

        {/* Region label */}
        <text x={400} y={543} textAnchor="middle" fontSize={10} fontWeight="600"
          style={{ fill: "var(--muted-foreground)", fontFamily: "inherit", letterSpacing: "0.12em" }}>
          SOUTHWEST MISSOURI
        </text>
      </svg>
    </div>
  );
}
