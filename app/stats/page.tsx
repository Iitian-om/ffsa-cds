"use client";

import { SectionTitle, Badge } from "@/components/UI";
import { STATS } from "@/lib/Mock_data";

interface StatsItem {
  rank: number;
  [key: string]: any;
}

export default function Stats() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Statistics</SectionTitle>

        {/* Tournament MVP */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary-500 mb-6">Tournament MVP</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#a2a9b1] bg-[#cedff2]">
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Rank</th>
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Player</th>
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Team</th>
                  <th className="text-right px-4 py-3 font-bold text-[#202122]">Points</th>
                </tr>
              </thead>
              <tbody>
                {STATS.tournamentMVP.map((player: StatsItem, idx: number) => (
                  <tr key={idx} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                    <td className="px-4 py-3">
                      <span className="font-bold text-primary-500">#{player.rank}</span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#202122]">
                      {player.playerName}
                    </td>
                    <td className="px-4 py-3 text-[#54595d]">{player.teamName}</td>
                    <td className="px-4 py-3 text-right font-bold text-primary-500">
                      {player.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Finals MVP */}
        <div className="mb-16 card border border-primary-500/30 p-6">
          <h3 className="text-xl font-bold text-primary-500 mb-6">Finals MVP</h3>
          {STATS.finalsMVP.map((player: StatsItem, idx: number) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <div className="font-bold text-2xl text-[#202122] mb-2">
                {player.playerName}
              </div>
              <div className="text-primary-500 font-semibold mb-4">{player.teamName}</div>
              <Badge variant="primary">Grand Final MVP</Badge>
            </div>
          ))}
        </div>

        {/* Best IGL & Most Eliminations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Best IGL */}
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-6">Best In-Game Leader</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#a2a9b1] bg-[#cedff2]">
                    <th className="text-left px-4 py-3 font-bold text-[#202122]">Rank</th>
                    <th className="text-left px-4 py-3 font-bold text-[#202122]">Player</th>
                    <th className="text-right px-4 py-3 font-bold text-[#202122]">Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {STATS.bestIGL.map((player: StatsItem, idx: number) => (
                    <tr key={idx} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                      <td className="px-4 py-3 font-bold text-primary-500">#{player.rank}</td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-[#202122]">{player.playerName}</div>
                        <div className="text-xs text-[#54595d]">{player.teamName}</div>
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-primary-500">
                        {player.callAccuracy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Most Eliminations */}
          <div>
            <h3 className="text-xl font-bold text-primary-500 mb-6">Most Eliminations</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#a2a9b1] bg-[#cedff2]">
                    <th className="text-left px-4 py-3 font-bold text-[#202122]">Rank</th>
                    <th className="text-left px-4 py-3 font-bold text-[#202122]">Team</th>
                    <th className="text-right px-4 py-3 font-bold text-[#202122]">Elims</th>
                  </tr>
                </thead>
                <tbody>
                  {STATS.mostEliminations.map((team: StatsItem, idx: number) => (
                    <tr key={idx} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                      <td className="px-4 py-3 font-bold text-primary-500">#{team.rank}</td>
                      <td className="px-4 py-3 font-semibold text-[#202122]">
                        {team.teamName}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="font-bold text-primary-500">{team.eliminations}</div>
                        <div className="text-xs text-[#54595d]">{team.averagePerMatch} avg</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="border-t border-[#a2a9b1] pt-12">
          <h3 className="text-xl font-bold text-[#202122] mb-6">Key Statistics</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <div className="text-sm text-[#54595d] mb-2">Total Matches</div>
              <div className="text-3xl font-bold text-primary-500">180</div>
            </div>

            <div className="card">
              <div className="text-sm text-[#54595d] mb-2">Total Eliminations</div>
              <div className="text-3xl font-bold text-primary-500">1,247</div>
            </div>

            <div className="card">
              <div className="text-sm text-[#54595d] mb-2">Avg Call Accuracy</div>
              <div className="text-3xl font-bold text-primary-500">94%</div>
            </div>

            <div className="card">
              <div className="text-sm text-[#54595d] mb-2">Tournament Duration</div>
              <div className="text-3xl font-bold text-primary-500">3 Weeks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

