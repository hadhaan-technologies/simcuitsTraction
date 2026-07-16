import React from "react";

const Cta = () => {
  return (
    <section id="access" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
          The next chapter starts{" "}
          <span style={{ color: "var(--color-primary)" }}>
            before the reveal.
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Join the engineers helping shape Simcuit before anyone knows what it
          becomes.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // (e.target as HTMLFormElement).reset();
          }}
          className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@domain.com"
            className="h-11 rounded-md border-white/10 bg-transparent text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:ring-0"
          />
          <button
            type="submit"
            className="btn-hero h-11 rounded-md px-6 text-sm font-semibold"
          >
            Reserve my spot
          </button>
        </form>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          no spam · no noise · just signal
        </p>
      </div>
    </section>
  );
};

export default Cta;
