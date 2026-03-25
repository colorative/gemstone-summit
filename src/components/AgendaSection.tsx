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
  subtitle: string;
  tracks: Track[];
  note?: string;
}

const days: DayData[] = [
  {
    label: "Day 1",
    subtitle: "Mon, June 22 — Welcome",
    tracks: [
      {
        name: "All Attendees",
        icon: <Users className="w-4 h-4" />,
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
    subtitle: "Tue, June 23 — Core Sessions",
    tracks: [
      {
        name: "Business Owners & Sales",
        icon: <Users className="w-4 h-4" />,
        items: [
          { time: "8:00 – 9:00", session: "Breakfast", type: "meal" },
          { time: "9:00 – 9:30", session: "Welcome Remarks / Icebreaker", type: "session" },
          { time: "9:30 – 10:15", session: "Dealer Marketing Support", type: "session" },
          { time: "10:15 – 10:30", session: "Break", type: "break" },
          { time: "10:30 – 11:15", session: "Marketing & Lead Generation", type: "session" },
          { time: "11:15 – 12:00", session: "Dealer Spotlight", type: "session" },
          { time: "12:00 – 1:00", session: "Lunch", type: "meal" },
          { time: "1:00 – 1:15", session: "Marketing Recap", type: "session" },
          { time: "1:15 – 2:15", session: "Own Your Market – SEO & Digital Presence", type: "session" },
          { time: "2:15 – 2:30", session: "Break", type: "break" },
          { time: "2:30 – 3:30", session: "Sales & Negotiating Techniques", type: "session" },
          { time: "3:30 – 4:00", session: "Dealer Spotlight", type: "session" },
          { time: "4:00 – 4:45", session: "Product Development", type: "session" },
          { time: "4:45 – 5:00", session: "Closing Remarks", type: "session" },
        ],
      },
      {
        name: "Installers",
        icon: <Users className="w-4 h-4" />,
        items: [
          { time: "8:00 – 9:00", session: "Breakfast", type: "meal" },
          { time: "9:00 – 9:30", session: "Welcome & Orientation", type: "session" },
          { time: "9:30 – 10:00", session: "System Overview", type: "session" },
          { time: "10:00 – 11:00", session: "Field Install Overview", type: "session" },
          { time: "11:15 – 11:45", session: "Shuttle to Site", type: "transport" },
          { time: "12:00 – 1:00", session: "Lunch", type: "meal" },
          { time: "1:00 – 4:00", session: "Field Training & Installation Sessions", type: "session" },
          { time: "4:30 – 5:00", session: "Shuttle back to Marriott", type: "transport" },
        ],
      },
      {
        name: "Evening — All Attendees",
        icon: <Dumbbell className="w-4 h-4" />,
        items: [
          { time: "5:00 – 6:00 PM", session: "Dinner", type: "meal" },
          { time: "6:00 PM", session: "Shuttle to Pickleball Facility", type: "transport" },
          { time: "6:30 – 8:30 PM", session: "Pickleball", type: "activity" },
          { time: "8:30 PM", session: "Shuttle back to Marriott", type: "transport" },
          { time: "9:00 – 10:00 PM", session: "Community Tour (Optional)", type: "activity" },
        ],
      },
    ],
  },
  {
    label: "Day 3",
    subtitle: "Wed, June 24 — Deep Dives",
    note: "* Operational Efficiency — All Attendees together (1:00 – 2:00 PM)",
    tracks: [
      {
        name: "Business Owners & Sales",
        icon: <Users className="w-4 h-4" />,
        items: [
          { time: "8:00 – 9:00", session: "Breakfast", type: "meal" },
          { time: "9:00 – 9:15", session: "Field Day Debrief", type: "session" },
          { time: "9:15 – 10:00", session: "Material Cost & Profitability", type: "session" },
          { time: "10:00 – 10:45", session: "Shuttle to Site (last bus 10:15)", type: "transport" },
          { time: "11:00 – 12:00", session: "Walkthrough of Installation Project", type: "session" },
          { time: "12:00 – 1:00", session: "Lunch", type: "meal" },
          { time: "1:00 – 2:00", session: "Operational Efficiency *", type: "session" },
          { time: "2:00 – 2:15", session: "Break", type: "break" },
          { time: "2:15 – 2:45", session: "Working with Homebuilders", type: "session" },
          { time: "2:45 – 3:15", session: "App Demo", type: "session" },
          { time: "3:15 – 3:45", session: "Join a Breakout Session", type: "session" },
        ],
      },
      {
        name: "Installers",
        icon: <Users className="w-4 h-4" />,
        items: [
          { time: "8:00 – 9:00", session: "Breakfast", type: "meal" },
          { time: "9:00 – 10:00", session: "Installation Debrief", type: "session" },
          { time: "10:00 – 10:30", session: "Shuttle to Site", type: "transport" },
          { time: "10:30 – 12:00", session: "Installation Sessions", type: "session" },
          { time: "12:00 – 1:00", session: "Lunch", type: "meal" },
          { time: "1:00 – 2:00", session: "Operational Efficiency *", type: "session" },
          { time: "2:00 – 4:00", session: "Breakout Sessions (4 x 30 min rotating)", type: "session" },
          { time: "4:00 – 4:15", session: "Wrap Up", type: "session" },
        ],
      },
      {
        name: "Evening — All Attendees",
        icon: <Users className="w-4 h-4" />,
        items: [
          { time: "3:45 – 5:30 PM", session: "Panel & Closing Remarks", type: "session" },
          { time: "6:00 PM", session: "Dinner", type: "meal" },
          { time: "7:00 – 10:00 PM", session: "Games & Light Up Installation", type: "activity" },
        ],
      },
    ],
  },
  {
    label: "Day 4",
    subtitle: "Thu, June 25 — Mountain Trip",
    tracks: [
      {
        name: "Mountains & Banff — All Attendees",
        icon: <Mountain className="w-4 h-4" />,
        items: [
          { time: "8:00 AM", session: "Shuttle departs Marriott", type: "transport" },
          { time: "Midday", session: "Lunch on your own (not provided)", type: "meal" },
          { time: "~6:00 PM", session: "Arrive back at Marriott Courtyard", type: "transport" },
        ],
      },
    ],
  },
];

const typeStyles: Record<string, string> = {
  meal: "bg-accent/15 border-accent/30 text-accent-foreground",
  break: "bg-muted border-border text-muted-foreground",
  transport: "bg-secondary border-border text-secondary-foreground",
  activity: "bg-accent/10 border-accent/20 text-accent-foreground",
  session: "bg-card border-border text-card-foreground",
};

const typeIcons: Record<string, React.ReactNode> = {
  meal: <Utensils className="w-3.5 h-3.5 text-accent" />,
  break: <Clock className="w-3.5 h-3.5 text-muted-foreground" />,
  transport: <Bus className="w-3.5 h-3.5 text-muted-foreground" />,
  activity: <Dumbbell className="w-3.5 h-3.5 text-accent" />,
  session: <MapPin className="w-3.5 h-3.5 text-foreground" />,
};

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("0");

  const currentDay = days[parseInt(activeDay)];

  return (
    <section id="agenda" className="py-20 sm:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-display font-semibold tracking-widest uppercase text-accent">
            The Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-3">
            4 Days of Learning & Connection
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From hands-on installation training to marketing masterclasses — every session is designed to level up your dealership.
          </p>
        </motion.div>

        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-8 bg-secondary/50 p-1 rounded-xl h-auto">
            {days.map((day, i) => (
              <TabsTrigger
                key={i}
                value={String(i)}
                className="font-display text-sm sm:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
              >
                {day.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-lg font-display font-semibold text-foreground mb-6">
              {currentDay.subtitle}
            </p>

            <div className="space-y-8">
              {currentDay.tracks.map((track, ti) => (
                <div key={ti}>
                  <div className="flex items-center gap-2 mb-4">
                    {track.icon}
                    <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider">
                      {track.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {track.items.map((item, ii) => {
                      const t = item.type || "session";
                      return (
                        <motion.div
                          key={ii}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: ii * 0.03 }}
                          className={`flex items-start gap-4 p-3 sm:p-4 rounded-lg border ${typeStyles[t]} transition-shadow hover:card-shadow`}
                        >
                          <div className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px] shrink-0">
                            {typeIcons[t]}
                            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                              {item.time}
                            </span>
                          </div>
                          <span className="text-sm sm:text-base">{item.session}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {currentDay.note && (
              <p className="text-sm text-muted-foreground mt-6 italic">
                {currentDay.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="text-xs text-muted-foreground text-center mt-8">
          * Session topics and speakers are subject to change as planning is finalized.
        </p>
      </div>
    </section>
  );
};

export default AgendaSection;
