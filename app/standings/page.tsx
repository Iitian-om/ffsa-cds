"use client";

import { SectionTitle, Badge } from "@/components/UI";
import { STANDINGS } from "@/lib/data";

interface Standing {
  rank: number;
  teamId: number;
  teamName: string;
  region: string;
  wins: number;
  losses: number;
  code: string;
  points: number;
}

function getRankColor(rank: number): string {
  if (rank <= 2) return "text-green-400";
  if (rank <= 4) return "text-blue-400";
  if (rank <= 8) return "text-yellow-400";
  if (rank <= 10) return "text-orange-400";
  return "text-red-400";
}

export default function Standings() {
  const regions = ["India", "Bangladesh", "Nepal", "Pakistan"];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Standings</SectionTitle>

        {/* Overall Standings Table */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#202122] mb-6">Overall Rankings</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#a2a9b1] bg-[#cedff2]">
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Rank</th>
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Team</th>
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Region</th>
                  <th className="text-center px-4 py-3 font-bold text-[#202122]">W-L</th>
                  <th className="text-center px-4 py-3 font-bold text-[#202122]">Pts</th>
                  <th className="text-center px-4 py-3 font-bold text-[#202122]">Code</th>
                </tr>
              </thead>
              <tbody>
                {STANDINGS.map((standing: Standing) => (
                  <tr key={standing.rank} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                    <td className={`px-4 py-3 font-bold ${getRankColor(standing.rank)}`}>
                      #{standing.rank}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#202122]">
                      {standing.teamName}
                    </td>
                    <td className="px-4 py-3 text-[#54595d]">{standing.region}</td>
                    <td className="px-4 py-3 text-center text-[#202122]">
                      {standing.wins}—{standing.losses}
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-primary-500">
                      {standing.points}
                    </td>
                    <td className="px-4 py-3 text-center text-[#202122]">
                      {standing.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="space-y-12">
          {regions.map((region) => {
            const regionTeams = STANDINGS.filter((s) => s.region === region);
            return (
              <div key={region}>
                <h3 className="text-xl font-bold text-primary-500 mb-4 pb-3 border-b border-[#a2a9b1]">
                  {region}
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#a2a9b1] bg-[#cedff2]">
                        <th className="text-left px-4 py-3 font-bold text-[#202122]">Rank</th>
                        <th className="text-left px-4 py-3 font-bold text-[#202122]">Team</th>
                        <th className="text-center px-4 py-3 font-bold text-[#202122]">W-L</th>
                        <th className="text-center px-4 py-3 font-bold text-[#202122]">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regionTeams.map((standing: Standing) => (
                        <tr key={standing.rank} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                          <td className={`px-4 py-3 font-bold ${getRankColor(standing.rank)}`}>
                            #{standing.rank}
                          </td>
                          <td className="px-4 py-3 font-semibold text-[#202122]">
                            {standing.teamName}
                          </td>
                          <td className="px-4 py-3 text-center text-[#202122]">
                            {standing.wins}—{standing.losses}
                          </td>
                          <td className="px-4 py-3 text-center font-semibold text-primary-500">
                            {standing.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-16 pt-12 border-t border-[#a2a9b1]">
          <h3 className="text-xl font-bold text-[#202122] mb-6">Ranking Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="card">
              <div className="text-green-400 font-bold text-sm mb-1">#1-2</div>
              <div className="text-[#54595d] text-xs">Auto Qualify to Playoffs</div>
            </div>
            <div className="card">
              <div className="text-blue-400 font-bold text-sm mb-1">#3-4</div>
              <div className="text-[#54595d] text-xs">Playoffs Bracket</div>
            </div>
            <div className="card">
              <div className="text-yellow-400 font-bold text-sm mb-1">#5-8</div>
              <div className="text-[#54595d] text-xs">Play-Ins Bracket</div>
            </div>
            <div className="card">
              <div className="text-orange-400 font-bold text-sm mb-1">#9-10</div>
              <div className="text-[#54595d] text-xs">Gauntlet Entry</div>
            </div>
            <div className="card">
              <div className="text-red-400 font-bold text-sm mb-1">#11-12</div>
              <div className="text-[#54595d] text-xs">Eliminated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

