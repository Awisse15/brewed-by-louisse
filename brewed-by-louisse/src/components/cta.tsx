export default function Cta() {
  return (
    <div className="mt-18 rounded-[40px] bg-hero px-8 py-14 text-[#F4F0FA] md:px-12">
      <h2 className="mb-3 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight">
        Your table is waiting.
      </h2>
      <p className="mb-6 max-w-[36ch] text-[#D9CCEF]">
        Walk in any day and the first cup of barako is on us when you spend ₱200.
      </p>
      <a href="#visit" className="inline-block rounded-full bg-accent px-6 py-3.5 font-extrabold text-[#241638]">
        Plan your visit
      </a>
    </div>
  );
}