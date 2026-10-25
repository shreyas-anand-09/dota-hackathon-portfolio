# SHREYAS ANAND — BUILT TO BUILD
### Award-Winning, Cinematic, Interactive Motorsport Portfolio Website

An original, production-ready personal digital experience for **Shreyas Anand** — First-Year Mechanical Engineering undergraduate at **BITS Pilani, Hyderabad Campus**, intermediate Python programmer, and winner of the **Synchrony Credit Analytics Hackathon** at Atmos 26.

---

## 🏎️ Creative Direction & Narrative Architecture

The website bridges **cinematic motorsport art direction**, **editorial typography**, **mechanical engineering diagrams**, and **interactive creative-development sandboxes**. Racing serves as a narrative metaphor for intellectual curiosity, execution speed, and relentless competitive drive:

```
[STARTING GRID] ➔ [ORIGINS & VECTOR] ➔ [THE GARAGE] ➔ [RACE WEEKEND (F1)] ➔ [LIVERPOOL FC] ➔ [PODIUM ARCHIVE] ➔ [ARSENAL] ➔ [MINDSET] ➔ [APEX LAB] ➔ [NEXT GRID]
```

### Key Sections:
1. **The Starting Grid (Hero)**: High-impact opening with custom geometric telemetry centerpiece, mouse-reactive parallax perspective, live IST telemetry clock, and quick project jump actions.
2. **Origins & Vector (About)**: Interactive 3-waypoint route trajectory tracking Shreyas's journey from **Palakkad, Kerala** ➔ **9 formative years in Liverpool, UK** ➔ **BITS Pilani, Hyderabad**.
3. **The Garage (Projects & Case Studies)**:
   - **Project 01**: *Synchrony Credit Analytics Hackathon* (Flagship Atmos 26 victory showcase with interactive risk threshold cutoff simulator, ROC-AUC metric preview, and complete verified case study modal).
   - **Project 02**: *BITS Student Super-App* (In-development unified campus cockpit simulator with switchable Mess Menu, Class Timetable, and Campus Resource directory views).
   - **Project 03**: *2D + 3D Hybrid Game Project* (In-development experimental spatial sandbox with interactive camera elevation, perspective rotation, and depth projection).
4. **Race Weekend / Always On (F1 Main Event)**:
   - **Feature A (Evolving Circuit)**: High-precision SVG circuit with animated vehicle telemetry beacon traversing corners, turn-by-turn interactive annotations (T1–T6), and DRS zones.
   - **Feature B (Personality Telemetry HUD)**: Animated personality gauges (*Curiosity: Always Active*, *Build Mode: Engaged*, *Competitive Instinct: High*, *Next Project: Loading*).
   - **Feature C (Interactive Pit Wall Console)**: 3 functional tactical modes (*ENGINEER*, *BUILDER*, *COMPETITOR*) dynamically updating focus areas and verified credentials.
   - **Feature D & E (Personal F1 Story)**: Authentic reflection on growing up in the UK watching Formula 1 weekends and admiring millisecond strategy and thermodynamic discipline.
5. **Nine Years in Liverpool (Visual Interlude)**: Anfield football heritage, tactical pressing geometry SVG, and resilience philosophy.
6. **Results That Matter (Achievements)**: Podium victory archive with oversized numerals, Atmos 26 victory, and State-Level Election Quiz recognition.
7. **What I'm Building With (Skills)**: 4-category qualitative selector (`CODE`, `ENGINEER`, `ANALYSE`, `BUILD`). Strictly verified capabilities without arbitrary percentages.
8. **Not Here to Stand Still (Personality)**: 4 pillars of authentic builder ambition, curiosity, competitive hunger, and financial drive.
9. **The Telemetry Lab (Interactive Playground)**: Apex simulator with switchable racing modes (*Qualifying Hotlap*, *Race Stint*, *Safety Car Restart*), speed multiplier, throttle/RPM gauges, and live delta readouts.
10. **The Next Thing Starts Here (Contact)**: Centralized configuration, one-click email copy with instant feedback, campus location badge, and loop-back circuit conclusion.

---

## 🛠️ Technical Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom motorsport theme tokens:
  - `Graphite`: `#0B0D10`
  - `Deep Charcoal`: `#15191E`
  - `Warm White`: `#F3F1EB`
  - `Racing Red`: `#E53935`
  - `Muted Silver`: `#858C95`
  - `Telemetry Green`: `#00E676`
- **Typography**: Google Fonts (`Syne`, `Space Grotesk`, `Plus Jakarta Sans`, `JetBrains Mono`)
- **Iconography**: Lucide React
- **Motion & Accessibility**: Native requestAnimationFrame vector simulation, CSS keyframes, and full `prefers-reduced-motion` toggle and support.

---

## 🚀 Running Locally

```bash
# Navigate to the project directory
cd "C:\Users\Shreyas\.gemini\antigravity\scratch\shreyas-anand-portfolio"

# Start Vite development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Cloudflare Deployment Instructions

This website is engineered for seamless deployment to **Cloudflare Pages**.

### Method A: Cloudflare Git Integration (Recommended)
1. Push this repository to **GitHub** or **GitLab**.
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Select this repository and configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment Variable**: `NODE_VERSION` = `20`
4. Click **Save and Deploy**. Cloudflare Pages will build the site, apply the included `_headers` and `_redirects`, and provide an instant `*.pages.dev` URL.

### Method B: Cloudflare Wrangler CLI (Direct Upload)
```bash
# Install Wrangler globally if needed
npm install -g wrangler

# Build the project
npm run build

# Deploy the dist folder directly
npx wrangler pages deploy dist --project-name=shreyas-anand-portfolio
```

Included in `public/`:
- `_headers`: Configures HTTP security headers (X-Frame-Options, X-Content-Type-Options) and immutable asset caching for `/assets/*`.
- `_redirects`: Handles single-page app routing fallback (`/* /index.html 200`).

---

## 🔒 Authenticity & Verification Guarantee

- **Zero Fabricated Credentials**: All accomplishments (Synchrony Credit Analytics Hackathon Winner at Atmos 26, State-Level Election Quiz award) are strictly verified.
- **Transparent Project Status**: In-development projects (*BITS Student Super-App* and *2D+3D Game Dev Experiment*) are explicitly demarcated with status badges and disclaimer notices.
- **No Arbitrary Metrics**: Technical capabilities are described through actual projects and problem-solving methodology, never arbitrary percentages.
- **Centralized Data**: All contact information, projects, and personal journey waypoints are managed in [`src/data/portfolioData.ts`](file:///C:/Users/Shreyas/.gemini/antigravity/scratch/shreyas-anand-portfolio/src/data/portfolioData.ts).
