import React from "react";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <Logo />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Hadhaan Technologies Pvt. Ltd. - quietly
          built.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
