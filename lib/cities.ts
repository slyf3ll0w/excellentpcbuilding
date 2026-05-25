export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  slug: string;
  name: string;
  blurb: string;
  about: string;
  popularBuilds: string[];
  faq: CityFaq[];
}

export const cities: City[] = [
  {
    slug: "springfield",
    name: "Springfield",
    blurb:
      "Springfield is the largest city in Southwest Missouri and home to Missouri State University — which means we see the full spectrum of builds here, from $600 student rigs to $2,500 creative workstations. It's the most tech-forward market in the region.",
    about:
      "Springfield customers include MSU students, Twitch streamers, real estate photographers, remote workers, and dedicated gamers. The diversity of use cases keeps us on our toes. Whatever you need a PC for, we've almost certainly built one like it before.",
    popularBuilds: ["High-Performance Gaming PCs", "Content Creator Workstations", "Student Budget Builds", "Business Workstations"],
    faq: [
      {
        q: "Do I need to travel far to drop off my parts in Springfield?",
        a: "No — we're based right in Springfield. Pickup and dropoff are quick and easy to coordinate. We'll set a time that works for your schedule.",
      },
      {
        q: "I'm an MSU student on a tight budget. What's the minimum I should spend for a solid build?",
        a: "For a PC that handles coursework, light gaming, and everyday use, a budget of $550–$750 is realistic. We'll make every dollar count and won't spec in anything you don't need.",
      },
      {
        q: "How long does a typical build take from start to finish?",
        a: "Build-only orders are usually done within 2–3 business days after we receive your parts. Parts + build orders add 3–7 days for sourcing and shipping, then 1–2 days for assembly and testing.",
      },
    ],
  },
  {
    slug: "battlefield",
    name: "Battlefield",
    blurb:
      "Battlefield is one of the fastest-growing suburbs in the Springfield metro, and most of our customers here are families — parents buying their teenager's first gaming PC, or adults wanting a reliable home computer that doesn't cost a fortune.",
    about:
      "Many Battlefield families come to us after pricing prebuilts at big box stores and realizing a custom build delivers far more for the same money. We keep the process simple: tell us the budget, tell us what the PC is for, and we handle the rest.",
    popularBuilds: ["Teen Gaming Starter PCs", "Family Desktop Builds", "Home Office PCs"],
    faq: [
      {
        q: "My teenager wants a gaming PC. What's a realistic starting budget?",
        a: "For solid 1080p gaming on popular titles like Fortnite, Warzone, and Minecraft, we recommend budgeting $600–$900. That range gets you reliable frame rates without overspending.",
      },
      {
        q: "Do you offer pickup and delivery for Battlefield customers?",
        a: "Yes — Battlefield is just a short drive from Springfield. We're happy to coordinate pickup and dropoff at a time that's convenient for your family.",
      },
      {
        q: "What's the most popular build for families in Battlefield?",
        a: "Mid-range gaming systems with a Ryzen 5 processor, an RTX 4060-class GPU, 16GB RAM, and a 1TB SSD hit the sweet spot for most families — strong performance at a price that doesn't require financing.",
      },
    ],
  },
  {
    slug: "republic",
    name: "Republic",
    blurb:
      "Republic is a steadily growing bedroom community southwest of Springfield with a strong mix of young families and remote workers. The most common request we get from Republic is a PC that handles Microsoft Teams and Zoom during the day, then pivots to gaming in the evening.",
    about:
      "Republic customers tend to want versatile builds — machines that are just as capable running Excel and video calls as they are running games on weekends. We're good at designing systems that do both without compromise, and without padding the parts list unnecessarily.",
    popularBuilds: ["Work-from-Home Workstations", "Dual-Purpose Gaming/Work PCs", "Budget Gaming Builds"],
    faq: [
      {
        q: "Can you build a PC that handles both remote work and gaming?",
        a: "Absolutely — this is one of our most common requests. A mid-range system handles video conferencing, Office, and gaming without compromise. Budget $800–$1,200 for the sweet spot between productivity and performance.",
      },
      {
        q: "My current PC is getting slow. Should I upgrade it or build new?",
        a: "It depends on the age and specs. If it's more than 6–7 years old, a new build almost always makes more financial sense than upgrading. We'll give you an honest assessment before you commit to anything.",
      },
      {
        q: "How long does the parts sourcing process take?",
        a: "Typically 3–7 business days for parts to arrive after we finalize your list. We keep you updated throughout the process, and assembly usually takes 1–2 days after everything is in hand.",
      },
    ],
  },
  {
    slug: "nixa",
    name: "Nixa",
    blurb:
      "Nixa is one of the fastest-growing cities in Missouri, attracting young professionals and families who commute into Springfield and beyond. We see a lot of creative interest from Nixa — streaming setups, YouTube production builds, and photography workstations are all popular requests.",
    about:
      "Nixa customers tend to have creative goals in mind. Whether it's a dedicated streaming PC, a shared family gaming machine, or a workstation for editing client photos, we help figure out exactly which hardware will get you there — and at what price.",
    popularBuilds: ["Streaming & Content Creator PCs", "Family Gaming Builds", "Photography Workstations"],
    faq: [
      {
        q: "I want to stream on Twitch — what specs do I actually need?",
        a: "For streaming reliably at 1080p60, we recommend at least a Ryzen 7 or Core i7 processor, 32GB RAM, and a mid-range GPU. Budget $1,000–$1,400 for a setup that handles streaming without dropping frames during gameplay.",
      },
      {
        q: "How far is Nixa from your location?",
        a: "Just a 10–15 minute drive depending on traffic. Pickup and dropoff are easy to arrange for Nixa customers.",
      },
      {
        q: "What's the difference between a gaming PC and a streaming PC?",
        a: "Gaming PCs prioritize GPU power for frame rates. Streaming PCs need a strong multi-core CPU for encoding video on the fly. A single high-spec machine can do both well if the CPU is strong enough — or a dual-PC setup handles each task separately at the pro level.",
      },
    ],
  },
  {
    slug: "ozark",
    name: "Ozark",
    blurb:
      "Ozark is one of the most affluent suburbs in Southwest Missouri, and it shows in the builds we do here. Ozark customers tend to arrive with larger budgets and higher expectations — enthusiast gaming rigs, dual-monitor workstations, and machines built to last a decade.",
    about:
      "Some of our most ambitious projects have come from Ozark customers. Custom-cooled gaming towers, $2,500 4K editing workstations, dual-PC streaming setups — if you have a premium project in mind, we're ready to take it on. We source from premium brands when quality demands it.",
    popularBuilds: ["High-End Gaming Rigs", "4K Video Editing Workstations", "Dual-PC Streaming Setups"],
    faq: [
      {
        q: "What's the best high-end gaming PC you can build for around $2,000?",
        a: "At $2,000 you're looking at an RTX 4070 Ti or 4080, a Ryzen 9 or Core i9, 32GB DDR5 RAM, and fast NVMe storage. This handles 4K gaming, content creation, and anything else without breaking a sweat.",
      },
      {
        q: "Can you build something that handles both serious gaming and professional video editing?",
        a: "Yes — the hardware requirements overlap significantly. A top-tier CPU, 32–64GB RAM, a fast GPU, and multiple NVMe drives will crush both workloads on a single machine.",
      },
      {
        q: "Do you source premium brands like ASUS ROG, Corsair, or Noctua?",
        a: "Absolutely. We source from whatever brands best serve your build — including premium lines from ASUS, MSI, Corsair, Noctua, and others. We'll explain every choice and never pad a parts list with brand markups that don't add real performance.",
      },
    ],
  },
  {
    slug: "willard",
    name: "Willard",
    blurb:
      "Willard is a tight-knit agricultural community north of Springfield where most residents are practical-minded and value reliability over flash. Our Willard customers want dependable machines — PCs that just work, game well within a reasonable budget, and don't need constant attention.",
    about:
      "We understand that a $1,500 enthusiast build isn't realistic for most Willard households. Our most common builds here are solid $500–$800 systems that play popular games well, handle everyday computing, and are built to last. We don't upsell — if you don't need it, it won't be in your build.",
    popularBuilds: ["Budget Gaming PCs", "Reliable Home Desktop Builds", "Teen Gaming Builds"],
    faq: [
      {
        q: "What's the most affordable build you can do that's actually worth buying?",
        a: "For around $550–$650, we can build a system that handles 1080p gaming at medium-high settings and runs everyday apps without complaint. It won't max out the latest AAA titles, but it'll be reliable and fast for the price.",
      },
      {
        q: "My old PC is slow — should I upgrade it or just build new?",
        a: "If your machine is more than 6–7 years old, a new build almost always makes more financial sense than upgrading. We'll take an honest look at your specs and tell you which path makes sense before you spend a dime.",
      },
      {
        q: "Can you build a solid gaming PC for under $700?",
        a: "Yes — $700 is a workable budget for a capable 1080p gaming machine. We'll put together a parts list that gets the most performance out of every dollar without padding it with unnecessary extras.",
      },
    ],
  },
  {
    slug: "branson",
    name: "Branson",
    blurb:
      "Branson draws people from across the country to work and live in its entertainment economy, which has created a unique demand for creative tech setups. Streaming workstations, recording PCs, YouTube production builds, and reliable remote work machines are all common requests here.",
    about:
      "Whether you're a Branson entertainer building a YouTube presence, a short-term rental host managing properties online, or a remote worker who relocated to the lakes area, we've built for your exact situation. Reliability and purpose-built performance are what Branson customers come looking for.",
    popularBuilds: ["Streaming & YouTube Creator PCs", "Home Business Workstations", "Remote Work Setups"],
    faq: [
      {
        q: "Can you build a PC specifically optimized for YouTube or podcast production?",
        a: "Absolutely. Creator builds prioritize CPU cores for encoding, fast storage for large video files, and enough RAM to run editing software without lag. We'll spec it around whatever software you use — DaVinci Resolve, Premiere, OBS, Logic, or others.",
      },
      {
        q: "I work remotely and need something reliable for video calls and large file transfers — what do you recommend?",
        a: "A mid-range workstation with a solid 8-core CPU, 32GB RAM, and a fast NVMe drive handles any remote work scenario. We optimize for stability and consistent performance rather than peak gaming benchmarks.",
      },
      {
        q: "Do you offer priority builds for Branson customers with tight timelines?",
        a: "We do our best to accommodate time-sensitive requests. Reach out through our contact form and tell us your timeline — we'll be upfront about what we can do.",
      },
    ],
  },
  {
    slug: "bolivar",
    name: "Bolivar",
    blurb:
      "Bolivar is home to Southwest Baptist University, and a significant portion of our Bolivar customers are students who need a PC that handles demanding coursework by day and gaming by night — all on a college budget. Student builds are something we take seriously.",
    about:
      "College students have specific needs: fast enough for creative software and research, capable enough to unwind with gaming, and priced to fit a tight budget. We design student builds to stay relevant for 3–4 years, not feel outdated after two semesters.",
    popularBuilds: ["Student Budget Builds", "Gaming/Study Hybrid PCs", "Creative Software Workstations"],
    faq: [
      {
        q: "What's a good budget for a college PC that handles both coursework and gaming?",
        a: "We typically recommend $650–$900 for a strong student build. That gets you a machine capable of handling Adobe CC, rendering, and gaming — without the compromises of a $400 big-box prebuilt.",
      },
      {
        q: "Do you offer any kind of student discount for SBU students?",
        a: "Reach out and mention you're a student — we'll do what we can. Supporting the SBU community in Bolivar is something we genuinely care about.",
      },
      {
        q: "What's the best build for running Blender, Adobe Premiere, or AutoCAD?",
        a: "These apps are CPU and RAM intensive. For serious creative work, we recommend a 12-core processor, 32GB RAM, and a GPU with strong compute performance. Budget $1,200–$1,600 for a workstation that won't hold back your work.",
      },
    ],
  },
  {
    slug: "ava",
    name: "Ava",
    blurb:
      "Ava is the county seat of Douglas County — a small, practical rural community where most of our customers are first-time custom PC buyers. They want something better than what they'd find at a big box store, without overcomplicating the process.",
    about:
      "We make the process as simple as possible for Ava customers. Tell us what you need the PC for and what your budget is, and we'll take it from there — no jargon, no upselling, just an honest build that fits your life.",
    popularBuilds: ["First-Time Gaming Builds", "Everyday Home PCs", "Budget Starter Builds"],
    faq: [
      {
        q: "Do you serve customers in Ava and Douglas County?",
        a: "Yes — we serve all of Southwest Missouri, including Douglas County. Coordination for parts pickup or delivery is easy to arrange through our contact form.",
      },
      {
        q: "I've never owned a custom-built PC. What's the process like?",
        a: "It's simple: tell us your budget and what you'll use the PC for. We build a parts list, you approve it, we order everything, assemble and test it, then get it to you ready to use. No technical knowledge required on your end.",
      },
      {
        q: "Is a custom build actually better than a prebuilt PC from Walmart?",
        a: "Almost always, yes. Prebuilts at big box stores cut corners on power supplies, cooling, and storage to hit a price point. A custom build at the same price outperforms it and lasts longer.",
      },
    ],
  },
  {
    slug: "forsyth",
    name: "Forsyth",
    blurb:
      "Forsyth sits at the gateway to Table Rock Lake and serves as the Taney County seat. Many of our Forsyth customers are retirees or second-home owners who want a reliable, easy-to-use desktop for everyday tasks — browsing, video calls, photo management, and light use.",
    about:
      "Not every customer needs a gaming powerhouse, and we respect that. For Forsyth customers who want something fast, reliable, and low-maintenance, we build clean, quiet systems with solid-state storage and plenty of RAM — computers that stay snappy for years without fuss.",
    popularBuilds: ["Everyday Home PCs", "Quiet Retirement Desktops", "Light Gaming & Media PCs"],
    faq: [
      {
        q: "I'm looking for a fast, simple desktop for browsing and video calls. What do you recommend?",
        a: "A compact build with a modern processor, 16GB RAM, and a 1TB SSD gives you a fast, quiet, reliable computer that handles everything you need. Budget around $500–$700 and we'll build something that stays snappy for years.",
      },
      {
        q: "Do you build PCs that aren't for gaming?",
        a: "Absolutely. Most of our non-gaming builds focus on reliability, speed, and easy upkeep — no RGB, no loud fans, just a solid machine. We size the specs to match what you actually do.",
      },
      {
        q: "How do I coordinate service from Forsyth?",
        a: "Just fill out our contact form and we'll work out the most convenient arrangement. We're familiar with serving Taney County customers and happy to discuss pickup or delivery logistics.",
      },
    ],
  },
  {
    slug: "monett",
    name: "Monett",
    blurb:
      "Monett is a working-class community in Barry County with a strong manufacturing heritage. Our Monett customers are practical, budget-minded people who want quality without the premium price tag — reliable machines built to handle daily use for the whole family.",
    about:
      "We've built everything in Monett from $600 gaming PCs for teenagers to $900 home office setups for small business owners. Whatever the use case, the builds are reliable, well-cooled, and honestly priced. No fluff, no upsells.",
    popularBuilds: ["Budget Home PCs", "Mid-Range Gaming Builds", "Small Business Workstations"],
    faq: [
      {
        q: "What's the most reliable PC you can build for everyday home use?",
        a: "Reliability comes from quality components and good thermal management. A Ryzen 5 or Core i5, 16GB RAM, and a 1TB SSD from a reputable brand will serve a family well for 6–8 years. We don't use cheap no-name parts.",
      },
      {
        q: "Can you build something good for photo editing and basic video work?",
        a: "Yes — a mid-range build with a fast CPU and 32GB RAM handles Lightroom and basic video editing well. If you plan to do heavier video work, we'd recommend adding a dedicated GPU to the spec.",
      },
      {
        q: "What component brands do you typically use?",
        a: "We spec from brands we trust: AMD and Intel for CPUs, ASUS, Gigabyte, and MSI for motherboards, Corsair and G.Skill for RAM, and Samsung or WD Black for storage. No cheap no-name parts, ever.",
      },
    ],
  },
  {
    slug: "sparta",
    name: "Sparta",
    blurb:
      "Sparta is a small Christian County community where most of our customers are parents building gaming PCs for their kids, or teenagers who saved up and want their first real rig. Budget is always a consideration, and we take it seriously — no upselling, just honest builds.",
    about:
      "We know most Sparta families aren't spending $2,000 on a gaming PC for a 14-year-old. Our starter gaming builds in the $550–$800 range are designed to impress without breaking the bank. They run popular titles, look great, and are built to hold up to years of gaming sessions.",
    popularBuilds: ["Teen Starter Gaming PCs", "Budget Gaming Builds", "Family Desktops"],
    faq: [
      {
        q: "What's the minimum budget for a gaming PC that actually runs games well?",
        a: "For solid 1080p performance on popular titles, budget $600–$750. It won't max out every AAA game, but it will run Fortnite, Roblox, Minecraft, and many other titles at great frame rates.",
      },
      {
        q: "Do you build PCs for younger gamers who are just starting out?",
        a: "Yes — we love helping people get into PC gaming for the first time. We'll walk you through every option and make sure the build is appropriate for the games your kid wants to play and the budget you have.",
      },
      {
        q: "Is cable management really worth it on a budget build?",
        a: "Yes — good cable management improves airflow, which keeps temperatures lower and extends component lifespan. We do proper cable management on every build, regardless of budget level.",
      },
    ],
  },
  {
    slug: "clever",
    name: "Clever",
    blurb:
      "Clever is a small but growing community in Christian County, just a short drive from Springfield. Many Clever residents commute into the city for work and want reliable home setups — capable for remote workdays and ready for gaming in the evenings. Value-for-money is the priority.",
    about:
      "Clever customers want a lot for their dollar, and we deliver. Whether it's a $700 gaming PC that punches above its weight class or a $950 work-and-play hybrid, we build Clever-area machines with the same care and quality we put into every build.",
    popularBuilds: ["Value Gaming PCs", "Work-and-Play Builds", "Home Office Desktops"],
    faq: [
      {
        q: "Can you design a build around my exact budget?",
        a: "Always. We never go over your budget without explicit approval. Tell us the number and what you need, and we'll design the best possible build within those constraints.",
      },
      {
        q: "Is Windows included in the price?",
        a: "Windows can be included in any parts + build order at cost. During the consultation we'll ask whether you want it included or if you already have a license to transfer.",
      },
      {
        q: "What's the typical turnaround time from order to delivery?",
        a: "Parts + build orders run about 5–10 business days total: 3–7 days for parts to arrive, then 1–2 days for assembly and testing. Build-only orders are usually complete within 1–3 business days after we receive your parts.",
      },
    ],
  },
  {
    slug: "billings",
    name: "Billings",
    blurb:
      "Billings is a small rural community in Christian County where practical value matters more than anything. Many of our Billings customers come to us after being burned by slow prebuilt PCs from big box stores, ready for something that's actually fast, actually reliable, and worth the investment.",
    about:
      "We tell every Billings customer the same thing: a custom build will outlast and outperform a same-priced prebuilt every time. We'll prove it with a transparent parts list and a finished machine that speaks for itself.",
    popularBuilds: ["Custom Prebuilt Alternatives", "Entry-Level Gaming PCs", "Family Home Desktops"],
    faq: [
      {
        q: "Is a custom PC actually worth it over a prebuilt from Best Buy?",
        a: "Consistently, yes. Prebuilts at major retailers cut corners on power supplies, storage, and cooling. A custom build at the same price gives you better components, better thermal management, and a machine built to last 6–8 years.",
      },
      {
        q: "I have no idea what parts I need — how do I get started?",
        a: "That's exactly what we're here for. Just tell us what you'll use the PC for and what your budget is. We'll handle every decision from there and explain every choice in plain language before you approve anything.",
      },
      {
        q: "Do you deliver finished PCs to Billings?",
        a: "Yes — we can arrange delivery after the build is complete. Fill out the contact form and mention you're in Billings, and we'll work out the logistics together.",
      },
    ],
  },
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
