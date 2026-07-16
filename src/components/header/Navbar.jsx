import React from "react";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <nav className=" top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-display text-base font-semibold tracking-tight">
            simcuit
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            / stealth
          </span>
        </a>
        <a href="#access">
          <button className="btn-hero h-9 rounded-full px-4 text-[11px] font-mono uppercase tracking-[0.18em]">
            Early access
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
