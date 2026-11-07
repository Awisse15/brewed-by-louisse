"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame } from "lucide-react";
import { categories, menu, type Category } from "@/data/menu";

type Serve = "hot" | "iced";

const notes = ["Smoky", "Earthy", "Bold"];

function HotMug() {
  return (
    <svg viewBox="0 0 160 150" className="h-full w-full" role="img" aria-label="A steaming mug of coffee">
      {[62, 80, 98].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 38 q-7 -9 0 -18 q7 -9 0 -18`}
          fill="none"
          stroke="#241638"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 0.7, 0], y: [8, -4, -12] }}
          transition={{ duration: 2.6, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
      <path
        d="M118 66 h8 a16 16 0 0 1 0 32 h-12"
        fill="none"
        stroke="#241638"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <rect x="32" y="52" width="92" height="76" rx="18" fill="#241638" />
      <rect x="42" y="60" width="72" height="9" rx="4.5" fill="#E8B923" opacity="0.28" />
      <rect x="22" y="132" width="112" height="8" rx="4" fill="#241638" opacity="0.35" />
    </svg>
  );
}

function IcedGlass() {
  const cubes = [
    { x: 58, y: 66, r: -10, d: 0 },
    { x: 84, y: 76, r: 12, d: 0.6 },
    { x: 66, y: 96, r: 6, d: 1.1 },
  ];
  return (
    <svg viewBox="0 0 160 150" className="h-full w-full" role="img" aria-label="A tall glass of iced coffee">
      <line x1="96" y1="6" x2="86" y2="86" stroke="#241638" strokeWidth="6" strokeLinecap="round" />
      <path d="M38 34 h84 l-10 98 a8 8 0 0 1 -8 7 h-48 a8 8 0 0 1 -8 -7 z" fill="#241638" />
      <path d="M42 52 h76 l-1 10 h-74 z" fill="#E8B923" opacity="0.28" />
      {cubes.map((c) => (
        <motion.rect
          key={c.x}
          x={c.x}
          y={c.y}
          width="24"
          height="24"
          rx="6"
          fill="#F4F0FA"
          opacity="0.75"
          transform={`rotate(${c.r} ${c.x + 12} ${c.y + 12})`}
          animate={{ y: [c.y, c.y - 4, c.y] }}
          transition={{ duration: 3, delay: c.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

export default function MenuGrid() {
  const [active, setActive] = useState<Category>("coffee");
  const [serve, setServe] = useState<Serve>("hot");
  const featured = menu.find((item) => item.featured)!;
  const items = menu.filter((item) => item.category === active);

  return (
    <section id="menu" className="pt-18">
      <h2 className="mb-7 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight">
        What’s brewing
      </h2>

      <div className="grid gap-3.5 lg:grid-cols-[1fr_1.5fr]">
        {/* House favorite */}
        <div className="flex min-h-[420px] flex-col rounded-[28px] bg-accent p-7 text-[#241638] md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#241638] px-3 py-1.5 text-sm font-bold text-accent">
              <Flame size={14} aria-hidden /> House favorite
            </span>
            <div role="group" aria-label="Serving style" className="flex rounded-full bg-[#241638]/10 p-1">
              {(["hot", "iced"] as Serve[]).map((s) => (
                <button
                  key={s}
                  aria-pressed={serve === s}
                  onClick={() => setServe(s)}
                  className={`rounded-full px-4 py-1.5 text-sm font-bold capitalize transition-colors ${
                    serve === s ? "bg-[#241638] text-accent" : "text-[#241638]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto my-4 h-40 w-44 md:h-44 md:w-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={serve}
                className="h-full w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {serve === "hot" ? <HotMug /> : <IcedGlass />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-auto">
            <h3 className="text-5xl font-extrabold leading-none tracking-tighter md:text-6xl">
              {featured.name}
            </h3>
            <p className="mt-3 max-w-[32ch] text-lg text-[#4A3A12]">{featured.desc}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <ul className="flex flex-wrap gap-2">
                {notes.map((n) => (
                  <li
                    key={n}
                    className="rounded-full border border-[#241638]/40 px-3 py-1 text-sm font-bold"
                  >
                    {n}
                  </li>
                ))}
              </ul>
              <div className="text-3xl font-extrabold">₱{featured.price}</div>
            </div>
          </div>
        </div>

        {/* Menu list */}
        <div className="rounded-[28px] bg-card p-6 md:p-8">
          <div role="tablist" aria-label="Menu categories" className="mb-6 flex flex-wrap gap-2">
            {categories.map((c) => {
              const selected = active === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(c.id)}
                  className={`relative rounded-full px-5 py-2.5 font-bold transition-colors ${
                    selected ? "text-[#241638]" : "text-muted hover:text-ink"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="menu-tab"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{c.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {items.map((item) => (
                <li key={item.name} className="border-b border-soft py-4 last:border-0">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span aria-hidden className="flex-1 border-b-2 border-dotted border-ink/20" />
                    <span className="text-xl font-extrabold">₱{item.price}</span>
                  </div>
                  <p className="mt-1 max-w-[50ch] text-muted">{item.desc}</p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}