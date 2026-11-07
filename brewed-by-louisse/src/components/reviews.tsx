import { Quote, Star } from "lucide-react";

type Review = {
  quote: string;
  name: string;
  role: string;
  tone: string;
  span: string;
};

const reviews: Review[] = [
  {
    quote:
      "The ube latte is the reason I come back every weekend. It's creamy, not too sweet, and they always remember my order.",
    name: "Mika",
    role: "Regular",
    tone: "bg-hero text-[#F4F0FA]",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    quote: "Warm pandesal and a quiet table. Perfect for studying.",
    name: "Paolo",
    role: "Student",
    tone: "bg-card",
    span: "md:col-span-1",
  },
  {
    quote: "I bought a tote bag and stayed for two more coffees.",
    name: "Joy",
    role: "Neighbor",
    tone: "bg-soft",
    span: "md:col-span-1",
  },
  {
    quote: "Barako Black is strong in the best way. Finally a café that doesn't water it down.",
    name: "Renz",
    role: "Coffee lover",
    tone: "bg-accent text-[#241638]",
    span: "md:col-span-2",
  },
];

function Stars({ light }: { light?: boolean }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={16}
          aria-hidden
          className={light ? "fill-accent text-accent" : "fill-current"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="pt-18">
      <h2 className="mb-7 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight">
        Good things people say
      </h2>

      <div className="grid gap-3.5 md:grid-cols-4">
        {reviews.map((r, i) => {
          const featured = i === 0;
          return (
            <figure
              key={r.name}
              className={`flex flex-col justify-between rounded-[28px] p-6 md:p-8 ${r.tone} ${r.span}`}
            >
              <div>
                {featured ? (
                  <Quote size={36} aria-hidden className="mb-4 text-accent" />
                ) : (
                  <Stars />
                )}
                <blockquote
                  className={
                    featured
                      ? "mt-1 text-2xl font-bold leading-snug tracking-tight md:text-4xl"
                      : "mt-3 text-lg font-bold leading-snug"
                  }
                >
                  {r.quote}
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`grid size-10 place-items-center rounded-full font-extrabold ${
                      featured ? "bg-accent text-[#241638]" : "bg-ink/10"
                    }`}
                  >
                    {r.name[0]}
                  </span>
                  <div className="leading-tight">
                    <div className="font-bold">{r.name}</div>
                    <div className={`text-sm ${featured ? "text-[#D9CCEF]" : "opacity-70"}`}>
                      {r.role}
                    </div>
                  </div>
                </div>
                {featured && <Stars light />}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-muted">Sample reviews for this concept project.</p>
    </section>
  );
}