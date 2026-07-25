"use client";

import { Terminal, Cpu, Zap, Activity } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stack = ["Python", "C++", "TypeScript", "Next.js", "SQL", "go", "React"];

  return (
    <section id="about" className="mt-16 flex justify-center w-full">
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold tracking-tight text-accent flex items-center gap-2 uppercase font-mono">
            <span># 01 about</span>
          </h2>
          <span className="h-px flex-1 bg-bg-3/40"></span>
        </div>

        {/* BENTO TERMINAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Fastfetch System Info (Spans 2 columns) */}
          <div
            className="col-span-1 md:col-span-2 rounded-sm border border-bg-3 bg-bg-2 p-6 font-mono text-sm hover:border-accent transition-colors"
          >
            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-bg-3/40 pb-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted">system_info.sh</span>
              <Terminal size={14} className="text-muted" />
            </div>

            <div className="space-y-2 text-muted">
              <p className="text-accent-secondary">bamvoov@cachyos ~ $ <span className="text-text-color">fastfetch</span></p>
              <div className="h-px bg-bg-3/40 my-2" />
              <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-xs md:text-sm">
                <span className="text-accent whitespace-nowrap">os</span>
                <a
                  href="https://cachyos.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  cachyos(btw)
                </a>

                <span className="text-accent whitespace-nowrap">host</span>
                <span className="text-accent">bamvoov</span>

                <span className="text-accent whitespace-nowrap">desktop manager</span>
                <a
                  href="https://github.com/niri-wm/niri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  niri
                </a>


                <span className="text-accent whitespace-nowrap">uptime</span>
                <span className="text-accent">8 hours, 14 mins</span>

                <span className="text-accent whitespace-nowrap">shell</span>
                <span className="text-accent">/usr/bin/zsh</span>

                <span className="text-accent whitespace-nowrap">terminal</span>
                <span className="text-accent">kitty</span>
              </div>

            </div>
          </div>

          {/* Card 2: Tech Stack (Packages List) */}
          <div
            className="col-span-1 rounded-sm border border-bg-3 bg-bg-2 p-6 font-mono text-sm hover:border-accent transition-colors flex flex-col"
          >
            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-bg-3/40 pb-3 mb-4">
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
                  className="px-2 py-1 bg-bg-1 border border-bg-3 text-xs font-semibold text-accent-secondary hover:border-accent hover:text-accent transition-colors duration-150 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Funny Simulator GIF */}
            <div className="mt-auto pt-4 border-t border-bg-3/40 flex justify-center shrink-0">
              <Image
                src="/osaka-osaka-simulator.gif"
                alt="Osaka simulator"
                width={250}
                height={96}
                className="w-full h-24 object-contain rounded-sm border border-bg-3 bg-bg-1"
              />
            </div>
          </div>

          {/* Card 3: Currently Learning (Status log) */}
          <div
            className="col-span-1 md:col-span-3 rounded-sm border border-bg-3 bg-bg-2 p-6 font-mono text-sm hover:border-accent transition-colors"
          >
            {/* Terminal Topbar */}
            <div className="flex justify-between items-center border-b border-bg-3/40 pb-3 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
                <div className="w-2.5 h-2.5 rounded-full bg-bg-3" />
              </div>
              <span className="text-xs text-muted">status_log.log</span>
              <Activity size={14} className="text-accent-secondary" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1.5 text-xs md:text-sm flex-1">
                <p className="text-muted">
                  <span className="text-accent">status</span> trying to learn <span className="text-text-color font-semibold">go</span>
                </p>
                <p className="text-muted">
                  <span className="text-accent">status</span> part of backdoors webring!
                </p>

              </div>

              {/* Funny GIF */}
              <div className="shrink-0">
                <Image
                  src="/osaka-azumanga-daioh.gif"
                  alt="Osaka spacey"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
