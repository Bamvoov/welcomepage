"use client";

import { Sun, Moon } from "lucide-react";

import Image from "next/image";

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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-bg-1/95 border-b border-bg-3/40 px-6 py-4 flex justify-between items-center font-mono text-sm tracking-tight"
    >
      {/* LOGO */}
      <div
        className="flex items-center gap-2 cursor-pointer text-accent hover:text-accent-secondary transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image
          src="/osaka-ayumu.gif"
          alt="Osaka logo icon"
          width={24}
          height={24}
          className="object-contain rounded-sm"
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
            {link.name}
          </a>
        ))}
      </nav>

      {/* ACTIONS */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-2.5 py-1.5 rounded-sm border border-bg-3/40 bg-bg-2 text-muted hover:text-accent hover:border-accent transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
          title="Toggle Theme (Flashbang!)"
        >
          {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          <span>--theme</span>
        </button>
      </div>
    </header>
  );
}
