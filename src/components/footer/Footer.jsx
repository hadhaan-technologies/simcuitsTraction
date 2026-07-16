import React from "react";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-sm font-semibold">simcuit</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            / stealth mode
          </span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} simcuit — quietly built.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
