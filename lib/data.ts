// Re-export standings from separate file
export { STANDINGS } from "./Mock_data";

export const TOURNAMENT_INFO = {
  name: "FFSA CDS",
  fullName: "Free Fire South Asia Clash Domination Series",
  tagline: "South Asia's Ultimate Clash Squad Championship",
  prizePool: 150000,
  teams: 12,
  game: "Free Fire MAX (Clash Squad)",
  region: "South Asia",
};

export const PRIZE_BREAKDOWN = [
  { place: "1st", amount: 30000, percentage: "20%" },
  { place: "2nd", amount: 22500, percentage: "15%" },
  { place: "3rd", amount: 19500, percentage: "13%" },
  { place: "4th", amount: 15000, percentage: "10%" },
  { place: "5th-6th", amount: 6750, percentage: "4.5% (each)", teamAmount: 3375 },
  { place: "7th-8th", amount: 5250, percentage: "3.5% (each)", teamAmount: 2625 },
  { place: "9th-10th", amount: 3750, percentage: "2.5% (each)", teamAmount: 1875 },
  { place: "11th-12th", amount: 3000, percentage: "2% (each)", teamAmount: 1500 },
];

export const BONUS_POOL = [
  { award: "Finals MVP", amount: 8250, percentage: "5.5%" },
  { award: "Tournament MVP", amount: 7500, percentage: "5%" },
  { award: "Best IGL", amount: 5250, percentage: "3.5%" },
  { award: "Most Eliminations", amount: 4500, percentage: "3%" },
];

export const TEAMS = [
  {
    id: 1,
    name: "India #1",
    code: "IND1",
    region: "India",
    logo: "🇮🇳",
    description: "Top qualifier from FFMIC Spring 2026",
  },
  {
    id: 2,
    name: "India #2",
    code: "IND2",
    region: "India",
    logo: "🇮🇳",
    description: "Second qualifier from FFMIC Spring 2026",
  },
  {
    id: 3,
    name: "India #3",
    code: "IND3",
    region: "India",
    logo: "🇮🇳",
    description: "Third qualifier from FFMIC Spring 2026",
  },
  {
    id: 4,
    name: "Bangladesh #1",
    code: "BAN1",
    region: "Bangladesh",
    logo: "🇧🇩",
    description: "Bangladesh Regional Qualifier",
  },
  {
    id: 5,
    name: "Bangladesh #2",
    code: "BAN2",
    region: "Bangladesh",
    logo: "🇧🇩",
    description: "Bangladesh Regional Qualifier",
  },
  {
    id: 6,
    name: "Bangladesh #3",
    code: "BAN3",
    region: "Bangladesh",
    logo: "🇧🇩",
    description: "Bangladesh Regional Qualifier",
  },
  {
    id: 7,
    name: "Nepal #1",
    code: "NEP1",
    region: "Nepal",
    logo: "🇳🇵",
    description: "Nepal Regional Qualifier",
  },
  {
    id: 8,
    name: "Nepal #2",
    code: "NEP2",
    region: "Nepal",
    logo: "🇳🇵",
    description: "Nepal Regional Qualifier",
  },
  {
    id: 9,
    name: "Nepal #3",
    code: "NEP3",
    region: "Nepal",
    logo: "🇳🇵",
    description: "Nepal Regional Qualifier",
  },
  {
    id: 10,
    name: "Pakistan #1",
    code: "PAK1",
    region: "Pakistan",
    logo: "🇵🇰",
    description: "Pakistan Regional Qualifier",
  },
  {
    id: 11,
    name: "Pakistan #2",
    code: "PAK2",
    region: "Pakistan",
    logo: "🇵🇰",
    description: "Pakistan Regional Qualifier",
  },
  {
    id: 12,
    name: "Pakistan #3",
    code: "PAK3",
    region: "Pakistan",
    logo: "🇵🇰",
    description: "Pakistan Regional Qualifier",
  },
];

