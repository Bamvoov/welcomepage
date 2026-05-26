"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, Activity } from "lucide-react";

export default function About() {
  const stack = ["Python", "C++", "TypeScript", "Next.js", "SQL", "Git", "React"];

  return (
    <section id="about" className="mt-28 flex justify-center w-full px-4">
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold tracking-tight text-accent flex items-center gap-2 uppercase font-mono">
            <span>[01_about_me]</span>
          </h2>
          <span className="h-px flex-1 bg-bg-3/60"></span>
        </div>

        {/* BENTO TERMINAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Fastfetch System Info (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 rounded-lg border border-bg-3 bg-bg-2 p-6 font-mono text-sm hover:border-accent/40 transition-colors"
          >
            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-bg-3/50 pb-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted">system_info.sh</span>
              <Terminal size={14} className="text-muted" />
            </div>

            <div className="space-y-2 text-muted">
              <p className="text-accent-secondary">satvik@archlinux ~ $ <span className="text-slate-100">fastfetch</span></p>
              <div className="h-px bg-bg-3/30 my-2" />
              <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1 text-xs md:text-sm">
                <span className="text-accent">OS</span>
                <span className="text-accent-tertiary">archlinux (btw) 🐧</span>

                <span className="text-accent">Host</span>
                <span className="text-accent-tertiary">satvik</span>

                <span className="text-accent">Kernel</span>
                <span className="text-accent-tertiary">linux 6.12.11</span>

                <span className="text-accent">Uptime</span>
                <span className="text-accent-tertiary">2 hours, 14 mins</span>

                <span className="text-accent">Shell</span>
                <span className="text-accent-tertiary">/usr/bin/zsh</span>

                <span className="text-accent">Terminal</span>
                <span className="text-accent-tertiary">ghostty</span>
              </div>

              {/* Social Links */}
              <div className="h-px bg-bg-3/30 my-4" />
              <div className="flex flex-wrap gap-4 text-xs font-semibold">
                <a
                  href="https://www.instagram.com/satvik_.s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-secondary transition-colors"
                >
                  [instagram: @satvik_.s]
                </a>
                <a
                  href="https://x.com/satvik_sriv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-secondary transition-colors"
                >
                  [x: @satvik_sriv]
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Tech Stack (Packages List) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 rounded-lg border border-bg-3 bg-bg-2 p-6 font-mono text-sm hover:border-accent/40 transition-colors flex flex-col"
          >
            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-bg-3/50 pb-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
              </div>
              <span className="text-xs text-muted">pacman -Q</span>
              <Zap size={14} className="text-accent" />
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-4 flex items-center gap-1.5">
              <span>Installed Tech</span>
            </h4>

            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-bg-1 border border-bg-3 text-xs font-semibold text-accent-secondary hover:border-accent hover:text-accent transition-colors duration-150 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Funny Simulator GIF */}
            <div className="mt-auto pt-4 border-t border-bg-3/30 flex justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/osaka-osaka-simulator.gif"
                alt="Osaka simulator"
                className="w-full h-24 object-contain rounded border border-bg-3 bg-bg-1"
              />
            </div>
          </motion.div>

          {/* Card 3: Currently Learning (Status log) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-3 rounded-lg border border-bg-3 bg-bg-2 p-6 font-mono text-sm hover:border-accent/40 transition-colors"
          >
            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-bg-3/50 pb-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
              </div>
              <span className="text-xs text-muted">status_log.log</span>
              <Activity size={14} className="text-accent-secondary animate-pulse" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1.5 text-xs md:text-sm flex-1">
                <p className="text-muted">
                  <span className="text-accent-tertiary">[status]</span> actively learning <span className="text-slate-100 font-semibold">Machine Learning</span> (mostly reading math papers and hoping it compiles).
                </p>
                <p className="text-muted">
                  <span className="text-accent-tertiary">[status]</span> current vibe: copy-pasting code from StackOverflow at 3 AM.
                </p>
              </div>

              {/* Funny GIF */}
              <div className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/osaka-azumanga-daioh.gif"
                  alt="Osaka spacey"
                  className="w-24 h-24 object-contain rounded border border-bg-3 bg-bg-1"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
