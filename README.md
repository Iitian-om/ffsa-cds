# FFSA CDS - Free Fire South Asia Clash Domination Series

A modern, responsive esports tournament website built with Next.js, React, and Tailwind CSS. Features a professional dark esports theme with dynamic components for schedules, standings, teams, bracket visualization, and statistics.

![Tournament](https://img.shields.io/badge/Tournament-FFSA%20CDS-orange)
![Prize Pool](https://img.shields.io/badge/Prize%20Pool-%24150K-brightgreen)
![Teams](https://img.shields.io/badge/Teams-12-blue)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## 🎯 Features

- ✨ **Modern Dark Esports Theme** - Professional UI with glassmorphism effects
- 📱 **Fully Responsive** - Mobile-first design works on all devices
- 🎮 **Tournament Pages**:
  - Home with hero section and live match banner
  - Schedule with week-wise match layout
  - Standings with regional grouping and rankings
  - Teams page with regional profiles
  - Bracket visualization with playoff structure
  - Statistics leaderboards and performance metrics
- 🎨 **Premium UI Components** - Reusable, styled components
- ⚡ **Smooth Animations** - Hover effects, transitions, and scroll animations
- 🎯 **TypeScript** - Full type safety
- 🚀 **Production Ready** - Optimized and ready to deploy

## 📋 Project Structure

```
ffsa-cds/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navbar & footer
│   ├── globals.css          # Global styles and animations
│   ├── page.tsx             # Homepage with hero and featured content
│   ├── schedule/
│   │   └── page.tsx         # Schedule with week-wise matches
│   ├── standings/
│   │   └── page.tsx         # Standings table with regional breakdown
│   ├── teams/
│   │   └── page.tsx         # Teams grouped by region
│   ├── bracket/
│   │   └── page.tsx         # Tournament bracket visualization
│   └── stats/
│       └── page.tsx         # Statistics and leaderboards
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   └── UI.tsx               # Reusable UI components
├── lib/
│   └── data.ts              # Tournament data and mock data
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: React
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Fonts**: Orbitron (esports), Inter (body)

## Update Tournament Info

Edit `lib/data.ts`:
```typescript
// example 
export const TOURNAMENT_INFO = {
  name: "Your Tournament",
  fullName: "Your Full Tournament Name",
  prizePool: 100000,
  // ... other fields
};
```

### Modify Colors

Edit `tailwind.config.ts` to adjust the color scheme:
```typescript
// example 
colors: {
  primary: { /* adjust orange */ },
  accent: { /* adjust cyan */ },
  secondary: { /* adjust grey */ },
}
```

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

## 📝 License
This project is created for FFSA CDS tournament. All rights reserved.

## 📧 Support
For questions about the website, please raise an issue in the repository.

---

**Built with ❤️ for FFSA CDS - Free Fire South Asia Clash Domination Series**

Join thousands of esports fans watching the ultimate Clash Squad championship! 🎮🏆
