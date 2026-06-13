"use client";

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
    <section id="contact" className="mt-16 mb-4 flex justify-center w-full">
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold tracking-tight text-accent flex items-center gap-2 uppercase font-mono">
            <span># 03 contact</span>
          </h2>
          <span className="h-px flex-1 bg-bg-3/40"></span>
        </div>

        {/* INTERACTIVE TERMINAL WINDOW */}
        <div className="rounded-sm border border-bg-3 bg-bg-2 overflow-hidden font-mono text-sm">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-bg-3/40 px-4 py-3 bg-bg-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-muted">connect.sh</span>
            <Terminal size={14} className="text-muted" />
          </div>

          {/* Terminal Body */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column: commands */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted mb-2">// execute commands to reach me:</p>

                {/* GitHub */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <a
                    href="https://github.com/Bamvoov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-color hover:text-accent font-semibold flex items-center gap-2"
                  >
                    git follow bamvoov
                    <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ github</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <a
                    href="https://www.linkedin.com/in/satvik-srivastava-5163012a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-color hover:text-accent-secondary font-semibold flex items-center gap-2"
                  >
                    ln -s linkedin/satvik
                    <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ linkedin</span>
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <a
                    href="https://www.instagram.com/satvik_.s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-color hover:text-accent font-semibold flex items-center gap-2"
                  >
                    open instagram/satvik_.s
                    <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ instagram</span>
                  </a>
                </div>

                {/* X */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <a
                    href="https://x.com/satvik_sriv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-color hover:text-accent-secondary font-semibold flex items-center gap-2"
                  >
                    open x/satvik_sriv
                    <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ x</span>
                  </a>
                </div>

                {/* Email (Interactive Copy) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                  <span className="text-accent-secondary">satvik@archlinux ~ $</span>
                  <button
                    onClick={handleCopyEmail}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(e); }}
                    className="text-left text-text-color hover:text-accent font-semibold flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                  >
                    mailto satvikxyz33@gmail.com
                    {copied ? (
                      <span className="text-xs text-accent-secondary font-normal flex items-center gap-1">
                        <Check size={12} /> copied to clipboard!
                      </span>
                    ) : (
                      <span className="text-xs text-muted font-normal group-hover:translate-x-1 transition-transform">→ click to copy</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Right column: penguin */}
              <div className="border-t md:border-t-0 md:border-l border-bg-3/40 pt-6 md:pt-0 md:pl-6 flex items-center justify-center h-full min-h-[120px] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pengu chio.gif"
                  alt="Linux Pengu dancing"
                  className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECOND TERMINAL CARD: availability.sh */}
        <div className="mt-6 rounded-sm border border-bg-3 bg-bg-2 overflow-hidden font-mono text-sm">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-bg-3/40 px-4 py-3 bg-bg-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-muted">availability.sh</span>
            <Terminal size={14} className="text-muted" />
          </div>

          {/* Terminal Body */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column: stats */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-muted">// current status:</p>
                <div className="grid grid-cols-[100px_1fr] gap-y-2 text-xs md:text-sm">
                  <span className="text-accent font-semibold">timezone:</span>
                  <span className="text-text-color">Asia/Kolkata (IST - UTC+5:30)</span>

                  <span className="text-accent font-semibold">response:</span>
                  <span className="text-text-color">(usually instant)</span>

                  <span className="text-accent font-semibold">open to:</span>
                  <span className="text-text-color">hackathons / collabs / tech chats</span>
                </div>
              </div>

              {/* Right column: resume fetch */}
              <div className="border-t md:border-t-0 md:border-l border-bg-3/40 pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-muted font-semibold">// resume download:</p>
                  <p className="text-xs text-muted">
                    satvik@archlinux ~ $<br />
                    <span className="text-accent-secondary">wget satvik.dev/resume-3.pdf</span>
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <a
                    href="/resume-3.pdf"
                    download
                    className="inline-block px-3 py-1.5 border border-accent text-accent font-mono text-xs tracking-wide rounded-sm hover:bg-accent/40 transition-colors"
                  >
                    download_resume.pdf
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
