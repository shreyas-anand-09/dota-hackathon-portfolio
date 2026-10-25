export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  statusType: 'achievement' | 'in-progress';
  category: string;
  tags: string[];
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  contributionOrStatus: string;
  technologies: string[];
  metricsOrOutcome: string;
}

export interface Achievement {
  id: string;
  number: string;
  title: string;
  organization: string;
  context: string;
  badge: string;
  description: string;
  verifiedDetails: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  roleTitle: string;
  summary: string;
  capabilities: {
    name: string;
    level: string;
    description: string;
  }[];
  appliedProjects: string[];
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Shreyas Anand",
    identityLine: "SHREYAS ANAND / BITS PILANI, HYDERABAD",
    headline: "BUILT TO BUILD.",
    supportingCopy: "Mechanical engineering student. Python developer. Hackathon winner. Always thinking about the next thing to build.",
    institution: "BITS Pilani, Hyderabad Campus",
    degree: "First-Year Mechanical Engineering",
    origin: "Palakkad, Kerala",
    formativeLocation: "Liverpool, UK (9 Years)",
    email: "shreyas.anand@hyderabad.bits-pilani.ac.in", // Central editable contact
    githubPlaceholder: "https://github.com",
    linkedinPlaceholder: "https://linkedin.com",
    statusBadge: "SYSTEM STATUS: RACING ACTIVE // ATMOS 26 CHAMPION",
  },
  
  navigation: [
    { label: "GRID", href: "#hero", sector: "S1" },
    { label: "ABOUT", href: "#about", sector: "S2" },
    { label: "GARAGE", href: "#garage", sector: "S3" },
    { label: "F1 EXPERIENCE", href: "#f1-experience", sector: "S4" },
    { label: "LIVERPOOL FC", href: "#liverpool", sector: "S5" },
    { label: "ACHIEVEMENTS", href: "#achievements", sector: "S6" },
    { label: "SKILLS", href: "#skills", sector: "S7" },
    { label: "PLAYGROUND", href: "#playground", sector: "S8" },
    { label: "CONTACT", href: "#contact", sector: "S9" },
  ],

  journey: [
    {
      step: "01",
      location: "Palakkad, Kerala",
      period: "Roots & Cultural Anchor",
      coordinates: "10.7867° N, 76.6548° E",
      description: "Origin point. The grounding in curiosity, analytical observation, and early fascination with how mechanical systems behave.",
      tag: "ORIGIN",
    },
    {
      step: "02",
      location: "Liverpool, United Kingdom",
      period: "9 Formative Years",
      coordinates: "53.4084° N, 2.9916° W",
      description: "Nine years immersed in British motorsport weekends, the relentless grit of Anfield and Liverpool FC, and foundational programming literacy.",
      tag: "PERSPECTIVE",
    },
    {
      step: "03",
      location: "BITS Pilani, Hyderabad",
      period: "Present Day — B.E. Mechanical",
      coordinates: "17.5449° N, 78.5718° E",
      description: "Currently engineering by degree and building by instinct. Diving into hackathons, intermediate Python applications, and campus-wide tools.",
      tag: "THE GRID",
    },
  ],

  f1Experience: {
    heading: "RACE WEEKEND / ALWAYS ON",
    tagline: "WHERE FLUID DYNAMICS, MILLISECOND STRATEGY, AND MECHANICAL MASTERY INTERSECT.",
    story: "Formula 1 has been a defining obsession for as long as I can remember. Living nine years in the UK, race weekends were non-negotiable. To me, motorsport isn't just speed—it is the ultimate manifestation of mechanical engineering under extreme constraints: calculating apex velocities, managing tyre thermal degradation, and optimizing pit-lane deltas.",
    telemetry: [
      { label: "CURIOSITY", value: "ALWAYS ACTIVE", metric: "12,400 RPM", status: "OPTIMAL", color: "#00E676" },
      { label: "BUILD MODE", value: "ENGAGED", metric: "DRS ACTIVE", status: "PEAK", color: "#E53935" },
      { label: "COMPETITIVE INSTINCT", value: "HIGH", metric: "-0.420s DELTA", status: "PURPLE SECTOR", color: "#E53935" },
      { label: "NEXT PROJECT", value: "LOADING", metric: "INITIALIZING", status: "IN GEAR", color: "#FFB300" },
    ],
    pitWallModes: [
      {
        id: "engineer",
        title: "ENGINEER",
        tagline: "Mechanical Foundations & Analytical Intuition",
        description: "Viewing software through the lens of engineering principles: load balancing, mechanical efficiency, thermodynamic logic, and robust structural integrity.",
        focusAreas: [
          "Thermodynamic & Mechanical Intuition",
          "Calculated Problem Deconstruction",
          "Systems Modeling & Aerodynamic Logic",
          "Physical World vs Digital Architecture",
        ],
        badge: "MECHANICAL UNDERGRAD / BITS PILANI",
      },
      {
        id: "builder",
        title: "BUILDER",
        tagline: "Intermediate Python, Campus Super-App & 2D/3D Hybrid Engines",
        description: "Turning raw ideas into running code. Not waiting for curriculum permission—building the BITS Super-App and experimenting with perspective projection in games.",
        focusAreas: [
          "Intermediate Python Scripting & Automation",
          "BITS Student Super-App (In Development)",
          "2D + 3D Hybrid Game Engine Experiments",
          "Rapid MVP Deployment & Iterative Testing",
        ],
        badge: "SOFTWARE ARCHITECT IN TRAINING",
      },
      {
        id: "competitor",
        title: "COMPETITOR",
        tagline: "Atmos 26 Champion & Relentless Execution",
        description: "Thriving under clock pressure. Winning the Synchrony Credit Analytics Hackathon proved that fast iteration, clean data modeling, and clear communication win championships.",
        focusAreas: [
          "Synchrony Credit Analytics Champion (Atmos 26)",
          "State-Level Award in Election Quiz Competition",
          "Pressure-Tested Decision Making",
          "Driven by Excellence & Financial Independence",
        ],
        badge: "HACKATHON WINNER / ATMOS 26",
      },
    ],
  },

  liverpoolFC: {
    heading: "NINE YEARS IN LIVERPOOL. A RED THAT STUCK.",
    quote: "You'll Never Walk Alone isn't just a chant; it's an engineering philosophy of collective resilience, tactical discipline, and relentless pressing until the whistle blows.",
    description: "Living nine formative years in Liverpool left an indelible mark. Beyond the iconic Anfield nights, Liverpool FC instilled an admiration for high-tempo coordination, emotional resilience under pressure, and the courage to attack difficult challenges head-on.",
  },

  projects: [
    {
      id: "synchrony-credit-analytics",
      title: "Synchrony Credit Analytics Hackathon",
      subtitle: "1st Place Winner — Atmos 26 Flagship Competition",
      status: "WINNER",
      statusType: "achievement",
      category: "Credit Risk Analytics & Python Modeling",
      tags: ["Python", "Credit Risk Analytics", "Data Modeling", "Feature Engineering", "Atmos 26"],
      summary: "Won 1st place in the flagship Synchrony Credit Analytics Hackathon at Atmos 26. Built an analytical credit risk evaluation pipeline using Python to predict loan applicant behavior under rigorous competition deadlines.",
      problem: "Credit underwriters face massive, noisy applicant datasets with high default variance. Designing an interpretable analytical pipeline to flag high-risk cohorts without discarding viable borrowers was the core hackathon challenge.",
      approach: "Conducted exhaustive exploratory data analysis, engineered key financial indicators, cleaned sparse columns, and structured predictive risk stratification models with quantitative validation.",
      solution: "An end-to-end Python pipeline processing credit indicators, mapping probability of default, and generating clear data-driven risk tiers for rapid underwriting decision support.",
      contributionOrStatus: "Led exploratory data analysis, Python pipeline scripting, metric modeling, and synthesized final analytical insights for the judging panel.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
      metricsOrOutcome: "1st Place Champions out of competitive university teams at Atmos 26.",
    },
    {
      id: "bits-student-superapp",
      title: "BITS Student Super-App",
      subtitle: "Unified Campus Resources Interface",
      status: "IN DEVELOPMENT / WORK IN PROGRESS",
      statusType: "in-progress",
      category: "Product Design & Campus Ecosystem",
      tags: ["Python", "UI/UX Architecture", "Campus Tools", "Work In Progress"],
      summary: "An ambitious initiative to consolidate fragmented BITS Pilani student utilities—mess schedules, course timetables, academic updates, and campus resources—into one lightning-fast, unified interface.",
      problem: "Students currently navigate multiple disparate web portals, mess WhatsApp groups, PDF schedules, and noticeboards daily, leading to constant organizational friction.",
      approach: "Architecting a modular, student-centric application with intuitive dashboard views, local data caching, and clean schedule parsing.",
      solution: "A unified digital cockpit offering single-tap mess menu lookups, schedule reminders, campus utility contacts, and academic notice summaries.",
      contributionOrStatus: "Concept architect & lead developer. Currently developing and testing UI prototypes and resource aggregation scripts.",
      technologies: ["Python (Automation & Parsers)", "Modern UI Architecture", "Local Storage / Cache"],
      metricsOrOutcome: "Active Work In Progress. Prototype interface under internal testing on campus.",
    },
    {
      id: "experimental-game-dev",
      title: "2D + 3D Hybrid Game Project",
      subtitle: "Experimental Spatial Perspective Engine",
      status: "IN DEVELOPMENT / EXPERIMENTAL",
      statusType: "in-progress",
      category: "Creative Dev & Projection Math",
      tags: ["Python", "Game Logic", "2D/3D Projection", "Spatial Mathematics", "Work In Progress"],
      summary: "An experimental game development project investigating the fusion of classic 2D sprite mechanics with dynamic 3D depth, perspective projection, and camera layering.",
      problem: "Traditional 2D games lack physical spatial depth, while pure 3D games often sacrifice the crisp, responsive precision of pixel/handcrafted 2D controller responsiveness.",
      approach: "Prototyping coordinate conversion matrices, depth-based parallax buffers, and layered physics boundaries that allow 2D sprites to traverse 3D coordinate planes.",
      solution: "An interactive spatial sandbox demonstrating perspective camera shifts, depth projection, and layered collision volumes.",
      contributionOrStatus: "Solo experimental prototype. Developing coordinate transformation algorithms and visual rendering logic.",
      technologies: ["Python", "Viewport Projection Math", "Interactive Canvas Rendering"],
      metricsOrOutcome: "Active Work In Progress. Demonstrates technical exploration in game mechanics and spatial computation.",
    },
  ] as Project[],

  achievements: [
    {
      id: "synchrony-atmos26",
      number: "01",
      title: "Winner — Synchrony Credit Analytics Hackathon",
      organization: "Synchrony Financial / Atmos 26",
      context: "BITS Pilani Flagship Technical Fest",
      badge: "FIRST PLACE / CHAMPION",
      description: "Clinched first place in the intensive corporate-sponsored credit analytics hackathon. Evaluated complex credit data, engineered predictive features, and presented data-backed risk assessments under strict time limits.",
      verifiedDetails: [
        "1st Place Victory confirmed at Atmos 26",
        "Credit Risk & Financial Data Analytics domain",
        "Python modeling and analytical dashboard delivery",
      ],
    },
    {
      id: "election-quiz",
      number: "02",
      title: "State-Level Award Winner",
      organization: "State Election Commission Competition",
      context: "State-Level Civic & Political Analytics Quiz",
      badge: "STATE HONORS",
      description: "Recognized with a prestigious state-level award in a highly competitive election quiz competition testing knowledge of constitutional frameworks, electoral mechanics, and historical precedents.",
      verifiedDetails: [
        "State-level competition ranking",
        "Rigorous multidisciplinary evaluation",
        "Demonstrated broad intellectual curiosity and recall under pressure",
      ],
    },
  ] as Achievement[],

  skills: [
    {
      id: "code",
      label: "CODE",
      roleTitle: "Software & Python Foundations",
      summary: "Intermediate Python developer focusing on clean scripting, data manipulation, automation, and game logic.",
      capabilities: [
        { name: "Python (Intermediate)", level: "Confirmed Intermediate", description: "Proficient with data structures, scripting, algorithm design, and API handling." },
        { name: "Data Manipulation (Pandas / NumPy)", level: "Applied in Hackathon", description: "Filtering, transforming, aggregating, and preparing structured datasets." },
        { name: "Object-Oriented Architecture", level: "Core Architecture", description: "Building modular classes for game entities and student application services." },
        { name: "Automation & Scripting", level: "Practical Utility", description: "Automating routine data extraction, format conversion, and campus scrapers." },
      ],
      appliedProjects: ["Synchrony Hackathon Model", "BITS Super-App Scrapers", "2D/3D Game Math"],
    },
    {
      id: "engineer",
      label: "ENGINEER",
      roleTitle: "Mechanical Engineering Discipline",
      summary: "First-year Mechanical Engineering student at BITS Pilani, trained in rigorous problem deconstruction and physical systems.",
      capabilities: [
        { name: "First-Principles Thinking", level: "Engineering Method", description: "Breaking complex software and hardware bottlenecks down to fundamental physical truths." },
        { name: "Mechanics & Thermodynamic Foundations", level: "Degree Coursework", description: "Understanding force vectors, stress dynamics, energy transfer, and mechanical linkages." },
        { name: "Mathematical Modeling", level: "Analytical Rigour", description: "Vector calculus, linear algebra, coordinate transformations, and spatial geometry." },
        { name: "Technical Precision & Tolerances", level: "Engineering Standard", description: "Designing systems where millimetric tolerances and error margins dictate success." },
      ],
      appliedProjects: ["Formula 1 Telemetry Analysis", "2D/3D Projection Geometry", "Engineering Coursework"],
    },
    {
      id: "analyse",
      label: "ANALYSE",
      roleTitle: "Analytics & Quantitative Intuition",
      summary: "Proven track record in extracting actionable predictive value from complex, high-dimensional datasets under hackathon pressure.",
      capabilities: [
        { name: "Credit Risk Analytics", level: "Atmos 26 Champion", description: "Stratifying applicant risk distributions, detecting anomaly vectors, and modeling outcomes." },
        { name: "Exploratory Data Analysis (EDA)", level: "Methodical", description: "Uncovering correlations, outliers, missingness patterns, and distributional skew." },
        { name: "Quantitative Validation", level: "Evaluation Metrics", description: "Cross-validation, precision-recall balancing, ROC-AUC intuition, and error cost analysis." },
        { name: "Data Storytelling", level: "Executive Presentation", description: "Translating mathematical findings into clear visual presentations that convince judging panels." },
      ],
      appliedProjects: ["Synchrony Hackathon Victory", "Telemetry Telemetry Metaphors"],
    },
    {
      id: "build",
      label: "BUILD",
      roleTitle: "Product Creation & Competitive Mindset",
      summary: "Motivated builder who creates real solutions for campus needs, experiments with game architectures, and relentlessly pursues high outcomes.",
      capabilities: [
        { name: "Rapid Prototyping", level: "Hackathon-Tested", description: "Shipping functional MVPs within 24-48 hours that solve genuine user pain points." },
        { name: "User-Centric Utility Design", level: "Product Instinct", description: "Designing clean interfaces specifically around student workflows and daily campus habits." },
        { name: "2D/3D Projection Experimentation", level: "Creative R&D", description: "Iterating on camera coordinates, depth rendering, and sprite interactions." },
        { name: "Entrepreneurial Ambition", level: "Core Motivation", description: "Dedicated to creating valuable digital products, winning future hackathons, and achieving independence." },
      ],
      appliedProjects: ["BITS Student Super-App", "2D/3D Hybrid Game Prototype", "Future Hackathon Roadmap"],
    },
  ] as SkillCategory[],

  personality: {
    heading: "NOT HERE TO STAND STILL.",
    statement: "I don't believe in passive learning. If there's an engineering challenge, an analytics puzzle, or an inefficient student routine, the instinct is always the same: open an editor and start building.",
    traits: [
      {
        title: "Relentlessly Curious",
        description: "From the downforce aerodynamics of an F1 front wing to how credit default swaps are modeled, I want to know exactly how things work under the hood.",
        icon: "compass",
      },
      {
        title: "Competitively Driven",
        description: "Winning Atmos 26 wasn't a one-off—it was proof of what happens when preparation meets pressure. I enter competitions to win.",
        icon: "trophy",
      },
      {
        title: "Pragmatic Builder",
        description: "Theory is only as valuable as what you can execute. Clean Python, functional prototypes, and tools that people actually use.",
        icon: "wrench",
      },
      {
        title: "Unapologetically Ambitious",
        description: "Building software isn't just a hobby; it is the path to solving large problems, creating economic value, and achieving lasting financial success.",
        icon: "flame",
      },
    ],
  },
};
