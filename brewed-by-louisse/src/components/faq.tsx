"use client";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/data/site";

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Do you have wifi and outlets?", a: "Yes. Free wifi, and most tables near the wall have outlets." },
  {
    q: "Can I order ahead?",
    a: (
      <>
        Message us on Instagram at{" "}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-ink underline underline-offset-4"
        >
          @{INSTAGRAM_HANDLE}
        </a>{" "}
        before you arrive and we’ll have your order ready at the counter.
      </>
    ),
  },
  { q: "Do you have non-coffee drinks?", a: "We have matcha, tablea hot chocolate and calamansi cold brew without the coffee on request." },
  { q: "Do you take custom craft orders?", a: "Yes. Ask at the counter or send us a message with your idea." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-18">
      <h2 className="mb-7 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight">
        Good to know
      </h2>
      {faqs.map((f, i) => (
        <div key={f.q} className="mb-2.5 rounded-[20px] bg-card px-6 py-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between text-left font-bold"
          >
            {f.q}
            <ChevronDown className={`transition-transform ${open === i ? "rotate-180" : ""}`} aria-hidden />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden text-muted"
              >
                <span className="block pt-2.5">{f.a}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}