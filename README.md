# Super Smash Bros. Melee — Top 50 Analytics, Versus & Monte Carlo Engine

A high-performance competitive analytics dashboard and data engineering showcase themed around the **Super Smash Bros. Melee** arcade UI aesthetic (deep space navy `#0B1026`, metallic chrome `#B0BAC5`, GameCube controller port colors, sharp diagonal bevels, and retro CRT scanlines).

---

## 🎮 How to Open & Run

This project is completely standalone (Vanilla HTML5, CSS3, JavaScript ES6+). **No installation, backend server, or Node build step is required.**

1. Simply double-click **`index.html`** or open it in any modern browser (Chrome, Edge, Firefox, Safari).
2. Or in PowerShell, launch directly:
   ```powershell
   Start-Process index.html
   ```

---

## 🌟 4 Core Modes & Data Engineering Capabilities

### 1. 👤 Mode 1: Player Browser & Telemetry Marts
- **Top 50 Roster:** Comprehensive profiles for all 50 active competitive circuit players (combining SSBMRank 2025 and 2026 circuit data).
- **Slippi In-Game Telemetry Marts:**
  - Connect Code (e.g. `ZAIN#0`, `CODY#1`, `HBOX#0`, `AMSA#0`)
  - APM (Actions Per Minute input frequency at 60Hz)
  - L-Cancel Execution % (aerial landing lag cancellation rate)
  - Openings Per Kill (neutral conversion efficiency)
  - Neutral Win % (first-hit advantage frequency)
  - Avg Kill % (lethal stock conversion threshold)
  - Sample Replays Ingested (dataset telemetry sample size)
- **Glicko-2 Rating & Uncertainty:**
  - Glicko-2 Rating, Rating Deviation (RD), Volatility, and 95% Confidence Intervals.
- **Biographies & Tactical Identity:** Playstyles, career milestones, and trivia.
- **Character Matchup Tendencies:** Color-coded records (**🟢 Favored >60%**, **🟡 Even 48–60%**, **🔴 Tough <48%**).
- **Trophy Room & VODs:** Verified major championship wins with direct **`▶ WATCH VOD`** links.
- **Seeded Circuit Projections:** Seedings and expected bracket paths for supermajors like *GENESIS 11*.

---

### 2. ⚔️ Mode 2: Versus Analyzer & 1-on-1 Monte Carlo Simulator
Compare any two competitors head-to-head with direct probability modeling and stochastic set simulations:
- **1-on-1 Monte Carlo Series Simulator:**
  - Run **1,000 to 10,000 game-by-game series simulations** on a one-by-one comparison basis.
  - Formats: **Best of 5** (Major Top 8), **Best of 3** (Pools), or **Best of 7** (Grand Finals / Summit).
  - Simulates dynamic set conditions: Game 1 neutral starter stage, loser stage counterpick momentum boost (+5.5% advantage), and character adaptations.
  - Outputs a complete **Scoreline Probability Distribution Grid** (e.g., Zain 3-1: 23.3%, Zain 3-2: 22.8%, Cody 3-2: 17.9%, Cody 3-1: 15.2%, Zain 3-0: 13.4%, Cody 3-0: 7.4%) with visual bars and a **`★ MOST LIKELY`** highlight badge.
- **Weighted Win Probability Meter:**
  - Evaluates Glicko-2 rating differential, reciprocal character matchup records, tournament win rates, and micro-telemetry edges.
- **Tournament Bracket Collision Alert:**
  - Cross-references upcoming tournament registrations (e.g., *GENESIS 11*).
  - Predicts the exact **Projected Collision Round** (e.g. *Winners Finals & Grand Finals (Seed #1 vs Seed #2 Clash)*) and likelihood of meeting.
- **Tactical Breakdown & Strategy:**
  - Detailed neutral dynamics, off-main counterpicks (e.g., Axe Young Link/Fox vs Puff, Mango Fox vs floaties, Plup Fox vs Marth on FD, Aklo Link vs Marth), stage striking/bans, and decisive victory factors.
- **Side-by-Side Competitive Matrix:** Direct comparison of ratings, APM, L-cancel %, openings per kill, titles, and connect codes.

---

### 3. 🎲 Mode 3: 10,000x Tournament Monte Carlo Simulator
Simulate full 64-slot double-elimination tournament brackets over 1,000 to 10,000 iterations:
- **Precomputed 50×50 Matrix:** Pairwise stochastic win probability lookups execute 10,000 full double-elimination brackets in ~150ms directly in browser memory.
- **Medal Podium:** Live calculation of 🥇 Gold, 🥈 Silver, and 🥉 Bronze favorites by Championship Win Probability and Grand Finals Reach %.
- **Full Entrant Outcomes Table:** All 50 players with Seed, Glicko-2, 1st Place %, Grand Finals %, Top 8 %, Average Placement, and Upset Vulnerability.
- **Individual Placement Distribution Inspector:**
  - Click any player row to inspect their full placement histogram (1st, 2nd, 3rd, 4th, 5th-6th, 7th-8th, 9th-12th, 13th-16th, 17th-24th, 25th-32nd, 33rd+).

---

### 4. 🎮 Mode 4: Live Slippi (.slp) Binary Replay Parser
A live client-side data ingestion tool demonstrating binary telemetry parsing:
- **Direct Drag & Drop:** Drop any `.slp` replay file into the browser (processed 100% locally in memory via `ArrayBuffer` and `DataView`).
- **Binary Stream Decoding:**
  - Decodes event tokens (`0x35 Game Start`, `0x36 Pre-Frame`, `0x37 Post-Frame`, `0x38 Game End`).
  - Extracts Stage IDs (Battlefield, Final Destination, Yoshi's Story, FoD, Dream Land, Pokémon Stadium), player ports, character IDs, and frame counts @ 60Hz.
  - Computes match duration, input frequency (APM), and L-cancel execution.
- **Sample Tournament Replay:** One-click loader for the *GENESIS 11 Grand Finals Game 5* (Zain vs Cody Schwab) displaying frame stream logs with timestamped interaction events.

---

## 📁 File Structure

```
beautiful-bardeen/
├── index.html        # Main dashboard UI, Melee arcade styling, scanline effects
├── app.js            # App logic, 1-on-1 & Tournament Monte Carlo engines, Slippi parser, GraphQL client
├── data.js           # Full Top 50 player dataset with Glicko-2 ratings & Slippi telemetry marts
└── README.md         # Documentation & guide
```