export const SCHEDULE = {
  "Week 1: League Stage (BO1: Best of One)": [
    {
      id: 1,
      day: "Day 1",
      date: "2024-05-20",
      matches: [
        { id: 1, team1: "IND1", team2: "IND2", time: "14:00", format: "BO1", status: "completed" },
        { id: 2, team1: "IND3", team2: "BAN1", time: "14:45", format: "BO1", status: "completed" },
        { id: 3, team1: "BAN2", team2: "BAN3", time: "15:30", format: "BO1", status: "completed" },
        { id: 4, team1: "NEP1", team2: "NEP2", time: "16:15", format: "BO1", status: "completed" },
        { id: 5, team1: "NEP3", team2: "PAK1", time: "17:00", format: "BO1", status: "completed" },
        { id: 6, team1: "PAK2", team2: "PAK3", time: "17:45", format: "BO1", status: "completed" },
      ],
    },
    {
      id: 2,
      day: "Day 2",
      date: "2024-05-21",
      matches: [
        { id: 7, team1: "IND1", team2: "BAN1", time: "14:00", format: "BO1", status: "completed" },
        { id: 8, team1: "IND2", team2: "NEP1", time: "14:45", format: "BO1", status: "completed" },
        { id: 9, team1: "IND3", team2: "PAK1", time: "15:30", format: "BO1", status: "completed" },
        { id: 10, team1: "BAN2", team2: "NEP2", time: "16:15", format: "BO1", status: "completed" },
        { id: 11, team1: "BAN3", team2: "PAK2", time: "17:00", format: "BO1", status: "completed" },
        { id: 12, team1: "NEP3", team2: "PAK3", time: "17:45", format: "BO1", status: "completed" },
      ],
    },
    {
      id: 3,
      day: "Day 3",
      date: "2024-05-22",
      matches: [
        { id: 13, team1: "IND1", team2: "NEP1", time: "14:00", format: "BO1", status: "completed" },
        { id: 14, team1: "IND2", team2: "PAK1", time: "14:45", format: "BO1", status: "completed" },
        { id: 15, team1: "IND3", team2: "BAN2", time: "15:30", format: "BO1", status: "completed" },
        { id: 16, team1: "BAN1", team2: "NEP2", time: "16:15", format: "BO1", status: "completed" },
        { id: 17, team1: "BAN3", team2: "PAK3", time: "17:00", format: "BO1", status: "completed" },
        { id: 18, team1: "NEP3", team2: "PAK2", time: "17:45", format: "BO1", status: "completed" },
      ],
    },
    {
      id: 4,
      day: "Day 4",
      date: "2024-05-23",
      matches: [
        { id: 19, team1: "IND1", team2: "PAK1", time: "14:00", format: "BO1", status: "completed" },
        { id: 20, team1: "IND2", team2: "BAN2", time: "14:45", format: "BO1", status: "completed" },
        { id: 21, team1: "IND3", team2: "NEP3", time: "15:30", format: "BO1", status: "completed" },
        { id: 22, team1: "BAN1", team2: "PAK2", time: "16:15", format: "BO1", status: "completed" },
        { id: 23, team1: "BAN3", team2: "NEP1", time: "17:00", format: "BO1", status: "completed" },
        { id: 24, team1: "NEP2", team2: "PAK3", time: "17:45", format: "BO1", status: "completed" },
      ],
    },
    {
      id: 5,
      day: "Day 5",
      date: "2024-05-24",
      matches: [
        { id: 25, team1: "IND1", team2: "BAN3", time: "14:00", format: "BO1", status: "completed" },
        { id: 26, team1: "IND2", team2: "NEP2", time: "14:45", format: "BO1", status: "completed" },
        { id: 27, team1: "IND3", team2: "PAK3", time: "15:30", format: "BO1", status: "completed" },
        { id: 28, team1: "BAN1", team2: "NEP3", time: "16:15", format: "BO1", status: "completed" },
        { id: 29, team1: "BAN2", team2: "PAK1", time: "17:00", format: "BO1", status: "completed" },
        { id: 30, team1: "NEP1", team2: "PAK2", time: "17:45", format: "BO1", status: "completed" },
      ],
    },
  ],
  "Week 2: Play-Ins & Wildcard": [
    {
      id: 6,
      week: "Week 2",
      day: "Saturday - Wildcard & PO Qualifier",
      date: "2024-05-30",
      matches: [
        { id: 31, Match_Title: "Wildcard Entry Chance", team1: "R9", team2: "R10", time: "14:20", format: "BO3", status: "upcoming", description: "Wildcard Entry Chance - Winner to Play-Ins" },
        { id: 32, Match_Title: "PO Qualifier 1", team1: "R5", team2: "R6", time: "15:50", format: "BO3", status: "upcoming", description: "Qualifier (PO_Q1)" },
      ],
    },
    {
      id: 7,
      week: "Week 2",
      day: "Sunday - Gauntlet-Elimination Round",
      date: "2024-05-31",
      matches: [
        { id: 33, Match_Title: "Gauntlet Elimination Round 1", team1: "Wildcard Winner", team2: "R8", time: "14:00", format: "BO3", status: "upcoming", description: "Gauntlet Round 1" },
        { id: 34, Match_Title: "Gauntlet Elimination Round 2", team1: "Gauntlet R1 Winner", team2: "R7", time: "16:00", format: "BO3", status: "upcoming", description: "Gauntlet Round 2" },
        { id: 35, Match_Title: "PlayOFFs Qualifier 2 (PO_OF2)", team1: "Gauntlet R2 Winner", team2: "PO_Q1 Loser", time: "18:00", format: "BO3", status: "upcoming", description: "Final Gauntlet (PO_Q2)" },
      ],
    },
  ],
  "Week 3: Playoffs & Finals": [
    {
      id: 8,
      week: "Week 3",
      day: "Friday - Playoffs",
      date: "2024-06-05",
      matches: [
        { id: 36, Match_Title: "Playoff Match 1", team1: "R3", team2: "R4", time: "14:00", format: "BO3", status: "upcoming", description: "Playoff Match 1" },
        { id: 37, Match_Title: "Playoff Match 2", team1: "PO_Q1 Winner", team2: "PO_Q2 Winner", time: "16:30", format: "BO3", status: "upcoming", description: "Playoff Match 2" },
      ],
    },
    {
      id: 9,
      week: "Week 3",
      day: "Saturday - Semi Finals Begin",
      date: "2024-06-06",
      matches: [
        { id: 38, Match_Title: "Semi Final 1", objective: "Win the match to advance to the Grand Final", team1: "R1", team2: "R2", time: "14:20", format: "BO7", status: "upcoming", description: "Semi Final 1" },
        { id: 39, Match_Title: "Consolation Final", objective: "Win the match to advance to the Semi Finals 2", team1: "Playoff QF 1", team2: "Playoff QF 2", time: "18:00", format: "BO5", status: "upcoming", description: "Playoff Clash" },
      ],
    },
    {
      id: 10,
      week: "Week 3",
      day: "Sunday - Grand Finals",
      date: "2024-06-07",
      matches: [
        { id: 40, Match_Title: "Semi Final 2", objective: "Win the match to advance to the Grand Final", team1: "Semi Final 1 Loser", team2: "Consolation Final Winner", time: "14:00", format: "BO7", status: "upcoming", description: "Semi Final 2" },
        { id: 41, Match_Title: "🏆 GRAND FINAL", objective: "Win the match to become the champion", team1: "Semi Final 1 Winner", team2: "Semi Final 2 Winner", time: "17:30", format: "BO11", status: "upcoming", description: "🏆 GRAND FINAL" },
      ],
    },
  ],
};

