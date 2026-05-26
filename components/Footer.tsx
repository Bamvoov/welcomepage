import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-bg-3/50 py-8 font-mono text-xs text-muted uppercase tracking-wider">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} Satvik Srivastava
        </div>
        <div className="text-accent hover:text-accent-secondary transition-colors cursor-default">

        </div>
      </div>
    </footer>
  );
}
