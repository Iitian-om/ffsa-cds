"use client";

import { Card, SectionTitle, Badge } from "@/components/UI";
import { Trophy } from "lucide-react";
import { BRACKET_STRUCTURE, PRIZE_BREAKDOWN, SCHEDULE } from "@/lib/data";

function formatPrize(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function Bracket() {
  const championPrize = PRIZE_BREAKDOWN.find((item) => item.place === "1st")?.amount ?? 0;
  const week3Schedule = SCHEDULE["Week 3: Playoffs & Finals"] as {
    day: string;
    date: string;
    matches: { Match_Title?: string; team1: string; team2: string; format: string }[];
  }[];
  const grandFinalDay = week3Schedule.find((day) => day.day.toLowerCase().includes("grand finals"));
  const grandFinalMatch = grandFinalDay?.matches.find((match) => (match.Match_Title || "").includes("GRAND FINAL"));

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Bracket</SectionTitle>

        <p className="text-lg text-[#54595d] mb-10 max-w-2xl">
          Bracket flow based on official FFSA CDS schedule and bracket data.
        </p>

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-bold text-primary-500 mb-4">Advancement Map</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(BRACKET_STRUCTURE.advancement).map(([rank, destination]) => (
                <div key={rank} className="rounded-lg border border-[#c8ccd1] p-3 bg-[#f8f9fa]">
                  <div className="text-xs uppercase tracking-wide text-[#54595d]">{rank}</div>
                  <div className="font-semibold text-[#202122]">{destination}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-primary-500 mb-4">Wildcard</h3>
            <div className="space-y-3">
              {BRACKET_STRUCTURE.wildcard.map((item) => (
                <div key={item.match} className="rounded-lg border border-[#c8ccd1] p-4 bg-white">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="font-semibold text-[#202122]">{item.match}</div>
                    <Badge variant="primary">{item.format}</Badge>
                  </div>
                  <div className="text-sm text-[#54595d] mt-2">Winner: {item.winner}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-primary-500 mb-4">Play-Ins</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BRACKET_STRUCTURE.playIns.map((item) => (
                <div key={item.round} className="rounded-lg border border-[#c8ccd1] p-4 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-[#202122]">{item.round}</div>
                    <Badge variant="primary">{item.format}</Badge>
                  </div>
                  <div className="text-sm text-[#202122]">{item.match}</div>
                  <div className="text-xs text-[#54595d]">Winner: {item.winner || "-"}</div>
                  <div className="text-xs text-[#54595d]">Loser: {item.loser || "-"}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-primary-500 mb-4">Playoffs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BRACKET_STRUCTURE.playoffs.map((item) => (
                <div key={item.match} className="rounded-lg border border-[#c8ccd1] p-4 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-[#202122]">{item.match}</div>
                    <Badge variant="primary">{item.format}</Badge>
                  </div>
                  <div className="text-xs text-[#54595d]">Destination: {item.destination}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-primary-500 mb-4">Main Battle</h3>
            <div className="space-y-3">
              {BRACKET_STRUCTURE.mainBattle.map((item) => (
                <div key={item.round} className="rounded-lg border border-[#c8ccd1] p-4 bg-white">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="font-semibold text-[#202122]">{item.round}</div>
                    <Badge variant="primary">{item.format}</Badge>
                  </div>
                  <div className="text-sm text-[#202122] mt-2">{item.match}</div>
                  <div className="text-xs text-[#54595d] mt-2">Winner: {item.winner}</div>
                  <div className="text-xs text-[#54595d]">Loser: {item.loser || "Runner Up"}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-2 border-orange-500 bg-gradient-to-br from-orange-500/20 to-primary-500/20">
            <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
              <Trophy size={22} />
              Grand Final Snapshot
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-[#54595d] uppercase tracking-wide">Date</div>
                <div className="font-semibold text-[#202122]">
                  {grandFinalDay ? new Date(grandFinalDay.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "TBD"}
                </div>
              </div>
              <div>
                <div className="text-xs text-[#54595d] uppercase tracking-wide">Match</div>
                <div className="font-semibold text-[#202122]">{grandFinalMatch?.team1 || "SF1 Winner"} vs {grandFinalMatch?.team2 || "SF2 Winner"}</div>
              </div>
              <div>
                <div className="text-xs text-[#54595d] uppercase tracking-wide">Champion Prize</div>
                <div className="font-semibold text-accent-400">{formatPrize(championPrize)}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
