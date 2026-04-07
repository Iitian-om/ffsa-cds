"use client";

import { SectionTitle, Badge } from "@/components/UI";
import { SCHEDULE } from "@/lib/data";

interface Match {
  id: number;
  team1: string;
  team2: string;
  time: string;
  format: string;
  status: string;
  result?: string;
}

interface Day {
  id: number;
  day: string;
  date: string;
  matches: Match[];
}

function getStatusBadge(status: string) {
  if (status === "completed") return "success";
  if (status === "live") return "danger";
  return "primary";
}

export default function Schedule() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Schedule</SectionTitle>

        <div className="space-y-12">
          {Object.entries(SCHEDULE).map(([week, days]) => (
            <div key={week}>
              <h3 className="text-2xl font-bold text-primary-500 mb-6 pb-3 border-b border-[#a2a9b1]">
                {week}
              </h3>

              <div className="space-y-6">
                {(days as Day[]).map((daySchedule) => (
                  <div key={daySchedule.id}>
                    <div className="mb-4">
                      <div className="font-semibold text-[#202122] text-lg">
                        {daySchedule.day}
                      </div>
                      <div className="text-sm text-[#54595d]">
                        {new Date(daySchedule.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-[#a2a9b1] bg-[#cedff2]">
                            <th className="text-left px-4 py-3 font-bold text-[#202122]">
                              Time
                            </th>
                            <th className="text-left px-4 py-3 font-bold text-[#202122]">
                              Match
                            </th>
                            <th className="text-center px-4 py-3 font-bold text-[#202122]">
                              Format
                            </th>
                            <th className="text-center px-4 py-3 font-bold text-[#202122]">
                              Status
                            </th>
                            <th className="text-center px-4 py-3 font-bold text-[#202122]">
                              Result
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {daySchedule.matches.map((match) => (
                            <tr key={match.id} className="border-b border-[#a2a9b1] hover:bg-[#eaecf0]">
                              <td className="px-4 py-3 text-[#202122] font-semibold">
                                {match.time}
                              </td>
                              <td className="px-4 py-3">
                                <div className="text-[#202122]">
                                  <div className="font-semibold">{match.team1}</div>
                                  <div className="text-xs text-[#54595d]">vs</div>
                                  <div className="font-semibold">{match.team2}</div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <Badge variant="primary">{match.format}</Badge>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <Badge variant={getStatusBadge(match.status)}>
                                  {match.status === "completed"
                                    ? "Completed"
                                    : match.status === "live"
                                    ? "LIVE"
                                    : "Upcoming"}
                                </Badge>
                              </td>
                              <td className="px-4 py-3 text-center">
                                {match.status === "completed" && match.result ? (
                                  <span className="font-semibold text-primary-500">
                                    {match.result}
                                  </span>
                                ) : (
                                  <span className="text-[#54595d]">—</span>
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
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 pt-12 border-t border-[#a2a9b1]">
          <h3 className="text-xl font-bold text-[#202122] mb-6">Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Badge variant="success">Completed</Badge>
              <p className="text-sm text-[#54595d] mt-2">Match has finished</p>
            </div>
            <div>
              <Badge variant="danger">LIVE</Badge>
              <p className="text-sm text-[#54595d] mt-2">Currently in progress</p>
            </div>
            <div>
              <Badge variant="primary">Upcoming</Badge>
              <p className="text-sm text-[#54595d] mt-2">Scheduled to play</p>
            </div>
            <div>
              <Badge variant="primary">BO3 / BO7</Badge>
              <p className="text-sm text-[#54595d] mt-2">Best of format</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

