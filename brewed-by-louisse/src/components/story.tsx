export default function Story() {
  return (
    <section id="story" className="pt-18">
      <div className="grid gap-3.5 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[28px] bg-card p-9">
          <h2 className="text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight">
            Hi, I’m Louisse.
          </h2>
          <p className="mt-4 max-w-[60ch] text-lg">
            I started out making crafts by hand and selling them one order at a time.
            Brewed by Louisse is the same idea in a cup: small batches, made with care,
            and always a little personal.
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-[28px] bg-soft p-6">
          <div>
            <h3 className="text-xl font-bold">Craft corner</h3>
            <p className="mt-2 text-muted">
              Handmade coasters, tote bags and gift tags are sold at the counter. Ask about custom orders.
            </p>
          </div>
          <div className="mt-4 text-2xl font-extrabold">From ₱60</div>
        </div>
      </div>
    </section>
  );
}