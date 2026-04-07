"use client";

import Link from "next/link";
import { SectionTitle, Badge } from "@/components/UI";

export default function Schedule() {
  const weekCards = [
    {
      title: "Week 1",
      subtitle: "League Stage",
      format: "BO1",
      href: "/schedule/week1",
      description: "Opening round-robin matches for all teams.",
    },
    {
      title: "Week 2",
      subtitle: "Play-Ins & Wildcard",
      format: "BO3",
      href: "/schedule/week2",
      description: "Wildcard entry, qualifiers, and gauntlet eliminations.",
    },
    {
      title: "Week 3",
      subtitle: "Finals",
      format: "BO3 / BO7 / BO11",
      href: "/schedule/week3",
      description: "Playoffs, semi-finals, and the Grand final.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Tournament Schedule</SectionTitle>

        <p className="text-sm sm:text-base text-[#54595d] mt-2 mb-6">
          Choose a week to view detailed matches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {weekCards.map((week) => (
            <Link
              key={week.href}
              href={week.href}
              className="group rounded-2xl border border-[#a2a9b1] bg-white p-5 shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-[#202122] group-hover:text-primary-500">
                  {week.title}
                </h3>
                <Badge variant="primary">{week.format}</Badge>
              </div>
              <p className="mt-2 text-sm font-semibold text-[#202122]">{week.subtitle}</p>
              <p className="mt-1 text-sm text-[#54595d]">{week.description}</p>
              <p className="mt-4 text-sm font-semibold text-primary-500">View schedule</p>
            </Link>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 rounded-2xl border border-[#a2a9b1] bg-[#f8f9fa] px-4 sm:px-6 py-5">
          <h3 className="text-base sm:text-lg font-bold text-[#202122] mb-4">Legend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            <div>
              <Badge variant="success">Completed</Badge>
              <p className="text-xs sm:text-sm text-[#54595d] mt-2">Match has finished</p>
            </div>
            <div>
              <Badge variant="danger">LIVE</Badge>
              <p className="text-xs sm:text-sm text-[#54595d] mt-2">Currently in progress</p>
            </div>
            <div>
              <Badge variant="primary">Upcoming</Badge>
              <p className="text-xs sm:text-sm text-[#54595d] mt-2">Scheduled to play</p>
            </div>
            <div>
              <Badge variant="primary">BO3 / BO7</Badge>
              <p className="text-xs sm:text-sm text-[#54595d] mt-2">Best of format</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
