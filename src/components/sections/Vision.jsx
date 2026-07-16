import React from 'react'

const Vision = () => {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        <span className="chip mb-8">manifesto</span>
        <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-5xl">
          Built by engineers.
          <br />
          <span style={{ color: "var(--color-primary)" }}>For engineers.</span>
        </h2>
        <div className="mt-10 max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            The best tools don't interrupt your workflow.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            They become part of how you think.
          </p>
          <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            — That's the standard we're building toward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vision
