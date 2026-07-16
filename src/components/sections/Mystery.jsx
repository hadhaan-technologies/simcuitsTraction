import React from "react";

const Mystery = () => {
  const cards = [
    {
      label: "01",
      title: "For firmware engineers",
      hint: "You know the bug isn't in the IDE.",
    },
    {
      label: "02",
      title: "For embedded developers",
      hint: "Bytes matter. So do interrupts.",
    },
    {
      label: "03",
      title: "For hardware builders",
      hint: "Schematic in one hand, scope in the other.",
    },
  ];
  return (
    <div>
      <section className="relative py-28 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="chip mb-6">signal / 02</span>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-5xl">
              We're not ready to explain it yet.
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              If you're working close to the hardware, chances are you've felt
              the same frustrations we have. We're listening before we're
              launching.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-white/5 md:grid-cols-3 border-y border-white/5">
            {cards.map((c) => (
              <div key={c.title} className="bg-background p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {c.label}
                </span>
                <h3 className="mt-6 font-display text-xl font-medium">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mystery;
