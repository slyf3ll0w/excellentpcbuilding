export type SectionType =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  sections: SectionType[];
}

export const posts: Post[] = [
  {
    slug: "how-much-does-a-custom-pc-build-service-cost",
    title: "How Much Does a Custom PC Build Service Cost?",
    description:
      "A transparent breakdown of what you actually pay for when you hire a professional PC builder — labor, parts, and what drives the price up or down.",
    date: "2025-05-01",
    readTime: "6 min read",
    category: "Pricing & Value",
    sections: [
      {
        type: "p",
        text: "One of the first questions people ask us is: how much does it cost to have a PC built professionally? The answer depends on two things — what parts go into the machine, and what service you're paying for. This guide breaks it all down so there are no surprises.",
      },
      {
        type: "h2",
        text: "The Two Main Costs: Parts and Labor",
      },
      {
        type: "p",
        text: "When you hire a professional PC builder, your total cost has two components. Parts are the hardware that goes into the machine — the CPU, GPU, RAM, storage, case, and power supply. Labor is the fee for the builder's time, expertise, and any services like cable management, BIOS setup, and stress testing.",
      },
      {
        type: "p",
        text: "If you're using a 'build only' service, you're supplying your own parts and paying only for labor. If you're using a 'parts and build' service, the builder sources everything and you pay for both parts and labor together.",
      },
      {
        type: "h2",
        text: "What Does a Typical Build Cost in Parts?",
      },
      {
        type: "p",
        text: "PC parts costs vary enormously depending on the performance tier you're targeting. Here's a realistic breakdown by budget range:",
      },
      {
        type: "ul",
        items: [
          "$500–$700: Entry-level gaming PC. Handles 1080p gaming at medium-high settings. Good for popular online games like Fortnite, Warzone, and Minecraft.",
          "$700–$1,000: Mid-range gaming PC. Solid 1080p performance at high settings, playable at 1440p in many titles.",
          "$1,000–$1,500: High-performance gaming and content creation. 1440p gaming, handles editing software like Premiere and Lightroom.",
          "$1,500–$2,500+: Enthusiast or professional workstation. 4K gaming, heavy video production, 3D rendering, simulation workloads.",
        ],
      },
      {
        type: "h2",
        text: "What Does Professional Labor Typically Cost?",
      },
      {
        type: "p",
        text: "Professional PC assembly services vary by region and builder experience, but you can generally expect to pay $75–$200 for build-only assembly. This covers physical assembly, cable management, thermal paste application, BIOS configuration, Windows installation, and a stress test before handoff.",
      },
      {
        type: "p",
        text: "Some builders charge flat fees; others charge by the hour. Either way, the labor cost is small relative to the parts cost — typically 8–15% of total spend on a mid-range build.",
      },
      {
        type: "h2",
        text: "What Drives Costs Up?",
      },
      {
        type: "ul",
        items: [
          "Custom water cooling: Adds $150–$400+ to a build, plus additional installation time.",
          "High-end components: GPUs and CPUs at the top of the stack carry significant price premiums.",
          "Larger or windowed cases with RGB: Premium cases add $50–$150 to the parts cost.",
          "Multiple storage drives: NVMe SSDs are affordable, but adding two or three drives adds up.",
          "Windows license: A retail Windows 11 Home license adds about $139 to the build cost if not included.",
        ],
      },
      {
        type: "h2",
        text: "Is Hiring a Builder Worth It?",
      },
      {
        type: "p",
        text: "For many people, yes — especially if you've never built a PC before or don't want to spend time troubleshooting a new build. A professional builder ensures everything is installed correctly, the machine is stable under load before you receive it, and any issues during assembly are handled on their dime, not yours.",
      },
      {
        type: "p",
        text: "The risk of a DIY build isn't that parts are damaged during assembly — it's more that a first-time builder may not get BIOS settings right, may not apply thermal paste correctly, or may seat a component improperly and spend hours troubleshooting. A professional eliminates all of that.",
      },
      {
        type: "h2",
        text: "Getting a Quote",
      },
      {
        type: "p",
        text: "The best way to know what your specific build will cost is to request a free quote. At Excellent PC Building, we'll ask about your use case and budget, put together a detailed parts list, and tell you exactly what everything will cost before you commit to anything.",
      },
    ],
  },
  {
    slug: "custom-pc-vs-prebuilt-why-custom-wins",
    title: "Custom PC vs. Prebuilt: Why Custom Wins (Almost) Every Time",
    description:
      "Honest comparison of custom-built PCs versus prebuilt systems from big box retailers. When custom makes sense, when prebuilt might, and what the data actually shows.",
    date: "2025-05-08",
    readTime: "7 min read",
    category: "Buying Guide",
    sections: [
      {
        type: "p",
        text: "Walk into any Best Buy or Walmart and you'll find rows of prebuilt desktop PCs. They look convenient. They have a clear price tag. They're ready to take home today. So why do PC enthusiasts almost universally recommend building custom instead? Here's the honest breakdown.",
      },
      {
        type: "h2",
        text: "The Core Problem with Prebuilts",
      },
      {
        type: "p",
        text: "Prebuilt PC manufacturers make their money on margin. To hit an attractive retail price point while still making a profit, they cut corners in places that aren't immediately obvious to the buyer. The most common compromises are:",
      },
      {
        type: "ul",
        items: [
          "Cheap power supplies: A prebuilt priced at $800 may have a 400W PSU with no efficiency rating. This is a reliability and safety issue.",
          "Mechanical hard drives instead of SSDs: Some prebuilts at $600–$700 still ship with traditional spinning hard drives, which are dramatically slower than SSDs.",
          "Inadequate cooling: Stock coolers in prebuilts are often the bare minimum. High temps mean throttled performance and shorter component lifespan.",
          "No-name RAM and storage brands: Manufacturers source the cheapest compatible components. Brand-name RAM and SSDs last significantly longer.",
          "Proprietary form factors: Some manufacturers use non-standard cases, motherboards, or PSU connectors that make future upgrades difficult or impossible.",
        ],
      },
      {
        type: "h2",
        text: "What You Get with a Custom Build at the Same Price",
      },
      {
        type: "p",
        text: "When a skilled builder puts together a custom PC at the same price as a prebuilt, every dollar goes directly into the components you'll actually use. There's no retail markup, no proprietary hardware tax, and no compromise components hiding in the box.",
      },
      {
        type: "p",
        text: "A $750 custom build will consistently outperform a $750 prebuilt in benchmarks, run cooler, and last longer. This isn't an opinion — it's a predictable outcome of how each type of machine is built.",
      },
      {
        type: "h2",
        text: "The Upgrade Argument",
      },
      {
        type: "p",
        text: "Custom builds are designed around standard form factors. That means when you want to upgrade your GPU two years from now, you can buy any standard GPU and drop it in. When you want more RAM, you buy standard DDR5 DIMMs.",
      },
      {
        type: "p",
        text: "Many prebuilts use proprietary designs that limit upgrade options. Some HP and Dell systems use custom PSU connectors that prevent standard GPU upgrades. Some use mini-ITX boards in standard mid-tower cases with only one RAM slot. These constraints are a hidden long-term cost.",
      },
      {
        type: "h2",
        text: "When Does a Prebuilt Make Sense?",
      },
      {
        type: "p",
        text: "Prebuilts aren't always the wrong choice. They make sense when:",
      },
      {
        type: "ul",
        items: [
          "You need a PC today and can't wait for parts to ship and a build to be completed.",
          "You're buying a business PC from a reputable enterprise manufacturer like Lenovo ThinkStation or HP Z-series, which use quality components.",
          "The prebuilt is on a significant sale that undercuts the equivalent custom build cost.",
          "You genuinely want zero involvement in the hardware decision process and value simplicity above all else.",
        ],
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "p",
        text: "For gaming PCs and general home desktop use, a custom build from a reputable builder will outperform, outlast, and out-upgrade a prebuilt at the same price — every time. The question is really just how you want to get to a custom build: build it yourself, or hire a professional.",
      },
      {
        type: "p",
        text: "At Excellent PC Building, we make the custom route as simple as buying a prebuilt. Tell us your budget, tell us what you'll use it for, and we'll handle every decision from there. You get a better machine without needing to understand any of the technical details.",
      },
    ],
  },
  {
    slug: "what-to-look-for-in-a-pc-builder",
    title: "What to Look for When Hiring a Local PC Builder",
    description:
      "How to evaluate a PC building service before you hand over your parts or money. The questions to ask, the green flags to look for, and the red flags to avoid.",
    date: "2025-05-15",
    readTime: "5 min read",
    category: "Tips & Advice",
    sections: [
      {
        type: "p",
        text: "Hiring someone to build your PC means trusting them with hundreds or thousands of dollars in hardware, plus your time. Choosing the wrong builder can mean a poorly assembled machine, damaged components, or worse — no recourse if something goes wrong. Here's how to vet a builder properly.",
      },
      {
        type: "h2",
        text: "Green Flags",
      },
      {
        type: "h3",
        text: "They're transparent about what's included",
      },
      {
        type: "p",
        text: "A reputable builder clearly explains what's covered in their service. Does the fee include BIOS setup? Windows installation? Stress testing? Cable management? If a builder is vague about what you're paying for, that's a problem. Get it in writing or at minimum in a clear email before you agree to anything.",
      },
      {
        type: "h3",
        text: "They offer some form of workmanship guarantee",
      },
      {
        type: "p",
        text: "Parts have manufacturer warranties. Labor should have a workmanship guarantee. Any professional builder should stand behind their assembly work — if a cable works loose because it wasn't seated properly, or a cooler wasn't mounted with enough pressure, that should be their responsibility to fix.",
      },
      {
        type: "h3",
        text: "They show real work or have real reviews",
      },
      {
        type: "p",
        text: "Photos of actual builds, customer reviews, or word-of-mouth recommendations are all meaningful signals. A builder who can show you completed work is demonstrating accountability. Anyone can claim to be a professional — the work tells the real story.",
      },
      {
        type: "h3",
        text: "They communicate clearly and quickly",
      },
      {
        type: "p",
        text: "Good builders respond promptly, answer questions in plain language, and proactively update you on the build status. If a builder is hard to reach before the sale, they'll be harder to reach if something goes wrong later.",
      },
      {
        type: "h2",
        text: "Red Flags",
      },
      {
        type: "ul",
        items: [
          "No guarantee of any kind on the labor or assembled system.",
          "Requests for payment in full upfront with no milestone or receipt.",
          "Unable or unwilling to provide references, reviews, or examples of past work.",
          "Vague about what's included — 'I'll build it for you' without any specifics.",
          "No clear process for how they handle parts damage or mistakes during assembly.",
          "Significantly below-market pricing without explanation (often means cutting corners on care).",
        ],
      },
      {
        type: "h2",
        text: "Questions to Ask Any Builder",
      },
      {
        type: "ol",
        items: [
          "What exactly is included in your service (cable management, BIOS, Windows, stress test)?",
          "What happens if a part is damaged during assembly — whose responsibility is it?",
          "Do you offer any kind of guarantee on your workmanship?",
          "How long will the build take from when you receive my parts?",
          "Do you have reviews or examples of completed builds I can see?",
        ],
      },
      {
        type: "h2",
        text: "Why Local Matters",
      },
      {
        type: "p",
        text: "Hiring a local builder in your area has real advantages over shipping your parts to a remote service. You can meet in person, there's physical accountability, and logistics for pickup and delivery are straightforward. If something needs to be corrected, you're not paying to ship a heavy PC across the country.",
      },
      {
        type: "p",
        text: "At Excellent PC Building, we serve Springfield, MO and all of Southwest Missouri. We stand behind our work with a 90-day workmanship guarantee, communicate clearly throughout the process, and have built machines for customers across the region.",
      },
    ],
  },
  {
    slug: "gaming-pc-budget-guide-2025",
    title: "Gaming PC Budget Guide 2025: How Much to Spend at Every Tier",
    description:
      "A practical guide to gaming PC performance tiers in 2025 — what $600, $900, $1,200, and $1,800 actually gets you, and which tier is right for how you play.",
    date: "2025-05-22",
    readTime: "8 min read",
    category: "Buying Guide",
    sections: [
      {
        type: "p",
        text: "Choosing a budget for a gaming PC is one of the most common questions we hear. Spend too little and you'll be frustrated by the performance. Spend too much and you're paying for performance you'll never use. This guide breaks down what each budget tier actually delivers in 2025.",
      },
      {
        type: "h2",
        text: "Tier 1: $500–$700 — Entry-Level Gaming",
      },
      {
        type: "p",
        text: "At the $500–$700 range, you can build a PC that handles 1080p gaming at medium to high settings. This tier is right for players who primarily play online multiplayer games, popular esports titles, or games that are a few years old.",
      },
      {
        type: "p",
        text: "What you typically get at this tier: a Ryzen 5 or Core i5 processor, an RX 7600 or RTX 4060 GPU, 16GB DDR5 RAM, and a 1TB NVMe SSD. Expect solid frame rates in Fortnite, Minecraft, Roblox, CS2, and similar games. Newer AAA titles will run at medium settings.",
      },
      {
        type: "ul",
        items: [
          "Best for: First-time PC gamers, younger players, budget-conscious households",
          "Target resolution: 1080p",
          "Weaknesses: Will struggle with demanding new AAA titles at high settings",
          "Upgrade potential: Good — GPU can be upgraded in 2–3 years without replacing the whole system",
        ],
      },
      {
        type: "h2",
        text: "Tier 2: $700–$1,000 — Mid-Range Sweet Spot",
      },
      {
        type: "p",
        text: "The $700–$1,000 range is where most PC gamers land, and for good reason. This is the tier where you start seeing high-settings performance at 1080p and playable frame rates at 1440p in most games.",
      },
      {
        type: "p",
        text: "A strong $900 build in 2025 includes a Ryzen 7 or Core i5-14600K, an RTX 4060 Ti or RX 7700 XT GPU, 32GB DDR5 RAM, and a 1TB NVMe SSD. This machine will handle virtually every game released this year at high settings at 1080p, and holds up well at 1440p.",
      },
      {
        type: "ul",
        items: [
          "Best for: Dedicated gamers who want strong performance without overspending",
          "Target resolution: 1080p high settings or 1440p medium-high",
          "Weaknesses: Will start to show limitations at 1440p in the most demanding titles",
          "Upgrade potential: Excellent — this platform supports GPU upgrades for years",
        ],
      },
      {
        type: "h2",
        text: "Tier 3: $1,000–$1,500 — High Performance",
      },
      {
        type: "p",
        text: "Spending $1,000–$1,500 gets you into genuinely high-performance territory. At this level, 1440p gaming at high settings is comfortable in nearly every game, and 4K gaming at medium settings becomes viable in less demanding titles.",
      },
      {
        type: "p",
        text: "A $1,200 build at this tier typically includes a Ryzen 7 7800X3D or Core i7-14700K, an RTX 4070 Super GPU, 32GB DDR5 RAM, and 2TB of NVMe storage. This system also handles content creation workloads well — Premiere, Lightroom, Blender at moderate complexity.",
      },
      {
        type: "ul",
        items: [
          "Best for: Serious gamers, streamers, content creators who also game",
          "Target resolution: 1440p high or 4K medium",
          "Weaknesses: Still below the enthusiast ceiling at 4K ultra settings",
          "Upgrade potential: Good — the CPU platform will support next-gen GPUs",
        ],
      },
      {
        type: "h2",
        text: "Tier 4: $1,500–$2,500+ — Enthusiast",
      },
      {
        type: "p",
        text: "The enthusiast tier exists for people who want the best available performance regardless of diminishing returns — or for professional workloads that genuinely require top-end hardware.",
      },
      {
        type: "p",
        text: "A $2,000 enthusiast build in 2025 features a Ryzen 9 7950X or Core i9-14900K, an RTX 4080 Super or RX 7900 XTX GPU, 64GB DDR5 RAM, and fast multi-drive NVMe storage. At this level, 4K gaming at ultra settings is the baseline expectation, and the system handles professional video production, 3D rendering, and simulation workloads without complaint.",
      },
      {
        type: "ul",
        items: [
          "Best for: Professional creators, 4K gamers, enthusiast hobbyists",
          "Target resolution: 4K ultra, or high-refresh 1440p competitive gaming",
          "Weaknesses: Steep cost-per-frame improvement over the tier below",
          "Upgrade potential: Excellent for everything except the GPU, which you'd be replacing at a high cost anyway",
        ],
      },
      {
        type: "h2",
        text: "Which Tier Is Right for You?",
      },
      {
        type: "p",
        text: "Most people who come to us are best served by Tier 2 ($700–$1,000). It's the point where you stop noticing performance limitations in everyday gaming and get strong enough specs to last 4–5 years before an upgrade feels necessary.",
      },
      {
        type: "p",
        text: "If you're primarily playing esports games (Fortnite, Valorant, CS2), Tier 1 is plenty and you'd be wasting money going higher. If you're a content creator who games, Tier 3 makes sense. If you need 4K or do serious professional workloads, Tier 4 is justified.",
      },
      {
        type: "p",
        text: "Still not sure? Tell us what games you play, what monitor you have, and what your budget is. We'll tell you exactly which tier fits and put together a specific parts list — for free.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
