"use client";

import { motion } from "framer-motion";
import { Terminal, Send, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("satvikxyz33@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-28 mb-32 flex justify-center w-full px-4">
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold tracking-tight text-accent flex items-center gap-2 uppercase font-mono">
            <span>[03_contact]</span>
          </h2>
          <span className="h-px flex-1 bg-bg-3/60"></span>
        </div>

        {/* INTERACTIVE TERMINAL WINDOW */}
        <div className="rounded-lg border border-bg-3 bg-bg-2 overflow-hidden font-mono text-sm">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-bg-3/50 px-4 py-3 bg-bg-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-muted">connect.sh</span>
            <Terminal size={14} className="text-muted" />
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-6">
            <p className="text-muted">// execute commands to reach me:</p>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-4 flex-1 w-full">
                {/* GitHub */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <a
                    href="https://github.com/Bamvoov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-accent font-semibold flex items-center gap-2"
                  >
                    git follow bamvoov
                    <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ [github]</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <a
                    href="https://www.linkedin.com/in/satvik-srivastava-5163012a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 hover:text-accent-secondary font-semibold flex items-center gap-2"
                  >
                    ln -s linkedin/satvik
                    <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ [linkedin]</span>
                  </a>
                </div>

                {/* Email (Interactive Copy) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <button
                    onClick={handleCopyEmail}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(e); }}
                    className="text-left text-slate-100 hover:text-accent-tertiary font-semibold flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                  >
                    mailto satvikxyz33@gmail.com
                    {copied ? (
                      <span className="text-xs text-green-400 font-normal flex items-center gap-1">
                        <Check size={12} /> [copied to clipboard!]
                      </span>
                    ) : (
                      <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ [click to copy]</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Penguin GIF */}
              <div className="shrink-0 flex justify-center w-full md:w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pengu chio.gif"
                  alt="Linux Pengu dancing"
                  className="w-24 h-24 object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
