"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0e27] border-t border-[#1f2937] mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-500">FFSA CDS</h3>
            <p className="text-[#9ca3af]">
              South Asia&apos;s Ultimate Clash Squad Championship
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Twitter
              </a>
              <a href="#" className="text-primary-500 hover:text-primary-600">
                Discord
              </a>
              <a href="#" className="text-primary-500 hover:text-primary-600">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#f0f0f0]">Quick Links</h4>
            <ul className="space-y-2 text-[#9ca3af]">
              <li>
                <Link href="/schedule" className="hover:text-primary-500">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/standings" className="hover:text-primary-500">
                  Standings
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-primary-500">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/bracket" className="hover:text-primary-500">
                  Bracket
                </Link>
              </li>
            </ul>
          </div>

          {/* Tournament Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#f0f0f0]">Tournament</h4>
            <ul className="space-y-2 text-[#9ca3af] text-sm">
              <li>
                <span className="text-[#f0f0f0]">Teams:</span> 12
              </li>
              <li>
                <span className="text-[#f0f0f0]">Region:</span> South Asia
              </li>
              <li>
                <span className="text-[#f0f0f0]">Game:</span> Free Fire MAX
              </li>
              <li>
                <span className="text-[#f0f0f0]">Format:</span> Clash Squad
              </li>
            </ul>
          </div>

          {/* Prize Pool */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#f0f0f0]">Prize Pool</h4>
            <div className="text-3xl font-bold text-primary-500">$150K</div>
            <p className="text-[#9ca3af] text-sm">
              Distributed among top teams
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1f2937] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-[#6b7280]">
              © 2024 FFSA CDS. All rights reserved.
            </p>
            <div className="flex space-x-6 text-[#6b7280]">
              <Link href="#" className="hover:text-primary-500">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-500">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary-500">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

