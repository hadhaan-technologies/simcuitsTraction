import React from "react";

const Logo = () => {
  return (
    <div className="flex">
      <a href="#" className="flex items-baseline gap-2">
        <span className="font-display text-base font-semibold tracking-tight">
          simcuit
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          / stealth
        </span>
      </a>
    </div>
  );
};

export default Logo;
