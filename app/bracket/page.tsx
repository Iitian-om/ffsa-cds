"use client";

import { Card, SectionTitle, Badge } from "@/components/UI";
import { BRACKET_STRUCTURE } from "@/lib/data";
import { Trophy, ChevronRight } from "lucide-react";

export default function Bracket() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Tournament Bracket</SectionTitle>

        <p className="text-lg text-secondary-300 mb-12 max-w-2xl">
          Follow the journey from Play-Ins through the Grand Finals. The path to
          championship glory starts here.
        </p>

        {/* Desktop Bracket View */}
        <div className="hidden lg:block overflow-x-auto pb-6">
          <div className="min-w-max space-y-8 p-4">
            {/* Play-Ins Stage */}
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-accent-400 mb-6">
                Play-Ins
              </h3>
              <div className="flex items-center justify-center">
                <Card className="w-56 space-y-3 text-center">
                  <Badge variant="primary">5th vs 6th</Badge>
                  <div className="space-y-2">
                    <div className="font-orbitron font-bold text-white">
                      5th Place Qualifier
                    </div>
                    <div className="text-secondary-400 font-orbitron text-sm">vs</div>
                    <div className="font-orbitron font-bold text-white">
                      6th Place Qualifier
                    </div>
                  </div>
                  <div className="text-accent-400 font-orbitron font-bold text-sm">
                    BO3
                  </div>
                </Card>

                <div className="px-8">
                  <ChevronRight size={32} className="text-primary-500" />
                </div>

                <Card className="w-56 space-y-3 text-center bg-primary-500/10 border-primary-500">
                  <Badge variant="success">Winner</Badge>
                  <div className="font-orbitron font-bold text-lg text-primary-400">
                    Play-In Winner
                  </div>
                  <div className="text-sm text-secondary-400">
                    Advances to Playoffs
                  </div>
                </Card>
              </div>
            </div>

            {/* Semi-Finals Stage */}
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-accent-400 mb-6">
                Playoffs
              </h3>
              <div className="flex gap-8 justify-center">
                {/* Semi 1 */}
                <div className="space-y-2">
                  <Card className="w-56 space-y-3 text-center">
                    <Badge variant="primary">Semi Final 1</Badge>
                    <div className="space-y-2">
                      <div className="font-orbitron font-bold text-white">
                        1st Seed
                      </div>
                      <div className="text-secondary-400 font-orbitron text-sm">vs</div>
                      <div className="font-orbitron font-bold text-white">
                        Play-In Winner
                      </div>
                    </div>
                    <div className="text-accent-400 font-orbitron font-bold text-sm">
                      BO3
                    </div>
                  </Card>
                  <div className="text-center">
                    <ChevronRight size={24} className="text-primary-500 mx-auto" />
                  </div>
                </div>

                {/* Semi 2 */}
                <div className="space-y-2">
                  <Card className="w-56 space-y-3 text-center">
                    <Badge variant="primary">Semi Final 2</Badge>
                    <div className="space-y-2">
                      <div className="font-orbitron font-bold text-white">
                        2nd Seed
                      </div>
                      <div className="text-secondary-400 font-orbitron text-sm">vs</div>
                      <div className="font-orbitron font-bold text-white">
                        3rd Seed
                      </div>
                    </div>
                    <div className="text-accent-400 font-orbitron font-bold text-sm">
                      BO3
                    </div>
                  </Card>
                  <div className="text-center">
                    <ChevronRight size={24} className="text-primary-500 mx-auto" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <Card className="w-56 space-y-3 text-center bg-primary-500/10 border-primary-500">
                  <Badge variant="success">Winner 1</Badge>
                  <div className="font-orbitron font-bold text-primary-400">
                    To Grand Final
                  </div>
                </Card>

                <Card className="w-56 space-y-3 text-center bg-primary-500/10 border-primary-500">
                  <Badge variant="success">Winner 2</Badge>
                  <div className="font-orbitron font-bold text-primary-400">
                    To Grand Final
                  </div>
                </Card>
              </div>
            </div>

            {/* Grand Final */}
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-orange-400 mb-6 flex items-center space-x-2">
                <Trophy size={28} />
                <span>Grand Final</span>
              </h3>

              <div className="flex justify-center">
                <Card className="w-64 space-y-4 text-center border-2 border-orange-500 bg-gradient-to-br from-orange-500/20 to-primary-500/20">
                  <div>
                    <Badge variant="danger">Championship Match</Badge>
                  </div>

                  <div className="space-y-3 py-4">
                    <div>
                      <div className="text-sm text-secondary-400 mb-1">
                        Finals Date
                      </div>
                      <div className="font-orbitron font-bold text-lg">
                        2024-04-20
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-3">
                      <div className="text-sm text-secondary-400 mb-1">
                        Semi 1 Winner
                      </div>
                      <div className="font-orbitron font-bold text-white mb-2">
                        vs
                      </div>
                      <div className="text-sm text-secondary-400">Semi 2 Winner</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-2xl font-orbitron font-bold text-orange-400">
                      BO11
                    </div>
                    <div className="text-sm text-secondary-400">
                      First to 6 Rounds
                    </div>
                  </div>

                  <div className="pt-4 space-y-1">
                    <Trophy className="mx-auto text-yellow-400" size={32} />
                    <div className="font-orbitron font-bold text-accent-400">
                      $100,000
                    </div>
                    <div className="text-xs text-secondary-400">1st Place Prize</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bracket View */}
        <div className="lg:hidden space-y-6">
          {/* Play-Ins */}
          <div>
            <h3 className="text-xl font-orbitron font-bold text-accent-400 mb-3">
              Play-Ins Stage
            </h3>
            <Card className="space-y-3">
              <Badge variant="primary">5th Place vs 6th Place</Badge>
              <div className="text-center space-y-2">
                <div className="font-orbitron font-bold">5th Qualifier</div>
                <div className="text-secondary-400">vs</div>
                <div className="font-orbitron font-bold">6th Qualifier</div>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="text-accent-400 font-orbitron font-bold">BO3</span>
                <span className="text-primary-400 text-sm">→ Playoffs</span>
              </div>
            </Card>
          </div>

          {/* Semi-Finals */}
          <div>
            <h3 className="text-xl font-orbitron font-bold text-accent-400 mb-3">
              Playoffs (Semi-Finals)
            </h3>
            <div className="space-y-3">
              <Card className="space-y-3">
                <Badge variant="primary">Semi Final 1</Badge>
                <div className="text-center space-y-2 text-sm">
                  <div className="font-orbitron font-bold">1st Seed</div>
                  <div className="text-secondary-400">vs</div>
                  <div className="font-orbitron font-bold">Play-In Winner</div>
                </div>
                <div className="text-center text-accent-400 font-orbitron font-bold pt-2">
                  BO3
                </div>
              </Card>

              <Card className="space-y-3">
                <Badge variant="primary">Semi Final 2</Badge>
                <div className="text-center space-y-2 text-sm">
                  <div className="font-orbitron font-bold">2nd Seed</div>
                  <div className="text-secondary-400">vs</div>
                  <div className="font-orbitron font-bold">3rd Seed</div>
                </div>
                <div className="text-center text-accent-400 font-orbitron font-bold pt-2">
                  BO3
                </div>
              </Card>
            </div>
          </div>

          {/* Grand Final */}
          <div>
            <h3 className="text-xl font-orbitron font-bold text-orange-400 mb-3 flex items-center space-x-2">
              <Trophy size={24} />
              <span>Grand Final</span>
            </h3>
            <Card className="space-y-4 border-2 border-orange-500 bg-gradient-to-br from-orange-500/20 to-primary-500/20">
              <div className="text-center space-y-2">
                <div className="text-sm text-secondary-400">Date</div>
                <div className="font-orbitron font-bold text-lg">2024-04-20</div>
              </div>

              <div className="border-t border-white/10 pt-4 text-center space-y-2">
                <div className="text-sm text-secondary-400">Semi-Final Winners</div>
                <div className="font-orbitron font-bold">vs</div>
              </div>

              <div className="space-y-2 text-center">
                <div className="text-2xl font-orbitron font-bold text-orange-400">
                  BO11
                </div>
                <div className="flex justify-center space-x-2">
                  <Trophy className="text-yellow-400" size={24} />
                  <div>
                    <div className="font-orbitron font-bold text-lg text-accent-400">
                      $100,000
                    </div>
                    <div className="text-xs text-secondary-400">
                      1st Place Prize
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bracket Info */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-orbitron font-bold text-primary-400">
            Tournament Rules & Format
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h4 className="font-orbitron font-bold text-lg text-accent-400 mb-3">
                Play-Ins Format
              </h4>
              <ul className="space-y-2 text-secondary-300 text-sm">
                <li>• 5th Place team vs 6th Place team</li>
                <li>• Best of 3 (BO3) Series</li>
                <li>• Winner advances to Playoffs</li>
                <li>• Loser is eliminated</li>
              </ul>
            </Card>

            <Card>
              <h4 className="font-orbitron font-bold text-lg text-accent-400 mb-3">
                Playoffs Format
              </h4>
              <ul className="space-y-2 text-secondary-300 text-sm">
                <li>• 1st & 2nd seeds get byes to semis</li>
                <li>• All matches are Best of 3 (BO3)</li>
                <li>• Winners advance to Grand Final</li>
                <li>• Both semis played simultaneously</li>
              </ul>
            </Card>

            <Card className="md:col-span-2">
              <h4 className="font-orbitron font-bold text-lg text-accent-400 mb-3">
                Grand Final Format
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-orbitron font-bold text-orange-400">
                    BO11
                  </div>
                  <div className="text-sm text-secondary-400">
                    Best of 11 Rounds
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-orbitron font-bold text-primary-400">
                    First to 6
                  </div>
                  <div className="text-sm text-secondary-400">
                    Rounds needed to win
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-orbitron font-bold text-accent-400">
                    $100K
                  </div>
                  <div className="text-sm text-secondary-400">
                    Champion Prize
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
