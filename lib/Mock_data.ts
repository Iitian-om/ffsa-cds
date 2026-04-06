// Mock data for standings and stats

export const STANDINGS = [
  { rank: 1, teamId: 1, teamName: "IND1", code: "R1", region: "India", wins: 5, losses: 0, points: 10 },
  { rank: 2, teamId: 2, teamName: "IND2", code: "R2", region: "India", wins: 4, losses: 1, points: 8 },
  { rank: 3, teamId: 4, teamName: "BAN1", code: "R3", region: "Bangladesh", wins: 3, losses: 2, points: 6 },
  { rank: 4, teamId: 7, teamName: "NEP1", code: "R4", region: "Nepal", wins: 3, losses: 2, points: 6 },
  { rank: 5, teamId: 3, teamName: "IND3", code: "R5", region: "India", wins: 2, losses: 3, points: 4 },
  { rank: 6, teamId: 10, teamName: "PAK1", code: "R6", region: "Pakistan", wins: 2, losses: 3, points: 4 },
  { rank: 7, teamId: 8, teamName: "NEP2", code: "R7", region: "Nepal", wins: 2, losses: 3, points: 4 },
  { rank: 8, teamId: 5, teamName: "BAN2", code: "R8", region: "Bangladesh", wins: 1, losses: 4, points: 2 },
  { rank: 9, teamId: 11, teamName: "PAK2", code: "R9", region: "Pakistan", wins: 1, losses: 4, points: 2 },
  { rank: 10, teamId: 6, teamName: "BAN3", code: "R10", region: "Bangladesh", wins: 1, losses: 4, points: 2 },
  { rank: 11, teamId: 9, teamName: "NEP3", code: "R11", region: "Nepal", wins: 0, losses: 5, points: 0 },
  { rank: 12, teamId: 12, teamName: "PAK3", code: "R12", region: "Pakistan", wins: 0, losses: 5, points: 0 },
];

export const STATS = {
  tournamentMVP: [
    { rank: 1, playerName: "ProPlayer1", teamId: 1, teamName: "IND1", points: 1250 },
    { rank: 2, playerName: "ProPlayer2", teamId: 2, teamName: "IND2", points: 1180 },
    { rank: 3, playerName: "ProPlayer3", teamId: 4, teamName: "BAN1", points: 1050 },
  ],
  finalsMVP: [
    { rank: 1, playerName: "Champion_IGL", teamId: 1, teamName: "IND1", points: 580 },
  ],
  bestIGL: [
    { rank: 1, playerName: "IGL_Master", teamId: 1, teamName: "IND1", callAccuracy: "94%" },
    { rank: 2, playerName: "IGL_Pro", teamId: 2, teamName: "IND2", callAccuracy: "91%" },
    { rank: 3, playerName: "IGL_Elite", teamId: 4, teamName: "BAN1", callAccuracy: "88%" },
  ],
  mostEliminations: [
    { rank: 1, teamName: "IND1", eliminations: 245, averagePerMatch: 17.5 },
    { rank: 2, teamName: "IND2", eliminations: 218, averagePerMatch: 15.6 },
    { rank: 3, teamName: "BAN1", eliminations: 195, averagePerMatch: 13.9 },
  ],
};