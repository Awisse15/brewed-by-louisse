"use client";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function Hero() {
  return (
    <header className="overflow-hidden rounded-b-[40px] bg-hero pb-16 text-[#F4F0FA]">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <nav className="flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-2.5 text-lg font-extrabold">
            <span
              aria-hidden
              className="grid size-9 place-items-center rounded-xl bg-accent text-[#241638]"
            >
              <Coffee size={20} strokeWidth={2.25} />
            </span>
            Brewed by Louisse
          </a>
          <div className="flex gap-5 font-bold">
            <a href="#story">Story</a>
            <a href="#menu">Menu</a>
            <a href="#faq">FAQ</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <h1 className="mt-12 mb-7 text-[clamp(3rem,12vw,8.5rem)] font-extrabold leading-[0.92] tracking-tighter">
          Strong coffee.<br />Slow mornings.
        </h1>
        <p className="mb-7 max-w-[34ch] text-xl text-[#D9CCEF]">
          Locally roasted barako, ube lattes and pandesal fresh out of the oven.
        </p>
        <a href="#menu" className="inline-block rounded-full bg-accent px-6 py-3.5 font-extrabold text-[#241638]">
          See the menu
        </a>

        <div className="mt-9 flex h-14 gap-2.5" aria-hidden>
          {[1, 0.7, 0.5].map((h, i) => (
            <motion.i
              key={i}
              className="w-2 rounded-full bg-accent"
              style={{ height: `${h * 100}%` }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: [0, 0.9, 0], y: [24, 0, -16] }}
              transition={{ duration: 2.8, delay: i * 0.4, repeat: 2 }}
            />
          ))}
        </div>
      </div>
    </header>
  );
}