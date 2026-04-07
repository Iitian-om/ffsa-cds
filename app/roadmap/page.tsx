import { SectionTitle, Badge } from "@/components/UI";
import { BRACKET_STRUCTURE, SCHEDULE } from "@/lib/data";
import { CalendarDays, Flag, GitBranch, Trophy } from "lucide-react";

interface Match {
  id: number;
  team1: string;
  team2: string;
  time: string;
  format: string;
  Match_Title?: string;
  description?: string;
}

interface ScheduleDay {
  id: number;
  day: string;
  date: string;
  matches: Match[];
}

function getMatchLabel(match: Match) {
  return match.Match_Title || match.description || `${match.team1} vs ${match.team2}`;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function RoadmapPage() {
  const weekEntries = Object.entries(SCHEDULE) as [string, ScheduleDay[]][];

  const timelineDays = weekEntries
    .flatMap(([weekTitle, days]) =>
      days.map((day) => ({
        weekTitle,
        day,
      }))
    )
    .sort((a, b) => new Date(a.day.date).getTime() - new Date(b.day.date).getTime());

  const totalMatches = timelineDays.reduce((sum, item) => sum + item.day.matches.length, 0);
  const totalDays = timelineDays.length;
  const startDate = timelineDays[0]?.day.date;
  const endDate = timelineDays[timelineDays.length - 1]?.day.date;

  return (
    <div className="min-h-screen pt-20 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Roadmap</SectionTitle>

        <p className="text-[#54595d] text-sm sm:text-base max-w-3xl mb-6">
          Compact visual roadmap built from official schedule and bracket data.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="rounded-xl border border-[#a2a9b1] bg-white p-4">
            <div className="flex items-center gap-2 text-[#54595d] text-xs mb-1">
              <CalendarDays size={14} /> Timeline
            </div>
            <div className="text-lg font-bold text-[#202122]">{totalDays} Days</div>
          </div>
          <div className="rounded-xl border border-[#a2a9b1] bg-white p-4">
            <div className="flex items-center gap-2 text-[#54595d] text-xs mb-1">
              <Flag size={14} /> Matches
            </div>
            <div className="text-lg font-bold text-[#202122]">{totalMatches}</div>
          </div>
          <div className="rounded-xl border border-[#a2a9b1] bg-white p-4">
            <div className="flex items-center gap-2 text-[#54595d] text-xs mb-1">
              <GitBranch size={14} /> Bracket
            </div>
            <div className="text-lg font-bold text-[#202122]">{Object.keys(BRACKET_STRUCTURE.advancement).length} Paths</div>
          </div>
          <div className="rounded-xl border border-[#a2a9b1] bg-white p-4 col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-[#54595d] text-xs mb-1">
              <Trophy size={14} /> Duration
            </div>
            <div className="text-sm font-bold text-[#202122]">
              {startDate ? formatDate(startDate) : "TBD"} - {endDate ? formatDate(endDate) : "TBD"}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#a2a9b1] bg-white p-4 sm:p-5 mb-8 overflow-x-auto">
          <div className="min-w-[680px] grid grid-cols-5 gap-2 items-center">
            <div className="rounded-lg bg-[#f8f9fa] border border-[#eaecf0] px-3 py-3 text-center">
              <div className="text-[11px] uppercase text-[#54595d]">Stage 1</div>
              <div className="font-semibold text-[#202122] text-sm">League</div>
            </div>
            <div className="text-center text-primary-500 font-bold">→</div>
            <div className="rounded-lg bg-[#f8f9fa] border border-[#eaecf0] px-3 py-3 text-center">
              <div className="text-[11px] uppercase text-[#54595d]">Stage 2</div>
              <div className="font-semibold text-[#202122] text-sm">Wildcard / Play-Ins</div>
            </div>
            <div className="text-center text-primary-500 font-bold">→</div>
            <div className="rounded-lg bg-[#fff5ea] border border-[#f2c48b] px-3 py-3 text-center">
              <div className="text-[11px] uppercase text-[#9a6700]">Stage 3</div>
              <div className="font-semibold text-[#202122] text-sm">Playoffs / Finals</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <h3 className="text-xl font-bold text-primary-500">Calendar Timeline</h3>
          {timelineDays.map(({ weekTitle, day }) => (
            <details key={day.id} className="rounded-xl border border-[#a2a9b1] bg-white overflow-hidden group">
              <summary className="list-none cursor-pointer px-4 py-3 bg-[#f8f9fa] border-b border-[#eaecf0]">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <div className="text-[11px] text-[#54595d] uppercase tracking-wide">{weekTitle}</div>
                    <div className="text-sm sm:text-base font-bold text-[#202122]">{day.day}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="primary">{formatDate(day.date)}</Badge>
                    <span className="text-xs text-[#54595d] font-semibold">{day.matches.length} matches</span>
                  </div>
                </div>
              </summary>

              <div className="p-3 sm:p-4 space-y-2">
                {day.matches.map((match, idx) => (
                  <div key={match.id} className="rounded-lg border border-[#eaecf0] p-2.5 bg-[#f8f9fa]">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="font-semibold text-[#202122] text-sm">{idx + 1}. {getMatchLabel(match)}</div>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="primary">{match.format}</Badge>
                        <span className="text-[#54595d] font-semibold">{match.time}</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-[#54595d] mt-1">
                      {match.team1} vs {match.team2}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#a2a9b1] bg-white p-5">
            <h3 className="text-lg font-bold text-primary-500 mb-4">Advancement Roadmap</h3>
            <div className="space-y-2">
              {Object.entries(BRACKET_STRUCTURE.advancement).map(([rank, nextStage]) => (
                <div key={rank} className="flex items-center justify-between rounded-lg border border-[#eaecf0] px-3 py-2">
                  <span className="font-semibold text-[#202122]">{rank}</span>
                  <span className="text-sm text-[#54595d]">{nextStage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#a2a9b1] bg-white p-5">
            <h3 className="text-lg font-bold text-primary-500 mb-4">Final Path</h3>
            <div className="space-y-2">
              {BRACKET_STRUCTURE.mainBattle.map((round) => (
                <div key={round.round} className="rounded-lg border border-[#eaecf0] px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-[#202122]">{round.round}</span>
                    <Badge variant="primary">{round.format}</Badge>
                  </div>
                  <div className="text-sm text-[#54595d] mt-1">{round.match}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
