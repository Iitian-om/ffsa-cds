# FFSA CDS - Free Fire South Asia Clash Domination Series

A modern, responsive esports tournament website built with Next.js, React, and Tailwind CSS. Features a professional dark esports theme with dynamic components for schedules, standings, teams, bracket visualization, and statistics.

![Tournament](https://img.shields.io/badge/Tournament-FFSA%20CDS-orange)
![Prize Pool](https://img.shields.io/badge/Prize%20Pool-%24150K-brightgreen)
![Teams](https://img.shields.io/badge/Teams-12-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## Features

- Data-driven tournament pages using shared sources in `lib/data.ts`
- Split schedule experience:
  - `/schedule` (week selector)
  - `/schedule/week1`
  - `/schedule/week2`
  - `/schedule/week3`
- Dedicated roadmap page at `/roadmap` with:
  - stage overview
  - compact infographic metrics
  - timeline grouped by event day
  - bracket progression summary
- Bracket page aligned to official structure (`BRACKET_STRUCTURE`) and schedule flow
- Responsive layout for desktop and mobile
- Reusable UI components (`Button`, `Badge`, `Card`, `SectionTitle`, `Table`)

## Routes

`/` `/schedule` `/schedule/week1` `/schedule/week2` `/schedule/week3`  `/roadmap`  `/bracket`  `/standings`  `/teams`  `/stats` 

## Project Structure

```text
ffsa-cds/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── bracket/page.tsx
│   ├── roadmap/page.tsx
│   ├── schedule/
│   │   ├── page.tsx
│   │   ├── week1/page.tsx
│   │   ├── week2/page.tsx
│   │   ├── week3/page.tsx
│   │   └── _components/ScheduleWeekView.tsx
│   ├── standings/page.tsx
│   ├── teams/page.tsx
│   └── stats/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── UI.tsx
├── lib/
│   ├── data.ts
│   └── Mock_data.ts
└── ...config files
```

## Tech Stack

- Next.js 14
- TypeScript
- React
- Tailwind CSS
- Lucide React icons
- pnpm

## Data Source

Tournament content is sourced from `lib/data.ts`.

Primary exports used across pages:
- `TOURNAMENT_INFO`
- `SCHEDULE`
- `BRACKET_STRUCTURE`
- `PRIZE_BREAKDOWN`
- `STANDINGS`
- `TEAMS`



## 🔄 Integrating Real Data

The website is ready for API integration:

1. Replace mock data in `lib/data.ts` with API calls
2. Use Next.js API routes or external APIs
3. Implement real-time updates for live matches
4. Connect to tournament backend system

Example API integration pattern:
```typescript
// In page.tsx
async function getStandings() {
  const res = await fetch('api/standings');
  return res.json();
}
```

## License

This project is created for FFSA CDS tournament. All rights reserved.

## 📧 Support
For questions about the website, please raise an issue in the repository.

---

**Built with ❤️ for FFSA CDS - Free Fire South Asia Clash Domination Series**

Join thousands of esports fans watching the ultimate Clash Squad championship! 🎮🏆