export const BRACKET_STRUCTURE = {
  advancement: {
    "Rank 1-2": "Semi Finals",
    "Rank 3-4": "Playoffs",
    "Rank 5-8": "Play-Ins",
    "Rank 9-10": "Wildcard Entry Chance",
    "Rank 11-12": "Eliminated",
  },
  wildcard: [
    { match: "R9 vs R10", format: "BO3", winner: "WCE: WildCard Entry (to Play-Ins)" },
  ],
  playIns: [
    { round: "Qualifier", match: "R5 vs R6", format: "BO3", winner: "PO_Q1 Qualifier" },
    { round: "Gauntlet 1", match: "WCE vs R8", format: "BO3", loser: "Eliminated" },
    { round: "Gauntlet 2", match: "Gauntlet 1 Winner vs R7", format: "BO3", loser: "Eliminated" },
    { round: "Final Gauntlet", match: "Gauntlet 2 Winner vs PO_Q1 Loser", format: "BO3", winner: "PO_Q2 Qualifier" },
  ],
  playoffs: [
    { match: "R3 vs PO_Q1 Winner", format: "BO3", destination: "Main Battle" },
    { match: "R4 vs PO_Q2 Winner", format: "BO3", destination: "Main Battle" },
  ],
  mainBattle: [
    { round: "Semi Final 1", match: "R1 vs R2", format: "BO7", winner: "Grand Final", loser: "Semi Final 2" },
    { round: "Playoff Clash", match: "Playoff Winners", format: "BO5", winner: "Semi Final 2", loser: "3rd Place" },
    { round: "Semi Final 2", match: "SF1 Loser vs Playoff Clash Winner", format: "BO7", winner: "Grand Final", loser: "3rd Place" },
    { round: "Grand Final", match: "SF1 Winner vs SF2 Winner", format: "BO11", winner: "🏆 Champion" },
  ],
};
