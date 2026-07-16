import React from "react";

const Rewards = () => {
  const perks = [
    { title: "Lifetime access", desc: "No subscription. Ever." },
    { title: "70% off future products", desc: "For helping us see further." },
    { title: "Early insider access", desc: "First builds. First signals." },
    { title: "Founding community badge", desc: "Permanent. Recognized." },
  ];

  return (
    <section className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="chip mb-6">signal / 03</span>
          <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-5xl">
            Guess right.{" "}
            <span style={{ color: "var(--color-primary)" }}>Earn forever.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Anyone who helps shape the future of Simcuit may receive:
          </p>
        </div>

        <dl className="mt-14 grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4 border-y border-white/5">
          {perks.map((p, i) => (
            <div key={p.title} className="bg-background p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="mt-6 font-display text-base font-medium">
                {p.title}
              </dt>
              <dd className="mt-1.5 text-sm text-muted-foreground">{p.desc}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          We're rewarding insight, not luck.
        </p>
      </div>
    </section>
  );
};

export default Rewards;
