"use client";

import Link from "next/link";
import { Button, Card, Badge, SectionTitle, Table } from "@/components/UI";
import { TOURNAMENT_INFO, PRIZE_BREAKDOWN, STANDINGS, SCHEDULE } from "@/lib/data";
import { Trophy, Calendar, Users } from "lucide-react";

export default function Home() {
  const upcomingMatches = Object.values(SCHEDULE)
    .flat()
    .flatMap((day: any) => day.matches || [])
    .filter((m: any) => m.status !== "completed")
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#a2a9b1]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#202122] leading-tight">
                {TOURNAMENT_INFO.fullName}
              </h1>
              <p className="text-lg text-[#54595d] mt-4 max-w-2xl">
                {TOURNAMENT_INFO.tagline}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card">
                <div className="text-sm text-[#54595d]">Teams</div>
                <div className="text-2xl font-bold text-primary-500 mt-1">
                  {TOURNAMENT_INFO.teams}
                </div>
              </div>
              <div className="card">
                <div className="text-sm text-[#54595d]">Prize Pool</div>
                <div className="text-2xl font-bold text-primary-500 mt-1">
                  ${TOURNAMENT_INFO.prizePool / 1000}K
                </div>
              </div>
              <div className="card">
                <div className="text-sm text-[#54595d]">Region</div>
                <div className="text-2xl font-bold text-primary-500 mt-1">
                  South Asia
                </div>
              </div>
              <div className="card">
                <div className="text-sm text-[#54595d]">Duration</div>
                <div className="text-2xl font-bold text-primary-500 mt-1">
                  3 Weeks
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button href="/schedule">
                <Calendar size={16} className="mr-2" />
                View Schedule
              </Button>
              <Button href="/standings" variant="secondary">
                View Standings
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-[#a2a9b1]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Tournament Format</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["League", "Wildcard", "Play-Ins", "Playoffs", "Finals"].map((stage, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-sm text-[#54595d] mb-2">Stage {idx + 1}</div>
                <div className="font-bold text-lg text-[#202122]">{stage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-[#a2a9b1]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Prize Pool Distribution</SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#a2a9b1]">
                  <th className="text-left px-4 py-3 font-bold text-[#202122]">Placement</th>
                  <th className="text-right px-4 py-3 font-bold text-[#202122]">Prize</th>
                </tr>
              </thead>
              <tbody>
                {PRIZE_BREAKDOWN.map((prize, idx) => (
                  <tr key={idx} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                    <td className="px-4 py-3 text-[#202122]">{prize.place}</td>
                    <td className="px-4 py-3 text-right text-primary-500 font-bold">
                      ${prize.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#cedff2] font-bold">
                  <td className="px-4 py-3 text-[#202122]">Total Pool</td>
                  <td className="px-4 py-3 text-right text-primary-500 text-lg">
                    ${TOURNAMENT_INFO.prizePool.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-b border-[#a2a9b1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <SectionTitle>Upcoming Matches</SectionTitle>
            <Link href="/schedule" className="text-primary-500 hover:text-primary-600 font-semibold">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {upcomingMatches.map((match: any, idx: number) => (
              <div key={idx} className="card card-hover flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="primary">{match.format}</Badge>
                    <span className="text-sm text-[#54595d]">{match.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#202122]">{match.team1}</span>
                    <span className="text-[#54595d] mx-4">vs</span>
                    <span className="font-semibold text-[#202122]">{match.team2}</span>
                  </div>
                </div>
                <Button variant="ghost" href="/schedule" className="ml-4">
                  View →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Teams */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <SectionTitle>Top Teams</SectionTitle>
            <Link href="/standings" className="text-primary-500 hover:text-primary-600 font-semibold">
              Full Standings →
            </Link>
          </div>

          <div className="space-y-2">
            {STANDINGS.slice(0, 5).map((team) => (
              <div key={team.rank} className="card card-hover">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="font-bold text-primary-500 w-8">#{team.rank}</span>
                    <div>
                      <div className="font-semibold text-[#202122]">{team.teamName}</div>
                      <div className="text-sm text-[#54595d]">{team.region}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-[#202122]">
                      {team.wins}W—{team.losses}L
                    </div>
                    <div className="text-sm text-[#54595d]">{team.points} pts</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

