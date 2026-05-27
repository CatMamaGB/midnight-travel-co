export interface FunnelCard {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export interface ResourceLink {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StrategyItem {
  title: string;
  description: string;
}

export type PlanningToolSlug =
  | "budget-calculator"
  | "dining-guide"
  | "packing-lists"
  | "crowd-calendar"
  | "ride-height-guide"
  | "lightning-lane-guide";

export interface PlanningToolGuide {
  slug: PlanningToolSlug;
  bestFor: string;
  keyTakeaways: string[];
  framework: StrategyItem[];
  commonMistakes: string[];
  faqItems: FAQItem[];
  relatedLinks: ResourceLink[];
  nextSteps: string[];
}

export interface OfferCard {
  id: string;
  title: string;
  description: string;
  whoItsFor: string;
  timeline: string;
  offerDetails: string[];
  eligibility: string[];
  stackingTips: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  relatedLinks: ResourceLink[];
}

export const destinationCards: FunnelCard[] = [
  {
    title: "Walt Disney World",
    description:
      "Compare park styles, resort tiers, and itinerary pacing for a smoother Orlando Disney vacation.",
    href: "/destinations/disney-world",
    ctaLabel: "Explore Disney World",
  },
  {
    title: "Disneyland",
    description:
      "Find out when Disneyland is the better fit for shorter trips, adults-only escapes, and first-timers.",
    href: "/destinations/disneyland",
    ctaLabel: "Explore Disneyland",
  },
  {
    title: "Universal Orlando",
    description:
      "Build a trip around thrill rides, Express Pass strategy, and resort options that match your pace.",
    href: "/destinations/universal-orlando",
    ctaLabel: "Explore Universal Orlando",
  },
  {
    title: "Universal Hollywood",
    description:
      "Plan a studio-focused California getaway with curated park strategy and city add-on ideas.",
    href: "/destinations/universal-hollywood",
    ctaLabel: "Explore Universal Hollywood",
  },
  {
    title: "Disney Cruise Line",
    description:
      "Pair Disney magic with ocean itineraries and concierge-level cruise planning support.",
    href: "/destinations/disney-cruise-line",
    ctaLabel: "Explore Disney Cruise Line",
  },
  {
    title: "Aulani",
    description:
      "Blend resort relaxation with Disney service standards for a premium Hawaii family escape.",
    href: "/destinations/aulani",
    ctaLabel: "Explore Aulani",
  },
];

export const vacationTypeCards: FunnelCard[] = [
  {
    title: "Families With Kids",
    description:
      "Age-aware park plans, flexible dining, and nap-friendly pacing built around your family dynamic.",
    href: "/vacation-types/families",
    ctaLabel: "Plan a Family Trip",
  },
  {
    title: "Adults Only Trips",
    description:
      "Elevated resort and dining recommendations for couples and friends who want a polished trip.",
    href: "/vacation-types/adults-only",
    ctaLabel: "Plan an Adults-Only Trip",
  },
  {
    title: "Luxury Theme Park Travel",
    description:
      "Premium resort, VIP tour, and concierge planning options for travelers who value elevated details.",
    href: "/vacation-types/luxury",
    ctaLabel: "Plan a Luxury Trip",
  },
  {
    title: "First-Time Visitors",
    description:
      "Guided destination selection and park strategy so you can avoid overwhelm and plan confidently.",
    href: "/vacation-types/first-time-visitors",
    ctaLabel: "Plan Your First Trip",
  },
  {
    title: "Honeymoons",
    description:
      "Romance-forward resort, dining, and activity recommendations that still keep logistics easy.",
    href: "/vacation-types/honeymoons",
    ctaLabel: "Plan a Honeymoon",
  },
  {
    title: "Group Travel",
    description:
      "Structured planning support for milestones, reunions, and corporate trips with multiple stakeholders.",
    href: "/vacation-types/group-travel",
    ctaLabel: "Plan Group Travel",
  },
];

export const planningToolCards: FunnelCard[] = [
  {
    title: "Budget Calculator",
    description:
      "Estimate realistic trip ranges for Disney and Universal vacations by party size and travel style.",
    href: "/planning-tools/budget-calculator",
    ctaLabel: "Open Calculator",
  },
  {
    title: "Dining Guide",
    description:
      "Identify reservation priorities and dining strategy by destination, age range, and trip goals.",
    href: "/planning-tools/dining-guide",
    ctaLabel: "View Dining Guide",
  },
  {
    title: "Packing Lists",
    description:
      "Use practical family, adults-only, and summer/rainy season checklists for smoother park days.",
    href: "/planning-tools/packing-lists",
    ctaLabel: "View Packing Lists",
  },
  {
    title: "Crowd Calendar",
    description:
      "Learn which seasons and event windows usually offer better park flow and value opportunities.",
    href: "/planning-tools/crowd-calendar",
    ctaLabel: "View Crowd Guide",
  },
  {
    title: "Ride Height Guide",
    description:
      "Check attraction height requirements to set better expectations before your family arrives.",
    href: "/planning-tools/ride-height-guide",
    ctaLabel: "View Ride Heights",
  },
  {
    title: "Lightning Lane Guide",
    description:
      "Understand where Lightning Lane saves time and where other strategies create better value.",
    href: "/planning-tools/lightning-lane-guide",
    ctaLabel: "View Guide",
  },
];

export const specialOfferCards: OfferCard[] = [
  {
    id: "disney-discounts",
    title: "Disney Discounts",
    description:
      "Limited-time room and ticket combinations for Walt Disney World and Disneyland select dates.",
    whoItsFor: "Families and first-time Disney travelers balancing value with strong on-site convenience.",
    timeline: "Rolling offers, updated weekly",
    offerDetails: [
      "Most Disney promotions focus on room discounts, package perks, or dining-credit style incentives.",
      "The strongest value often appears in shoulder seasons where inventory is wider and date flexibility pays off.",
      "Some promotions are resort-tier specific, so matching your hotel category matters as much as the headline percentage.",
    ],
    eligibility: [
      "Eligible travel windows and blackout dates apply.",
      "Offer inventory can close before official end dates.",
      "Room type and minimum-night requirements may vary by promotion.",
    ],
    stackingTips: [
      "Compare package value against room-only discounts before committing.",
      "Pair lower-crowd dates with promotions to improve both value and park experience.",
      "Lock high-priority dining and ride strategy early when a discount window opens.",
    ],
    primaryHref: "/destinations/disney-world",
    primaryLabel: "Explore Disney Destination Strategy",
    secondaryHref:
      "/contact?source=special-offers&destination=Walt%20Disney%20World&tripType=families",
    secondaryLabel: "Request Disney Offer Match",
    relatedLinks: [
      { label: "Disneyland Guide", href: "/destinations/disneyland" },
      { label: "First-Time Visitor Planning", href: "/vacation-types/first-time-visitors" },
      { label: "Lightning Lane Guide", href: "/planning-tools/lightning-lane-guide" },
    ],
  },
  {
    id: "universal-deals",
    title: "Universal Deals",
    description:
      "Bundle options with preferred hotels and ticket packages for Universal Orlando and Hollywood.",
    whoItsFor: "Travelers prioritizing thrill rides, efficient park days, and bundled package value.",
    timeline: "Seasonal and event-driven",
    offerDetails: [
      "Universal deal strength can shift quickly around school breaks and major events.",
      "Hotel bundles sometimes create stronger value than ticket-only promotions, especially for multi-day trips.",
      "Express Pass and early-entry access can materially change real trip value beyond room price alone.",
    ],
    eligibility: [
      "Participating hotels and room categories are limited.",
      "Event-driven dates may have stricter booking windows.",
      "Some packages require ticket minimums or specific park combinations.",
    ],
    stackingTips: [
      "Compare express-inclusive hotel options against separately priced passes.",
      "Use crowd season guidance before selecting event-heavy travel windows.",
      "Prioritize attraction strategy planning early for high-demand ride periods.",
    ],
    primaryHref: "/destinations/universal-orlando",
    primaryLabel: "Explore Universal Strategy",
    secondaryHref:
      "/contact?source=special-offers&destination=Universal%20Orlando&tripType=group-travel",
    secondaryLabel: "Request Universal Offer Match",
    relatedLinks: [
      { label: "Universal Hollywood Guide", href: "/destinations/universal-hollywood" },
      { label: "Crowd Calendar Guide", href: "/planning-tools/crowd-calendar" },
      { label: "Group Travel Planning", href: "/vacation-types/group-travel" },
    ],
  },
  {
    id: "seasonal-offers",
    title: "Seasonal Offers",
    description:
      "Holiday, spring break, and shoulder-season pricing opportunities based on current inventory.",
    whoItsFor: "Flexible-date travelers who can choose windows with better rates and park pacing.",
    timeline: "Quarterly refresh",
    offerDetails: [
      "Seasonal offers are strongest when paired with realistic expectations about weather, events, and crowd behavior.",
      "Shoulder seasons often combine moderate crowds with better package flexibility.",
      "Peak holiday windows can still produce value if your park strategy offsets demand pressure.",
    ],
    eligibility: [
      "Travel dates must align to qualifying promotional windows.",
      "Holiday periods may include partial blackout dates.",
      "Inventory-based pricing can change during planning and checkout cycles.",
    ],
    stackingTips: [
      "Start with crowd and weather fit before choosing based on price alone.",
      "Use destination comparisons to find stronger seasonal value by location.",
      "Build dining and ride priorities around peak-day pressure points.",
    ],
    primaryHref: "/planning-tools/crowd-calendar",
    primaryLabel: "Use Crowd Calendar First",
    secondaryHref:
      "/contact?source=special-offers&tripType=first-time-visitors&interests=seasonal",
    secondaryLabel: "Match My Dates to Current Offers",
    relatedLinks: [
      { label: "First-Time Visitor Trips", href: "/vacation-types/first-time-visitors" },
      { label: "Budget Calculator", href: "/planning-tools/budget-calculator" },
      { label: "Disney World Destination Guide", href: "/destinations/disney-world" },
    ],
  },
  {
    id: "kids-free-promos",
    title: "Kids Free Promos",
    description:
      "Select promotions that lower per-child package cost for qualifying family travel windows.",
    whoItsFor: "Families with children who need age-aware planning and strong value alignment.",
    timeline: "Date restricted",
    offerDetails: [
      "Kids-focused offers are often tied to specific room categories, travel windows, or package components.",
      "The most practical savings appear when resort fit, park pacing, and transportation are considered together.",
      "Family promo value depends on child ages, party size, and ride eligibility planning.",
    ],
    eligibility: [
      "Child age thresholds and occupancy rules apply.",
      "Eligible packages may require minimum-night stays.",
      "Promotions can be limited to select room categories.",
    ],
    stackingTips: [
      "Align ride-height strategy early to avoid overpaying for days with limited usable attractions.",
      "Choose family-focused resort locations to reduce transit friction.",
      "Pair promo windows with manageable crowd periods for easier pacing.",
    ],
    primaryHref: "/vacation-types/families",
    primaryLabel: "Build a Family-First Plan",
    secondaryHref: "/contact?source=special-offers&tripType=families",
    secondaryLabel: "Check Family Offer Eligibility",
    relatedLinks: [
      { label: "Ride Height Guide", href: "/planning-tools/ride-height-guide" },
      { label: "Packing Lists", href: "/planning-tools/packing-lists" },
      { label: "Disney World Guide", href: "/destinations/disney-world" },
    ],
  },
  {
    id: "dining-plans",
    title: "Dining Plan Offers",
    description:
      "Dining-credit and plan opportunities paired with park and resort recommendations for your group.",
    whoItsFor: "Travelers who want signature meals without overbooking or disrupting park flow.",
    timeline: "Offer-specific windows",
    offerDetails: [
      "Dining-focused promotions can improve value when your itinerary includes premium or high-demand reservations.",
      "Not every dining offer is a budget win; pacing and park location still determine real trip value.",
      "Dining credits work best when matched to your group's age range and meal style.",
    ],
    eligibility: [
      "Dining plan incentives may require package bookings.",
      "Participating restaurants and redemption windows vary by offer.",
      "Advance reservation timing still applies regardless of promotion type.",
    ],
    stackingTips: [
      "Build one anchor meal per day and keep remaining meals flexible.",
      "Compare dining offer value against room discount alternatives.",
      "Coordinate dining windows with ride priority timing to avoid long transit gaps.",
    ],
    primaryHref: "/planning-tools/dining-guide",
    primaryLabel: "Build Dining Strategy First",
    secondaryHref: "/contact?source=special-offers&interests=dining",
    secondaryLabel: "Request Dining Offer Match",
    relatedLinks: [
      { label: "Budget Calculator", href: "/planning-tools/budget-calculator" },
      { label: "Adults-Only Vacation Type", href: "/vacation-types/adults-only" },
      { label: "Disneyland Destination Guide", href: "/destinations/disneyland" },
    ],
  },
];

export const planningToolGuides: Record<PlanningToolSlug, PlanningToolGuide> = {
  "budget-calculator": {
    slug: "budget-calculator",
    bestFor:
      "Travelers who need realistic low/high budget ranges before selecting a destination, resort tier, or trip length.",
    keyTakeaways: [
      "Use ranges, not single-point estimates, so your plan can absorb offer and inventory changes.",
      "Trip length and travel style often move total spend more than small line-item savings.",
      "A budget framework helps you compare Disney and Universal options with less guesswork.",
    ],
    framework: [
      {
        title: "Set a baseline range",
        description:
          "Start with your expected nights, party size, and destination to establish a practical floor and ceiling.",
      },
      {
        title: "Stress-test your assumptions",
        description:
          "Adjust resort tier, meal style, and park intensity to see where your budget is most sensitive.",
      },
      {
        title: "Plan with trade-offs",
        description:
          "Prioritize experiences that matter most and downgrade lower-impact categories when needed.",
      },
      {
        title: "Validate against active offers",
        description:
          "Use current promotions to confirm whether your target range still supports your preferred itinerary.",
      },
    ],
    commonMistakes: [
      "Planning around best-case pricing without room for seasonal fluctuation.",
      "Ignoring transportation and food patterns that change real daily spend.",
      "Comparing destinations without aligning trip style and ride priorities first.",
    ],
    faqItems: [
      {
        question: "How accurate is this calculator?",
        answer:
          "It gives planning ranges designed for decision-making. Final quotes vary by date, inventory, and live promotions.",
      },
      {
        question: "Should I budget before choosing a destination?",
        answer:
          "Yes. A range-first approach helps you narrow destination and resort options faster with fewer reversals.",
      },
      {
        question: "Can I still find value with peak-season travel?",
        answer:
          "Often yes, if you pair your dates with stronger strategy on park flow, dining timing, and offer matching.",
      },
    ],
    relatedLinks: [
      { label: "Special Offers Hub", href: "/special-offers" },
      { label: "Destination Comparison Hub", href: "/destinations" },
      { label: "Crowd Calendar Guide", href: "/planning-tools/crowd-calendar" },
    ],
    nextSteps: [
      "Run two estimates with different trip styles to see your realistic spread.",
      "Use destination guides to narrow to your best-fit location.",
      "Check active offers before requesting a custom quote.",
    ],
  },
  "dining-guide": {
    slug: "dining-guide",
    bestFor:
      "Families, couples, and mixed-age groups trying to balance reservation priorities with practical park flow.",
    keyTakeaways: [
      "Anchor your day with one high-priority meal, then protect flexibility.",
      "Dining is most effective when mapped to your park location and energy level.",
      "Reservation strategy should support your ride plan, not compete with it.",
    ],
    framework: [
      {
        title: "Choose anchor meals intentionally",
        description:
          "Select signature meals that fit your trip goals, then avoid overloading each day with fixed reservations.",
      },
      {
        title: "Map meals to park geography",
        description:
          "Book restaurants that reduce transit friction and support your planned attraction blocks.",
      },
      {
        title: "Balance table-service with pace",
        description:
          "Use quick-service meals on high-demand ride days to preserve momentum.",
      },
      {
        title: "Review backup options",
        description:
          "Maintain a short list of alternates in case timing or demand changes close to travel.",
      },
    ],
    commonMistakes: [
      "Booking too many reservations without considering ride priorities.",
      "Choosing meals based on hype instead of location and timing fit.",
      "Skipping rest and hydration windows during dining-heavy days.",
    ],
    faqItems: [
      {
        question: "How far in advance should I plan dining?",
        answer:
          "Priorities should be set early, especially for popular venues. Early planning gives more flexibility and better time slots.",
      },
      {
        question: "Is a dining plan always worth it?",
        answer:
          "Not always. Value depends on your meal cadence, restaurant mix, and how much table-service you truly use.",
      },
      {
        question: "Can I plan dining without over-scheduling?",
        answer:
          "Yes. One anchor meal per day plus flexible backups usually protects both pace and experience quality.",
      },
    ],
    relatedLinks: [
      { label: "Dining Plan Offers", href: "/special-offers#dining-plans" },
      { label: "Budget Calculator", href: "/planning-tools/budget-calculator" },
      { label: "Adults-Only Vacation Type", href: "/vacation-types/adults-only" },
    ],
    nextSteps: [
      "Pick your highest-value dining priorities by day type.",
      "Align reservations to park sequence and transport realities.",
      "Use current dining-related promotions before finalizing your package.",
    ],
  },
  "packing-lists": {
    slug: "packing-lists",
    bestFor:
      "Travelers who want fewer in-park disruptions by packing based on weather, age range, and itinerary style.",
    keyTakeaways: [
      "Pack by daily use-case, not just by category, to avoid overpacking.",
      "Weather resilience is a major quality-of-life factor for park-heavy trips.",
      "Family and adults-only trips require different quick-access systems.",
    ],
    framework: [
      {
        title: "Build by day type",
        description:
          "Prepare kits for full park days, travel days, and recovery days rather than one generic list.",
      },
      {
        title: "Plan for weather shifts",
        description:
          "Use rain and heat contingencies so short weather events do not derail your schedule.",
      },
      {
        title: "Separate essentials by access speed",
        description:
          "Keep high-frequency items in easy-reach pouches and low-frequency items in deeper storage.",
      },
      {
        title: "Pre-stage for morning exits",
        description:
          "Night-before prep reduces launch stress and keeps rope-drop timing realistic.",
      },
    ],
    commonMistakes: [
      "Packing for ideal weather only and ignoring rain/heat spikes.",
      "Carrying every item all day instead of rotating by itinerary.",
      "Skipping comfort and recovery items that prevent midday burnout.",
    ],
    faqItems: [
      {
        question: "How do I avoid overpacking for parks?",
        answer:
          "Use day-specific kits and keep only high-frequency essentials on you. Rotate the rest by itinerary.",
      },
      {
        question: "What changes most between family and adults-only packing?",
        answer:
          "Families usually need faster access to hydration, comfort, and backup clothing; adults-only trips can optimize for lighter carry and dining transitions.",
      },
      {
        question: "Should I pack differently for Disney vs Universal?",
        answer:
          "Core essentials overlap, but ride intensity and walking patterns can change footwear, storage, and weather prep priorities.",
      },
    ],
    relatedLinks: [
      { label: "Family Vacation Planning", href: "/vacation-types/families" },
      { label: "Ride Height Guide", href: "/planning-tools/ride-height-guide" },
      { label: "Seasonal Offers", href: "/special-offers#seasonal-offers" },
    ],
    nextSteps: [
      "Choose your trip type list as a baseline.",
      "Layer in destination-specific weather and ride demands.",
      "Finalize a quick-access kit for each park day.",
    ],
  },
  "crowd-calendar": {
    slug: "crowd-calendar",
    bestFor:
      "Travelers with flexible dates who want to balance crowd pressure, pricing windows, and attraction access.",
    keyTakeaways: [
      "Crowd trends are directional, not guarantees, so strategy still matters.",
      "Date choice should account for weather, events, and ride priorities together.",
      "Lower crowd windows often improve value beyond just wait times.",
    ],
    framework: [
      {
        title: "Start with flexibility range",
        description:
          "Identify your possible travel windows first so you can compare date blocks objectively.",
      },
      {
        title: "Layer in event pressure",
        description:
          "Review holiday and event calendars to understand where demand can spike unexpectedly.",
      },
      {
        title: "Match dates to trip type",
        description:
          "Families, first-timers, and thrill-focused groups each benefit from different crowd conditions.",
      },
      {
        title: "Validate against current offers",
        description:
          "The best windows usually combine manageable crowds with active promotions and realistic pacing.",
      },
    ],
    commonMistakes: [
      "Choosing dates by price alone without crowd and weather fit.",
      "Treating crowd guidance as exact predictions rather than probability.",
      "Ignoring special-event impacts on evening logistics and dining demand.",
    ],
    faqItems: [
      {
        question: "Can I avoid crowds completely?",
        answer:
          "Not entirely. The goal is to reduce peak-pressure days and build a strategy that performs well under expected demand.",
      },
      {
        question: "Do lower crowd dates always mean cheaper trips?",
        answer:
          "Often, but not always. Compare promotions, resort inventory, and event schedules before final decisions.",
      },
      {
        question: "How early should I lock dates?",
        answer:
          "As soon as you confirm your preferred window and offer fit, especially for high-demand seasons.",
      },
    ],
    relatedLinks: [
      { label: "Seasonal Offers", href: "/special-offers#seasonal-offers" },
      { label: "First-Time Visitor Planning", href: "/vacation-types/first-time-visitors" },
      { label: "Universal Orlando Guide", href: "/destinations/universal-orlando" },
    ],
    nextSteps: [
      "List your two best travel windows.",
      "Compare offer availability and event pressure in each window.",
      "Finalize dates, then map rides and dining around projected demand.",
    ],
  },
  "ride-height-guide": {
    slug: "ride-height-guide",
    bestFor:
      "Families with children who want realistic attraction expectations before finalizing park-day plans.",
    keyTakeaways: [
      "Height thresholds directly affect ride lineup value and pacing.",
      "Matching parks to eligible attractions lowers frustration for younger travelers.",
      "Family plans should include fallback experiences for mixed eligibility groups.",
    ],
    framework: [
      {
        title: "Audit each child profile",
        description:
          "Track current heights and comfort level, then map likely attraction categories per park.",
      },
      {
        title: "Design mixed-eligibility plans",
        description:
          "Use rider switch and staggered attraction blocks to keep the full group engaged.",
      },
      {
        title: "Prioritize high-probability wins",
        description:
          "Front-load experiences that match your family profile to build momentum early in the day.",
      },
      {
        title: "Build backup options",
        description:
          "Keep nearby alternatives for any attraction your child opts out of in the moment.",
      },
    ],
    commonMistakes: [
      "Assuming all family attractions are suitable across age and height.",
      "Planning around headline rides before confirming eligibility.",
      "Skipping rest windows after high-stimulus ride blocks.",
    ],
    faqItems: [
      {
        question: "Do ride height requirements change?",
        answer:
          "They can be updated by operators, so verify official requirements during final trip prep.",
      },
      {
        question: "What if siblings have different eligibility?",
        answer:
          "Use split itineraries, rider switch options, and shared non-ride anchors to keep days balanced.",
      },
      {
        question: "Should ride height planning affect hotel choice?",
        answer:
          "Yes. Resort proximity and transit convenience matter more when your day includes mixed ride intensity and rest breaks.",
      },
    ],
    relatedLinks: [
      { label: "Families Vacation Type", href: "/vacation-types/families" },
      { label: "Packing Lists", href: "/planning-tools/packing-lists" },
      { label: "Kids Free Promos", href: "/special-offers#kids-free-promos" },
    ],
    nextSteps: [
      "Confirm each child height range before booking.",
      "Build attraction priority lists by park and eligibility tier.",
      "Match your final plan to family-focused offer windows.",
    ],
  },
  "lightning-lane-guide": {
    slug: "lightning-lane-guide",
    bestFor:
      "Disney travelers deciding whether skip-the-line products improve total experience value for their dates.",
    keyTakeaways: [
      "Lightning Lane value depends on crowd pressure, park goals, and party profile.",
      "It performs best when paired with strong rope-drop and midday planning.",
      "Not every day needs paid queue reduction to deliver excellent outcomes.",
    ],
    framework: [
      {
        title: "Rank must-do attractions",
        description:
          "Identify your highest-value rides first so paid access decisions target true priorities.",
      },
      {
        title: "Compare cost vs saved time",
        description:
          "Estimate likely wait-time reductions and check if savings justify spend for your group.",
      },
      {
        title: "Integrate with park sequence",
        description:
          "Reservation timing should support your planned geography, dining windows, and recovery breaks.",
      },
      {
        title: "Adjust for date conditions",
        description:
          "High-demand seasons usually increase Lightning Lane usefulness, while lower-demand dates may reduce ROI.",
      },
    ],
    commonMistakes: [
      "Buying skip-the-line access before defining ride priorities.",
      "Overloading reservations without realistic transit time between lands.",
      "Ignoring party stamina and midday downtime requirements.",
    ],
    faqItems: [
      {
        question: "Is Lightning Lane worth it for every Disney trip?",
        answer:
          "No. The best choice depends on demand levels, your attraction goals, and how aggressively you tour.",
      },
      {
        question: "Should first-timers buy it by default?",
        answer:
          "Not always. First-timers benefit most from a strategy review that weighs cost against likely ride usage.",
      },
      {
        question: "Can it reduce stress for families?",
        answer:
          "Yes, when combined with realistic pacing and age-appropriate attraction planning.",
      },
    ],
    relatedLinks: [
      { label: "Disney World Destination Guide", href: "/destinations/disney-world" },
      { label: "Disney Discounts", href: "/special-offers#disney-discounts" },
      { label: "First-Time Visitor Planning", href: "/vacation-types/first-time-visitors" },
    ],
    nextSteps: [
      "Define your must-do attractions by park day.",
      "Compare likely wait-time pressure for your travel window.",
      "Decide where Lightning Lane adds measurable value to your itinerary.",
    ],
  },
};

export const planningProcess = [
  {
    title: "Tell Us About Your Trip",
    description:
      "Share destination ideas, travel dates, budget range, and who is traveling in your party.",
  },
  {
    title: "We Build Recommendations",
    description:
      "We compare destinations, resorts, and itinerary structures based on your travel style.",
  },
  {
    title: "We Finalize & Book",
    description:
      "Once your package direction is approved, we lock in reservations and map your strategy.",
  },
  {
    title: "You Travel With Support",
    description:
      "You leave with a clear plan and advisor support for updates, tips, and last-mile guidance.",
  },
] as const;

export const tripTypeTestimonials = [
  {
    type: "Families",
    quote:
      "Our Disney World trip with a 4-year-old and 8-year-old felt effortless. The pacing, dining, and park strategy were exactly what we needed.",
    author: "Jenna P.",
  },
  {
    type: "Adults Only",
    quote:
      "We wanted EPCOT, Universal, and great restaurants without overplanning. The recommendations were spot on and easy to follow.",
    author: "Kim & Alex",
  },
  {
    type: "Group Travel",
    quote:
      "Planning a 14-person celebration seemed impossible until we had a clear itinerary and booking strategy. It ran smoothly start to finish.",
    author: "The Campbell Family",
  },
] as const;
