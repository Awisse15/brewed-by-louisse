"use client";
import { useEffect, useState } from "react";
import { Clock, DoorOpen, MapPin, Navigation, Plug, Wifi } from "lucide-react";
import InstagramIcon from "@/components/instagram-icon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/site";

const ADDRESS = "12 Mabini Street, Sample District";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const schedule = [
  { label: "Mon–Fri", days: [1, 2, 3, 4, 5], open: 6, close: 20 },
  { label: "Saturday", days: [6], open: 7, close: 22 },
  { label: "Sunday", days: [0], open: 7, close: 18 },
];

const amenities = [
  { icon: Wifi, label: "Free wifi" },
  { icon: Plug, label: "Outlets" },
  { icon: DoorOpen, label: "Walk-ins welcome" },
];

const dayIndex: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

const hoursFor = (day: number) => schedule.find((s) => s.days.includes(day))!;
const fmt = (h: number) => `${h % 12 || 12} ${h < 12 ? "AM" : "PM"}`;

function manilaNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)!.value;
  return {
    day: dayIndex[get("weekday")],
    hours: Number(get("hour")) + Number(get("minute")) / 60,
  };
}

function statusFor(now: { day: number; hours: number }) {
  const today = hoursFor(now.day);
  if (now.hours >= today.open && now.hours < today.close) {
    return { open: true, text: `Open now · closes ${fmt(today.close)}` };
  }
  if (now.hours < today.open) {
    return { open: false, text: `Closed · opens ${fmt(today.open)}` };
  }
  const tomorrow = hoursFor((now.day + 1) % 7);
  return { open: false, text: `Closed · opens ${fmt(tomorrow.open)} tomorrow` };
}

export default function Visit() {
  const [now, setNow] = useState<{ day: number; hours: number } | null>(null);

  useEffect(() => {
    setNow(manilaNow());
  }, []);

  const status = now ? statusFor(now) : null;

  return (
    <section id="visit" className="pt-18">
      <h2 className="mb-7 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight">
        Come by
      </h2>

      <div className="grid gap-3.5 lg:grid-cols-[1.3fr_1fr]">
        {/* Map */}
        <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-soft">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--card) 2px, transparent 2px), linear-gradient(90deg, var(--card) 2px, transparent 2px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div aria-hidden className="absolute -left-[10%] top-[42%] h-6 w-[130%] -rotate-12 bg-card" />
          <div aria-hidden className="absolute right-8 top-8 h-28 w-40 rounded-3xl bg-accent/25" />

          <div aria-hidden className="absolute left-[48%] top-[34%]">
            <span className="absolute inset-0 rounded-full bg-accent motion-safe:animate-ping" />
            <span className="relative grid size-14 place-items-center rounded-full bg-accent text-[#241638] shadow-lg">
              <MapPin size={26} />
            </span>
          </div>

          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-4 rounded-[22px] bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">Brewed by Louisse</h3>
              <p className="text-muted">{ADDRESS}</p>
              <p className="text-sm text-muted">Five minutes from the jeepney stop.</p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-extrabold text-[#241638]"
            >
              <Navigation size={18} aria-hidden /> Get directions
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col rounded-[28px] bg-card p-6 md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <Clock size={20} aria-hidden /> Hours
            </h3>
            {status && (
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold ${
                  status.open ? "bg-accent text-[#241638]" : "bg-soft text-ink"
                }`}
              >
                <span
                  aria-hidden
                  className={`size-2 rounded-full ${status.open ? "bg-[#241638]" : "bg-muted"}`}
                />
                {status.text}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            {schedule.map((s) => {
              const today = now ? s.days.includes(now.day) : false;
              return (
                <div
                  key={s.label}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 ${
                    today ? "bg-hero text-[#F4F0FA]" : ""
                  }`}
                >
                  <span className="font-bold">
                    {s.label}
                    {today && <span className="ml-2 text-sm font-normal text-[#D9CCEF]">Today</span>}
                  </span>
                  <span className="font-extrabold">
                    {fmt(s.open)} – {fmt(s.close)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {amenities.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm font-bold"
              >
                <Icon size={16} aria-hidden /> {label}
              </span>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-[#241638]"
            >
              <InstagramIcon /> @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}