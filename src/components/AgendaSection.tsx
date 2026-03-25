import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Users, Utensils, Bus, Dumbbell, Mountain } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AgendaItem {
  time: string;
  session: string;
  type?: "meal" | "break" | "transport" | "activity" | "session";
}

interface Track {
  name: string;
  icon?: React.ReactNode;
  items: AgendaItem[];
}

interface DayData {
  label: string;
  weekday: string;
  subtitle: string;
  tracks: Track[];
  note?: string;
}

const days: DayData[] = [
  {
    label: "Day 1",
    weekday: "Mon",
    subtitle: "Mon, June 22 — Welcome",
    tracks: [
      {
        name: "All Attendees",
        items: [
          { time: "1:00 – 4:00 PM", session: "Registration & Welcome Reception (Marriott, Legacy Room) — Optional Facility Tours", type: "session" },
          { time: "5:30 PM", session: "Bus Pickup – Rooftop YYC", type: "transport" },
          { time: "6:00 PM", session: "Arrive Rooftop YYC", type: "transport" },
          { time: "6:30 PM", session: "Welcome Speeches", type: "session" },
          { time: "7:00 PM", session: "Dinner", type: "meal" },
          { time: "9:00 PM+", session: "First shuttle to Marriott (multiple departures)", type: "transport" },
          { time: "10:00 PM", session: "Last Bus to Marriott", type: "transport" },
        ],
      },
    ],
  },
  {
    label: "Day 2",
    weekday: "Tue",
    subtitle: "Tue, June 23 — Core Sessions",
    tracks: [
      {
        name: "Business Owners & Sales",
        items: [
          { time: "8:00 – 9:00", session: "Breakfast", type: "meal" },
          { time: "10:30 – 11:15", session: "Marketing & Lead Generation", type: "session" },
          { time: "2:30 – 3:30", session: "Sales & Negotiating Techniques", type: "session" },
        ],
      },
      {
        name: "Installers",
        items: [
          { time: "10:30 – 11:15", session: "Marketing & Lead Generation", type: "session" },
          { time: "1:00 – 4:00", session: "Field Training & Installation Sessions", type: "session" },
        ],
      },
    ],
  },
  {
    label: "Day 3",
    weekday: "Wed",
    subtitle: "Wed, June 24 — Deep Dives",
    tracks: [
      {
        name: "Business Strategy",
        items: [
          { time: "9:15 – 10:00", session: "Material Cost & Profitability", type: "session" },
          { time: "1:00 – 2:00", session: "Operational Efficiency *", type: "session" },
        ],
      },
    ],
  },
  {
    label: "Day 4",
    weekday: "Thu",
    subtitle: "Thu, June 25 — Mountain Trip",
    tracks: [
      {
        name: "Banff Trip",
        items: [
          { time: "8:00 AM", session: "Shuttle departs Marriott", type: "transport" },
          { time: "Midday", session: "Lunch in Banff", type: "meal" },
          { time: "~6:00 PM", session: "Arrive back at Marriott", type: "transport" },
        ],
      },
    ],
  },
];

const typeStyles: Record<string, string> = {
  meal: "bg-primary/5 border-neutral-100 text-primary",
  break: "bg-neutral-50 border-neutral-100 text-neutral-400",
  transport: "bg-neutral-50/50 border-neutral-100 text-neutral-500",
  activity: "bg-neutral-900 border-neutral-800 text-white",
  session: "bg-white border-neutral-100 text-neutral-900",
};

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("0");
  const currentDay = days[parseInt(activeDay)];

  return (
    <section id="agenda" className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-white antialiased text-neutral-900">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-4 text-primary mb-4">
            <div className="h-[1px] w-6 bg-primary" />
            <span className="text-[11px] font-medium uppercase tracking-widest font-display">Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 uppercase tracking-tight leading-tight">
            THE SUMMIT <span className="text-primary italic">AGENDA</span>
          </h2>
        </motion.div>

        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="mb-10 h-auto p-1 bg-neutral-100 inline-flex items-center rounded-md">
            {days.map((day, i) => (
              <TabsTrigger
                key={i}
                value={String(i)}
                className="px-6 py-2 h-auto flex flex-col items-center gap-0 data-[state=active]:bg-white data-[state=active]:text-neutral-950 transition-all rounded-md min-w-[100px]"
              >
                <span className="font-display uppercase tracking-wider text-[11px] font-medium leading-tight">{day.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-display font-medium leading-none mt-0.5">{day.weekday}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-6 border-l-2 border-primary pl-6 py-1">
                <h3 className="text-2xl font-display font-medium uppercase tracking-tight text-neutral-900">
                  {currentDay.subtitle}
                </h3>
              </div>

              <div className="grid gap-10">
                {currentDay.tracks.map((track, ti) => (
                  <div key={ti} className="space-y-6">
                    {track.name !== "All Attendees" && (
                      <h4 className="font-display font-medium text-neutral-950 text-xs uppercase tracking-[0.2em] border-b border-primary/20 pb-1 w-fit">
                        {track.name}
                      </h4>
                    )}
                    
                    <div className="grid gap-1.5">
                      {track.items.map((item, ii) => {
                        const t = item.type || "session";
                        return (
                          <div
                            key={ii}
                            // ENHANCED SOFT GREY HOVER effect per USER REQUEST (hover:bg-neutral-100/50 and border-neutral-200)
                            className={`flex flex-col sm:flex-row items-start sm:items-center gap-10 p-5 rounded-md border ${typeStyles[t]} hover:border-neutral-200 hover:bg-neutral-100/50 transition-all duration-300 group`}
                          >
                            <div className="flex items-center gap-4 min-w-[140px] shrink-0 sm:border-r border-current/10 sm:pr-10">
                                <span className="text-sm md:text-base font-medium tracking-wider font-display uppercase text-neutral-900 leading-tight group-hover:text-primary transition-colors">
                                  {item.time}
                                </span>
                            </div>
                            <span className="text-sm md:text-base font-body font-normal text-neutral-700 leading-relaxed">
                                {item.session}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default AgendaSection;
