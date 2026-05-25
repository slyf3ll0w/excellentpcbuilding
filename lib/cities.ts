export interface City {
  slug: string;
  name: string;
}

export const cities: City[] = [
  { slug: "springfield", name: "Springfield" },
  { slug: "battlefield", name: "Battlefield" },
  { slug: "republic", name: "Republic" },
  { slug: "nixa", name: "Nixa" },
  { slug: "ozark", name: "Ozark" },
  { slug: "willard", name: "Willard" },
  { slug: "branson", name: "Branson" },
  { slug: "bolivar", name: "Bolivar" },
  { slug: "ava", name: "Ava" },
  { slug: "forsyth", name: "Forsyth" },
  { slug: "monett", name: "Monett" },
  { slug: "sparta", name: "Sparta" },
  { slug: "clever", name: "Clever" },
  { slug: "billings", name: "Billings" },
];

export const SERVICES = [
  {
    slug: "pc-build",
    title: "PC Build Service",
    shortName: "Build Only",
    tagline: "You provide the parts — we build your perfect machine.",
    description:
      "Already have your components selected or on the way? Our expert technicians will professionally assemble your custom PC with precision cable management, proper thermal paste application, BIOS configuration, and thorough stress testing before handoff.",
    benefits: [
      "Professional assembly by certified technicians",
      "Proper cable management for airflow and aesthetics",
      "BIOS configuration and Windows installation",
      "Full stress test before delivery",
      "90-day workmanship guarantee",
    ],
  },
  {
    slug: "parts-and-build",
    title: "Parts & Build Service",
    shortName: "Parts + Build",
    tagline: "We source the best parts and build your dream PC.",
    description:
      "Not sure what to buy? Tell us your budget and what you'll use it for — gaming, video editing, streaming, or work — and we'll create a custom parts list, source everything at competitive prices, build it, and deliver a fully tested system.",
    benefits: [
      "Free custom parts consultation based on your budget",
      "We source parts at competitive prices",
      "Professional assembly and cable management",
      "BIOS configuration, driver installs, and Windows setup",
      "Full stress test and 90-day guarantee",
    ],
  },
] as const;

export const BASE_URL = "https://excellentpcbuilding.com";
