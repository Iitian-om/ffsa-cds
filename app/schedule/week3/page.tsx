import Link from "next/link";
import { SectionTitle } from "@/components/UI";
import { SCHEDULE } from "@/lib/data";
import ScheduleWeekView from "../_components/ScheduleWeekView";

const WEEK_KEY = "Week 3: Playoffs & Finals";

export default function Week3SchedulePage() {
  const days = (SCHEDULE[WEEK_KEY] || []) as never[];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <SectionTitle>Week 3 Schedule</SectionTitle>
          <Link href="/schedule" className="text-sm font-semibold text-primary-500 hover:text-primary-600">
            Back to all weeks
          </Link>
        </div>

        <ScheduleWeekView title={WEEK_KEY} days={days} />
      </div>
    </div>
  );
}
