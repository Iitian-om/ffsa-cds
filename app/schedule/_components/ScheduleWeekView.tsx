"use client";

import { Badge } from "@/components/UI";

interface Match {
  id: number;
  team1: string;
  team2: string;
  time: string;
  format: string;
  status: string;
  result?: string;
  Reward?: string;
  Match_Title?: string;
  match_title?: string;
  objective?: string;
  description?: string;
}

interface Day {
  id: number;
  day: string;
  date: string;
  week?: string;
  matches: Match[];
}

interface ScheduleWeekViewProps {
  title: string;
  days: Day[];
}

function getStatusBadge(status: string) {
  if (status === "completed") return "success" as const;
  if (status === "live") return "danger" as const;
  return "primary" as const;
}

function getMatchTitle(match: Match) {
  return match.Match_Title || match.match_title || match.description || `Match ${match.id}`;
}

function getMatchDescription(match: Match) {
  return match.objective || match.description || "";
}

function getMatchResult(match: Match) {
  if (match.status === "completed" && match.result) {
    return <span className="font-semibold text-primary-500 text-xs sm:text-sm">{match.result}</span>;
}
    return null;
}

function getMatchTeams(match: Match) {
  return `${match.team1} vs ${match.team2}`;
}

function getMatchReward(match: Match) {
    return match.Reward ? `Reward: ${match.Reward}` : null;
}

function getMatchObjective(match: Match) {
  return match.objective || match.description || "";
}

export default function ScheduleWeekView({ title, days }: ScheduleWeekViewProps) {
  return (
    <div className="rounded-2xl border border-[#a2a9b1] bg-white/80 shadow-sm overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-[#eaecf0] bg-[#f8f9fa]">
        <h3 className="text-lg sm:text-xl font-bold text-primary-500">{title}</h3>
      </div>

      <div className="space-y-4 px-4 sm:px-6 py-4 sm:py-5">
        {days.map((daySchedule) => (
          <div key={daySchedule.id} className="rounded-xl border border-[#eaecf0] bg-white">
            <div className="flex flex-col gap-1 px-3 sm:px-4 pt-3">
              {daySchedule.week ? (
                <div className="inline-flex w-fit rounded-full bg-[#eaecf0] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#54595d]">
                  {daySchedule.week}
                </div>
              ) : null}
              <div className="font-semibold text-[#202122] text-base sm:text-[15px] leading-tight">
                {daySchedule.day}
              </div>
              <div className="text-xs text-[#54595d]">
                {new Date(daySchedule.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            <div className="overflow-x-auto mt-3 border-t border-[#eaecf0]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#eaecf0] bg-[#f8f9fa]">
                    <th className="text-left px-3 sm:px-4 py-2.5 font-semibold text-[#202122] text-xs uppercase tracking-wide w-[92px]">
                      Time
                    </th>
                    <th className="text-left px-3 sm:px-4 py-2.5 font-semibold text-[#202122] text-xs uppercase tracking-wide">
                      Match Details
                    </th>
                    <th className="text-center px-3 sm:px-4 py-2.5 font-semibold text-[#202122] text-xs uppercase tracking-wide w-[90px]">
                      Format
                    </th>
                    <th className="text-center px-3 sm:px-4 py-2.5 font-semibold text-[#202122] text-xs uppercase tracking-wide w-[96px]">
                      Status
                    </th>
                    <th className="text-center px-3 sm:px-4 py-2.5 font-semibold text-[#202122] text-xs uppercase tracking-wide w-[90px]">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {daySchedule.matches.map((match) => (
                    <tr key={match.id} className="border-b border-[#eaecf0] last:border-b-0 hover:bg-[#f8f9fa]">
                      <td className="px-3 sm:px-4 py-2.5 text-[#202122] font-semibold whitespace-nowrap text-xs sm:text-sm">
                        {match.time}
                      </td>
                      <td className="px-3 sm:px-4 py-2.5">
                        <div className="text-[#202122] space-y-1">
                          <div className="font-semibold text-sm sm:text-[15px] leading-tight">
                            {getMatchTitle(match)}
                          </div>
                          {getMatchObjective(match) ? (
                            <div className="text-[11px] sm:text-xs text-[#54595d] leading-relaxed max-w-2xl">
                              {getMatchObjective(match)}
                            </div>
                          ) : null}
                          <div className="pt-0.5 text-xs text-[#202122] flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="font-semibold">{match.team1}</span>
                            <span className="text-[#54595d]">vs</span>
                            <span className="font-semibold">{match.team2}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-2.5 text-center align-middle">
                        <Badge variant="primary">{match.format}</Badge>
                      </td>
                      <td className="px-3 sm:px-4 py-2.5 text-center align-middle">
                        <Badge variant={getStatusBadge(match.status)}>
                          {match.status === "completed"
                            ? "Completed"
                            : match.status === "live"
                            ? "LIVE"
                            : "Upcoming"}
                        </Badge>
                      </td>
                      <td className="px-3 sm:px-4 py-2.5 text-center align-middle">
                        {match.status === "completed" && match.result ? (
                          <span className="font-semibold text-primary-500 text-xs sm:text-sm">
                            {match.result}
                          </span>
                        ) : (
                          <span className="text-[#54595d] text-xs sm:text-sm">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
