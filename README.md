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

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ or higher
- pnpm (or npm/yarn as alternative)

### Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### Setup Steps

1. **Navigate to the project directory**:
   ```bash
   cd "HTML, CSS/ffsa cds"
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Production Build

Build the application for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## 📄 Pages Overview

### Home (/)
- Hero section with tournament info
- Live match banner
- Tournament format breakdown
- Prize pool distribution
- Upcoming matches
- Top teams leaderboard

### Schedule (/schedule)
- Week-wise tournament schedule
- Match details (team vs team, format, time)
- Match status indicators (completed, live, upcoming)
- Results display

### Standings (/standings)
- Overall rankings table
- Regional breakdown
- Win-loss records
- Round differentials
- Point system
- Ranking highlights (Top 2, Top 4, etc.)

### Teams (/teams)
- 12 teams organized by region
- India (3 teams)
- Bangladesh (3 teams)
- Nepal (3 teams)
- Pakistan (3 teams)
- Team profiles with emojis and descriptions
- Regional statistics

### Bracket (/bracket)
- Visual tournament flow
- Play-Ins stage (5th vs 6th)
- Semi-Finals (1st vs Play-In Winner, 2nd vs 3rd)
- Grand Final (BO11)
- Match format details
- Prize distribution

### Stats (/stats)
- Tournament MVP leaderboard
- Finals MVP showcase
- Best In-Game Leader rankings
- Most Eliminations (by team)
- Key statistics dashboard
- Performance metrics with progress bars

## 🎨 Design System

### Colors

- **Primary**: Neon Orange (`#f97316`) - Main highlight
- **Secondary**: Dark Grey range - Background and text
- **Accent**: Cyan (`#06b6d4`) - Secondary highlight
- **Success**: Green - Positive states
- **Warning**: Yellow/Orange - Caution states
- **Danger**: Red - Alert states

### Typography

- **Heading Font**: Orbitron (Bold, esports style)
- **Body Font**: Inter (Clean, readable)
- **Font Sizes**: Responsive scaling for mobile/desktop

### Components

- **Cards**: Glassmorphism with soft glows
- **Buttons**: Primary (gradient), Secondary (glass)
- **Badges**: Small status indicators
- **Tables**: Highlight-based rankings

## 📊 Mock Data

All tournament data is centralized in `lib/data.ts`:
- Tournament information
- Prize breakdown
- 12 Teams with regions
- Standings and rankings
- Schedule with matches
- Statistics and leaderboards
- Bracket structure

## 🔗 Navigation

All pages are interconnected via the navbar:
- Logo links to home
- Quick links to all tournament pages
- Mobile-responsive hamburger menu

## ✅ Features Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark esports theme with neon colors
- [x] Hero section with call-to-actions
- [x] Live match banner
- [x] Schedule with status indicators
- [x] Detailed standings table
- [x] Teams organized by region
- [x] Tournament bracket visualization
- [x] Multi-section statistics page
- [x] Consistent navigation
- [x] Footer with quick links
- [x] Smooth animations and transitions
- [x] Hover effects on interactive elements
- [x] TypeScript for type safety
- [x] Production-ready code

## 🎨 Customization

### Update Tournament Info

Edit `lib/data.ts`:
```typescript
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
colors: {
  primary: { /* adjust orange */ },
  accent: { /* adjust cyan */ },
  secondary: { /* adjust grey */ },
}
```

### Add More Teams

Edit `lib/data.ts` TEAMS array:
```typescript
{
  id: 13,
  name: "New Team",
  region: "India",
  logo: "🎮",
  description: "Team description",
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

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub/GitLab
2. Connect repo to Vercel
3. Deploy with one click

### Deploy to Netlify

```bash
pnpm build
# Upload the .next folder contents
```

### Deploy to Custom Server

```bash
pnpm build
pnpm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
pnpm dev -- -p 3001
```

### Clear cache and reinstall

```bash
rm -rf node_modules .next
pnpm install
pnpm dev
```

### TypeScript errors

Ensure TypeScript is properly installed:
```bash
pnpm install typescript --save-dev
```

## 📝 License

This project is created for FFSA CDS tournament. All rights reserved.

## 🤝 Contributing

Improvements and suggestions are welcome. Feel free to:
1. Create feature branches
2. Submit pull requests
3. Report issues

## 📧 Support

For issues or questions about the website, please raise an issue in the repository.

---

**Built with ❤️ for FFSA CDS - Free Fire South Asia Clash Domination Series**

Join thousands of esports fans watching the ultimate Clash Squad championship! 🎮🏆
