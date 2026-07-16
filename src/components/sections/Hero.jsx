import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 animate-fade-up">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Quietly in development
          </span>
        </div>

        <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
          The playground core engineers
          <br />
          have been{" "}
          <span style={{ color: "var(--color-primary)" }}>waiting for.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Some problems aren't solved by another dashboard, another tutorial, or
          another forum. Simcuit is building something different.
        </p>

        <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a href="#access">
            <button className="btn-hero h-11 rounded-full px-6 text-sm font-semibold">
              Join early access
            </button>
          </a>
          <a href="">
            <button className="btn-hero h-11 rounded-full px-6 text-[11px] font-mono uppercase tracking-[0.18em]">
              I have a guess
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
