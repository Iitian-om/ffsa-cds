"use client";

import { Card, SectionTitle } from "@/components/UI";
import { TEAMS } from "@/lib/data";
import { Users, MapPin } from "lucide-react";

interface Team {
  id: number;
  name: string;
  region: string;
  logo: string;
  description: string;
}

const REGIONS = ["India", "Bangladesh", "Nepal", "Pakistan"];

export default function Teams() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Teams</SectionTitle>

        <p className="text-lg text-secondary-300 mb-12 max-w-2xl">
          Meet the 12 elite Clash Squad teams competing for the $150,000 prize
          pool and the title of South Asia&apos;s Ultimate Champions.
        </p>

        {/* Teams by Region */}
        {REGIONS.map((region) => {
          const regionTeams = TEAMS.filter((t) => t.region === region);

          return (
            <div key={region} className="mb-16">
              <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-primary-500/30">
                <MapPin size={24} className="text-primary-400" />
                <h3 className="text-3xl font-orbitron font-bold text-primary-400">
                  {region}
                </h3>
                <span className="text-secondary-400 text-lg font-orbitron">
                  ({regionTeams.length} Teams)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionTeams.map((team: Team) => (
                  <Card
                    key={team.id}
                    hover
                    className="space-y-4 text-center"
                  >
                    {/* Logo */}
                    <div className="text-6xl animate-bounce hover:animate-none transition-all">
                      {team.logo}
                    </div>

                    {/* Team Name */}
                    <div className="space-y-2">
                      <h4 className="text-2xl font-orbitron font-bold text-white">
                        {team.name}
                      </h4>
                      <div className="flex items-center justify-center space-x-2 text-secondary-400">
                        <MapPin size={16} />
                        <span className="font-orbitron">{team.region}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary-300 text-sm leading-relaxed">
                      {team.description}
                    </p>

                    {/* Team Stats Placeholder */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-xs text-secondary-400">Members</div>
                        <div className="font-orbitron font-bold text-accent-400">4</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-secondary-400">Wins</div>
                        <div className="font-orbitron font-bold text-primary-400">
                          {Math.floor(Math.random() * 15)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-secondary-400">Avg Rating</div>
                        <div className="font-orbitron font-bold text-orange-400">
                          {(7 + Math.random() * 2).toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {/* Team Structure Info */}
        <div className="mt-20 p-8 glassmorphism">
          <div className="flex items-start space-x-4 mb-6">
            <Users className="text-primary-400 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4">Team Composition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-secondary-300">
                <div>
                  <p className="font-orbitron font-bold text-white mb-2">
                    Standard Team (4 Players)
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 1 In-Game Leader (IGL)</li>
                    <li>• 1 Assault Player</li>
                    <li>• 1 Support Player</li>
                    <li>• 1 Scout/Flex Player</li>
                  </ul>
                </div>
                <div>
                  <p className="font-orbitron font-bold text-white mb-2">
                    Squad Roster
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Main 4 Playing Members</li>
                    <li>• 2 Reserve Players</li>
                    <li>• 1 Coach</li>
                    <li>• 1 Team Manager</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Profile Cards */}
        <div className="mt-16 space-y-8">
          <h3 className="text-3xl font-orbitron font-bold text-primary-400 mb-8">
            Regional Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="space-y-4">
              <h4 className="text-xl font-orbitron font-bold text-accent-400">
                🇮🇳 India
              </h4>
              <p className="text-secondary-300">
                Home to the top-seeded teams with a combined 37 victories. Indian squads
                dominate with aggressive rotations and superior mid-game control.
              </p>
              <div className="pt-2 border-t border-white/10">
                <div className="text-sm">
                  <span className="text-secondary-400">Total Wins:</span>
                  <span className="text-primary-400 font-orbitron font-bold ml-2">
                    37
                  </span>
                </div>
              </div>
            </Card>

            <Card className="space-y-4">
              <h4 className="text-xl font-orbitron font-bold text-accent-400">
                🇧🇩 Bangladesh
              </h4>
              <p className="text-secondary-300">
                Emerging powerhouse with versatile teams excelling in fast-paced gameplay
                and unpredictable strategies that keep opponents guessing.
              </p>
              <div className="pt-2 border-t border-white/10">
                <div className="text-sm">
                  <span className="text-secondary-400">Total Wins:</span>
                  <span className="text-primary-400 font-orbitron font-bold ml-2">
                    18
                  </span>
                </div>
              </div>
            </Card>

            <Card className="space-y-4">
              <h4 className="text-xl font-orbitron font-bold text-accent-400">
                🇳🇵 Nepal
              </h4>
              <p className="text-secondary-300">
                Competitive region bringing solid defensive gameplay and tactical
                excellence to the tournament stage.
              </p>
              <div className="pt-2 border-t border-white/10">
                <div className="text-sm">
                  <span className="text-secondary-400">Total Wins:</span>
                  <span className="text-primary-400 font-orbitron font-bold ml-2">
                    11
                  </span>
                </div>
              </div>
            </Card>

            <Card className="space-y-4">
              <h4 className="text-xl font-orbitron font-bold text-accent-400">
                🇵🇰 Pakistan
              </h4>
              <p className="text-secondary-300">
                Determined qualifiers bringing fierce competition and determined gameplay.
                Known for tactical discipline and adaptation.
              </p>
              <div className="pt-2 border-t border-white/10">
                <div className="text-sm">
                  <span className="text-secondary-400">Total Wins:</span>
                  <span className="text-primary-400 font-orbitron font-bold ml-2">
                    9
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
