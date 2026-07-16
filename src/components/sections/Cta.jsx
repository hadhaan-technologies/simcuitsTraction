import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Cta = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_laqsb6z", "template_1usgit8", form.current, {
        publicKey: "zEaCLp6qBX8vtYd2K",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    e.target.reset();
  };
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
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            name="email"
            placeholder="you@gmail.com"
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
