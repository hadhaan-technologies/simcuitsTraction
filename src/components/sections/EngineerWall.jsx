import React from 'react'

const EngineerWall = () => {
  const quotes = [
    { q: "This is exactly what the industry is missing.", r: "firmware lead" },
    {
      q: "I have three theories and none of them are simple.",
      r: "embedded systems",
    },
    {
      q: "If this works, it changes how engineers learn.",
      r: "hardware architect",
    },
    {
      q: "Felt this gap for years. Glad someone's finally there.",
      r: "RTOS engineer",
    },
  ];

  return (
    <section className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="chip mb-6">engineers / anonymous</span>
          <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-5xl">
            Whispers from the workbench.
          </h2>
        </div>

        <ul className="mt-14 grid gap-px bg-white/5 md:grid-cols-2 border-y border-white/5">
          {quotes.map((q) => (
            <li key={q.q} className="bg-background p-8 md:p-10">
              <blockquote className="font-display text-lg leading-snug text-foreground md:text-xl">
                "{q.q}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-6 bg-primary" />
                anonymous / {q.r}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default EngineerWall
