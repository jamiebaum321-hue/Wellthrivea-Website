/**
 * Wellthrivea health blog content.
 *
 * Editorial compliance rules (per NY physician-advertising law and the site's
 * compliance guide): educational content only — no testimonials, no
 * guarantees, no superiority claims, no outcome promises, and a medical
 * disclaimer on every post. Posts must direct emergencies to 911.
 */

export interface BlogBlock {
  type: "p" | "h2" | "ul";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  categoryId: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  excerpt: string;
  author: { name: string; role: string; avatar: string };
  body: BlogBlock[];
}

export const BLOG_CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "care-navigation", label: "Care Navigation" },
  { id: "wellness", label: "Wellness" },
  { id: "smart-care", label: "Smart Care" },
  { id: "billing", label: "Billing & Insurance" },
  { id: "community", label: "Community" },
] as const;

const AUTHOR = {
  name: "Wellthrivea Editorial Team",
  role: "Health education",
  avatar: "/img/logo-mark.png",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "urgent-care-vs-emergency-room",
    title: "Urgent care vs. the ER: how to choose in 60 seconds",
    categoryId: "care-navigation",
    category: "Care Navigation",
    date: "2026-08-10",
    readMinutes: 4,
    excerpt:
      "A simple framework for one of the most common health decisions New Yorkers face: where should I go right now?",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "When you're sick or hurt, the last thing you want is a research project. Here's the simplest version of the decision: emergency departments exist for conditions that could threaten your life or a limb. Urgent care exists for everything that can't wait for a regular appointment but isn't life-threatening.",
      },
      { type: "h2", text: "Go to the ER — or call 911 — for" },
      {
        type: "ul",
        items: [
          "Chest pain or pressure",
          "Difficulty breathing",
          "Stroke symptoms: face drooping, arm weakness, slurred speech",
          "Severe bleeding or major trauma",
          "Loss of consciousness, severe confusion, or seizures",
          "Any symptom that feels like it could be life-threatening",
        ],
      },
      { type: "h2", text: "Urgent care is a fit for" },
      {
        type: "ul",
        items: [
          "Colds, flu, sore throats, and earaches",
          "Minor cuts, sprains, and strains",
          "Mild fevers and rashes",
          "Urinary symptoms",
          "Testing, vaccines, and physicals",
        ],
      },
      {
        type: "p",
        text: "The gray zone is real: if you're genuinely unsure whether something is serious, choose the emergency department or call 911. No urgent care visit is worth delaying emergency treatment.",
      },
      {
        type: "p",
        text: "One more option worth knowing: your primary care doctor. For anything that can wait a day or two — medication questions, ongoing symptoms, chronic condition check-ins — your own doctor knows your history best.",
      },
    ],
  },
  {
    slug: "what-to-bring-to-a-medical-appointment",
    title: "What to bring to any medical appointment",
    categoryId: "care-navigation",
    category: "Care Navigation",
    date: "2026-08-03",
    readMinutes: 3,
    excerpt:
      "Five things that make any medical visit smoother — at any practice, anywhere.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "A little preparation turns a stressful appointment into a manageable one. Whether you're seeing your own doctor, a specialist, or a walk-in clinic, this short list applies almost everywhere.",
      },
      { type: "h2", text: "The checklist" },
      {
        type: "ul",
        items: [
          "Photo ID — a driver's license, IDNYC, passport, or similar",
          "Your insurance card, if you have one (physical or in your phone's wallet app)",
          "A list of medications you take, including doses — a photo of the bottles works",
          "Your allergy list, especially medication allergies",
          "A payment method for any copay or self-pay charge",
        ],
      },
      { type: "h2", text: "Helpful extras" },
      {
        type: "ul",
        items: [
          "A timeline of your symptoms — when they started and what's changed",
          "The name of your primary care doctor, so records can be shared with your consent",
          "For kids: their vaccination record if the visit might involve school forms",
        ],
      },
      {
        type: "p",
        text: "If you don't have some of these, go anyway — practices handle missing paperwork every day. And if your symptoms are severe or rapidly getting worse, skip the checklist and call 911 or go to the nearest emergency department.",
      },
    ],
  },
  {
    slug: "flu-season-nyc-prevention",
    title: "Flu season in NYC: practical prevention that actually fits city life",
    categoryId: "wellness",
    category: "Wellness",
    date: "2026-07-28",
    readMinutes: 5,
    excerpt:
      "Subways, elevators, and shared everything — how to lower your odds of catching the flu in the five boroughs.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "Living in New York means sharing air with eight million neighbors. You can't avoid every germ on the L train, but a few habits meaningfully lower your risk during flu season — no dramatic lifestyle changes required.",
      },
      { type: "h2", text: "The habits with the best evidence" },
      {
        type: "ul",
        items: [
          "Get a seasonal flu vaccine — the CDC recommends one for most people six months and older; ask your clinician what's right for you",
          "Wash your hands when you get home, before eating, and after transit",
          "Avoid touching your face with unwashed hands, especially eyes, nose, and mouth",
          "Stay home when you're sick — fever-free for 24 hours without medication is a common return benchmark",
          "Keep up sleep and hydration; run-down bodies fight infections less effectively",
        ],
      },
      { type: "h2", text: "When it might be more than a cold" },
      {
        type: "p",
        text: "Flu tends to hit fast and hard: fever, body aches, exhaustion, and a dry cough within a day or so. Colds usually creep in gently with a sore throat and congestion. Rapid testing can help tell them apart when treatment decisions depend on it — your clinician can advise which test makes sense.",
      },
      {
        type: "p",
        text: "Seek immediate emergency care (call 911) for trouble breathing, chest pain, confusion, bluish lips, or signs of severe dehydration. For everything milder, rest, fluids, and time do a great deal of the work.",
      },
    ],
  },
  {
    slug: "telehealth-101",
    title: "Telehealth 101: when a video visit is enough",
    categoryId: "smart-care",
    category: "Smart Care",
    date: "2026-07-21",
    readMinutes: 4,
    excerpt:
      "Video visits are here to stay. Here's what they do well, what they can't do, and how to get the most from one.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "Telehealth went from novelty to normal in just a few years, and for good reason: for the right kind of visit, it saves the trip without shortchanging the care. The key phrase is 'the right kind of visit.'",
      },
      { type: "h2", text: "What video visits handle well" },
      {
        type: "ul",
        items: [
          "Follow-up questions after an in-person visit",
          "Reviewing test results and next steps",
          "Visible concerns like many rashes and insect bites",
          "Medication questions and some refill conversations",
          "Deciding whether an in-person visit is needed at all",
        ],
      },
      { type: "h2", text: "What still needs hands-on care" },
      {
        type: "ul",
        items: [
          "Anything requiring a physical exam, testing, or a procedure",
          "Injuries that may need imaging",
          "Ear pain that needs a look inside the ear",
          "Any potentially serious or rapidly worsening symptom — that's 911 or the emergency department, never a video call",
        ],
      },
      { type: "h2", text: "Getting the most from a video visit" },
      {
        type: "p",
        text: "Find a quiet, well-lit spot. Write down your symptoms and questions beforehand. Have your medication list handy. And if your clinician says you need to be seen in person, treat that as the plan — telehealth works best as a front door, not a locked gate.",
      },
      {
        type: "p",
        text: "Telemedicine is a core part of Wellthrivea's planned services; details will be confirmed before launch.",
      },
    ],
  },
  {
    slug: "understanding-good-faith-estimates",
    title: "Understanding your right to a Good Faith Estimate",
    categoryId: "billing",
    category: "Billing & Insurance",
    date: "2026-07-14",
    readMinutes: 4,
    excerpt:
      "If you're uninsured or paying cash, federal law gives you the right to know expected charges before care. Here's how it works.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "Since 2022, the federal No Surprises Act has given uninsured and self-pay patients a concrete right: a Good Faith Estimate (GFE) of expected charges, in writing, before scheduled care. It's one of the most useful and least known patient protections.",
      },
      { type: "h2", text: "The basics" },
      {
        type: "ul",
        items: [
          "If you're uninsured or choose not to use insurance, you can ask any provider for a Good Faith Estimate before scheduled services",
          "The estimate should include expected charges for the primary service and reasonably expected related services",
          "For scheduled care, providers must give it to you proactively within specific timeframes",
          "Keep your copy — it's your reference point for the final bill",
        ],
      },
      { type: "h2", text: "If the bill is much higher than the estimate" },
      {
        type: "p",
        text: "If your final bill is at least $400 more than your Good Faith Estimate, you may be able to dispute the bill through a federal patient-provider dispute resolution process. Information is available at cms.gov/nosurprises or by calling 1-800-985-3059.",
      },
      {
        type: "p",
        text: "New York adds its own protections, including the right to know an estimated amount an out-of-network provider would bill for non-emergency services on request. Our No Surprises Act page collects all of these rights in one place — and once Wellthrivea opens, Good Faith Estimates will be part of how we do business, not a form you have to hunt for.",
      },
    ],
  },
  {
    slug: "our-brooklyn-neighborhood",
    title: "Getting to know our Brooklyn neighborhood",
    categoryId: "community",
    category: "Community",
    date: "2026-07-07",
    readMinutes: 3,
    excerpt:
      "Why we chose Brooklyn for Wellthrivea's first home base — and what we're learning from the neighborhood as we build.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "Ask New Yorkers about our corner of Brooklyn and you'll hear about front gardens, block associations, and some of the deepest Caribbean-American communities in the country. These are neighborhoods of homeowners and families, of Sunday cookouts and packed church halls — proudly diverse, deeply rooted, and, like much of the borough, historically underserved by convenient, connected health care.",
      },
      {
        type: "p",
        text: "That last part is why we're here. When care is a long bus ride away, small problems get postponed until they're bigger ones. A neighborhood care network — one that comes to your home, your screen, and your community events — can change the math of getting seen.",
      },
      { type: "h2", text: "What we're building toward" },
      {
        type: "ul",
        items: [
          "A brand-new, accessible home base designed for the neighborhood",
          "A team that reflects the community it serves, with local hiring as a founding principle",
          "Free language assistance services, published before we open",
          "Outreach and health education across Brooklyn and the greater five boroughs",
        ],
      },
      {
        type: "p",
        text: "We'll share construction milestones, hiring news, and the address reveal with our email list first. If you live in Brooklyn or anywhere in the five boroughs, we'd love to have you along for the build.",
      },
    ],
  },
  {
    slug: "heat-safety-nyc-summer",
    title: "Heat, hydration, and the NYC summer: a practical guide",
    categoryId: "wellness",
    category: "Wellness",
    date: "2026-06-30",
    readMinutes: 4,
    excerpt:
      "Brick buildings, subway platforms, and heat waves are a rough combination. How to stay ahead of heat illness.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "New York summers concentrate heat in ways the thermometer understates — subway platforms run hotter than the street, and brick apartments hold the day's heat well into the night. Heat illness is common, predictable, and largely preventable.",
      },
      { type: "h2", text: "Staying ahead of the heat" },
      {
        type: "ul",
        items: [
          "Drink water steadily through the day — thirst lags behind need",
          "Plan outdoor errands for mornings and evenings during heat waves",
          "Use the city's cooling centers when your home can't stay cool (call 311)",
          "Check on older neighbors and anyone without air conditioning",
          "Never leave children or pets in parked cars, even briefly",
        ],
      },
      { type: "h2", text: "Know the warning signs" },
      {
        type: "p",
        text: "Heat exhaustion looks like heavy sweating, weakness, dizziness, headache, and nausea — move to a cool place, sip water, and cool the skin. Heat stroke is an emergency: confusion, hot dry skin, fainting, or a body temperature of 103°F or higher means call 911 immediately.",
      },
      {
        type: "p",
        text: "People taking certain medications, older adults, young children, and outdoor workers face higher risk. If that's you or someone you love, a conversation with a clinician before the hottest weeks is time well spent.",
      },
    ],
  },
  {
    slug: "digital-check-in-what-to-expect",
    title: "Digital check-in and virtual queues: what they are, and what they will look like here",
    categoryId: "smart-care",
    category: "Smart Care",
    date: "2026-06-23",
    readMinutes: 3,
    excerpt:
      "Less clipboard, more care. How modern digital check-in works and how we're designing ours with privacy first.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "If you've flown in the last decade, you've watched check-in move from counters to kiosks to your phone. Health care is making the same move — carefully, because health information deserves protections a boarding pass doesn't need.",
      },
      { type: "h2", text: "How modern check-in works" },
      {
        type: "ul",
        items: [
          "Pre-registration from your phone: identity, insurance, and consent forms completed before you arrive",
          "A virtual queue that shows your place in line, so you can wait at home instead of in a waiting room",
          "Self-service check-in at our future Brooklyn home base for those who prefer to do everything on site",
          "Staff at the desk for anyone who would rather talk to a person — always",
        ],
      },
      { type: "h2", text: "The privacy part" },
      {
        type: "p",
        text: "Every system that touches patient information at Wellthrivea is being HIPAA-reviewed before adoption, with Business Associate Agreements where required. The same philosophy governs this website: no advertising pixels, no analytics trackers, no session recording. The smartest technology is the kind that respects you.",
      },
      {
        type: "p",
        text: "Our digital check-in tools are planned for launch, and we'll publish details as they're finalized. The confirmed experience will be described here before you ever use it.",
      },
    ],
  },
  {
    slug: "how-to-read-an-explanation-of-benefits",
    title: "How to read an Explanation of Benefits (EOB) without a headache",
    categoryId: "billing",
    category: "Billing & Insurance",
    date: "2026-08-17",
    readMinutes: 5,
    excerpt:
      "That confusing document that says \"THIS IS NOT A BILL\"? It's actually one of the most useful papers in American health care — once you know how to read it.",
    author: AUTHOR,
    body: [
      {
        type: "p",
        text: "A few weeks after almost any medical visit, an envelope (or portal notification) arrives from your health plan: the Explanation of Benefits, or EOB. Most people glance at it, see numbers that don't match anything, and file it in a drawer. That's a missed opportunity — the EOB is your plan's own accounting of what happened, and it's the single best tool for catching billing mistakes.",
      },
      { type: "h2", text: "First things first: it's not a bill" },
      {
        type: "p",
        text: "An EOB is a report, not an invoice. It tells you what your provider charged, what your plan agreed to pay, and what — if anything — you may owe. The actual bill, if there is one, comes separately from the provider. Never pay directly from an EOB.",
      },
      { type: "h2", text: "The five numbers that matter" },
      {
        type: "ul",
        items: [
          "Amount billed — the provider's full charge before any insurance discounts. Often dramatically higher than what anyone actually pays.",
          "Allowed amount — the discounted rate your plan negotiated. This is the real price for in-network care.",
          "Plan paid — what your insurance covered.",
          "Your responsibility — your copay, coinsurance, or deductible portion. This should match any bill the provider later sends you.",
          "Deductible tracker — many EOBs show how much of your annual deductible you've used. Worth watching, especially late in the year.",
        ],
      },
      { type: "h2", text: "Three checks worth 60 seconds" },
      {
        type: "ul",
        items: [
          "Do the dates and services match a visit you actually had? Billing errors and even fraud are often caught by patients noticing visits that never happened.",
          "Was the claim processed in-network when you saw an in-network provider? Network processing mistakes happen and can be appealed.",
          "Does the provider's bill match the \"your responsibility\" number? If a bill is higher than the EOB says you owe, call your plan before paying.",
        ],
      },
      { type: "h2", text: "If something looks wrong" },
      {
        type: "p",
        text: "Call the member-services number on your insurance card and ask them to walk through the claim line by line — they are required to explain it. If you disagree with how a claim was processed, you have the right to appeal, and the EOB itself must include instructions for doing so. New Yorkers can also get free help from Community Health Advocates at 888-614-5400.",
      },
      {
        type: "p",
        text: "One good habit: keep EOBs (paper or PDF) for at least a year. Alongside protections like Good Faith Estimates and surprise-billing laws, a small EOB file turns you from a spectator of your own health-care costs into an informed participant.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
