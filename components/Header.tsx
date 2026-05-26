"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

type HeaderProps = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

export default function Header({ theme, setTheme }: HeaderProps) {
  const navLinks = [
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-1/80 backdrop-blur-md border-b border-bg-3/45 px-6 py-4 flex justify-between items-center font-mono text-sm tracking-tight"
    >
      {/* LOGO */}
      <div
        className="flex items-center gap-2 cursor-pointer text-accent hover:text-accent-secondary transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/osaka-ayumu.gif"
          alt="Osaka logo icon"
          className="w-6 h-6 object-contain rounded"
        />
        <span className="font-bold">satvik@arch:~</span>
        <span className="animate-ping inline-block w-1.5 h-3 bg-accent ml-0.5" />
      </div>

      {/* NAVIGATION */}
      <nav className="hidden sm:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-muted hover:text-accent transition-colors py-1"
          >
            [{link.name}]
          </a>
        ))}
      </nav>

      {/* ACTIONS */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 text-xs text-muted border border-bg-3/50 px-2 py-0.5 rounded bg-bg-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
          <span>online</span>
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-2.5 py-1.5 rounded border border-bg-3/50 bg-bg-2 text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
          title="Toggle Theme (Flashbang!)"
        >
          {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          <span>[flashbang]</span>
        </button>
      </div>
    </motion.header>
  );
}
