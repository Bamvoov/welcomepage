"use client";

import { FolderGit2, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "../types";

type ProjectRowProps = {
  project: Project;
  index: number;
};

function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <div
      className="
        group
        flex flex-col md:flex-row md:items-center justify-between
        py-5 border-b border-bg-3/40
        hover:border-accent
        transition-colors
        font-mono
      "
    >
      {/* Name and Tech stack */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2.5">
          <FolderGit2 size={16} className="text-accent group-hover:text-accent-secondary transition-colors" />
          <h3 className="text-base font-bold text-text-color uppercase tracking-tight">
            {project.title.toLowerCase()}
          </h3>
          <span className="text-xs text-muted/50 hidden sm:inline"></span>
        </div>

        <p className="font-sans text-sm text-muted leading-relaxed max-w-2xl normal-case">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold px-2 py-0.5 border border-bg-3/40 rounded-sm bg-bg-2/40 text-accent-secondary"
            >
              #{t.toLowerCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="flex items-center gap-3 mt-4 md:mt-0 pt-2 md:pt-0">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5 px-3 py-1.5 rounded-sm
              text-xs text-muted border border-bg-3 bg-bg-2/40
              hover:text-accent hover:border-accent
              transition-all duration-150
            "
            title="Repository Source"
          >
            <Github size={13} />
            <span>[source]</span>
          </a>
        )}

        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5 px-3 py-1.5 rounded-sm
              text-xs text-muted border border-bg-3 bg-bg-2/40
              hover:text-accent-secondary hover:border-accent-secondary
              transition-all duration-150
            "
            title="Live Demo"
          >
            <ExternalLink size={13} />
            <span>[demo]</span>
          </a>
        )}
      </div>
    </div>
  );
}

type ProjectsProps = {
  projects?: Project[];
};

export default function Projects({ projects = [] }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="mt-16 flex justify-center w-full">
      <div className="w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-bold tracking-tight text-accent flex items-center gap-2 uppercase font-mono">
            <span># 02 projects</span>
          </h2>
          <span className="h-px flex-1 bg-bg-3/40"></span>
        </div>

        {/* Directory heading */}
        <div className="font-mono text-xs text-muted mb-4">
          <span>bamvoov@cachyos ~ $ ls -la ~/projects</span>
        </div>

        {/* Meme GIFs (Simulating terminal directory list output, aligned to Projects box below) */}
        <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-6 w-full select-none">
          {/* GIF 1: cooking.gif */}
          <div className="w-full rounded-sm border border-bg-3/80 bg-bg-2 overflow-hidden font-mono text-xs shadow-md">
            <div className="flex justify-between items-center border-b border-bg-3/40 px-2.5 py-1 bg-bg-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[9px] text-muted/80">cooking-meth.gif</span>
            </div>
            <div className="relative aspect-[4/3] w-full bg-bg-1 p-1">
              <Image
                src="/osaka-azumanga-daioh-walter.gif"
                alt="Osaka Azumanga Daioh Walter White"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          {/* GIF 2: yum.gif */}
          <div className="w-full rounded-sm border border-bg-3/80 bg-bg-2 overflow-hidden font-mono text-xs shadow-md">
            <div className="flex justify-between items-center border-b border-bg-3/40 px-2.5 py-1 bg-bg-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[9px] text-muted/80">yum.gif</span>
            </div>
            <div className="relative aspect-[4/3] w-full bg-bg-1 p-1">
              <Image
                src="/osaka-yum.gif"
                alt="Osaka Yum"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          {/* GIF 3: lightning.gif */}
          <div className="w-full rounded-sm border border-bg-3/80 bg-bg-2 overflow-hidden font-mono text-xs shadow-md">
            <div className="flex justify-between items-center border-b border-bg-3/40 px-2.5 py-1 bg-bg-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[9px] text-muted/80">lightning.gif</span>
            </div>
            <div className="relative aspect-[4/3] w-full bg-bg-1 p-1">
              <Image
                src="/osaka-azumanga-daioh.-lightning.gif"
                alt="Osaka Lightning"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          {/* GIF 4: helmet.gif */}
          <div className="w-full rounded-sm border border-bg-3/80 bg-bg-2 overflow-hidden font-mono text-xs shadow-md">
            <div className="flex justify-between items-center border-b border-bg-3/40 px-2.5 py-1 bg-bg-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[9px] text-muted/80">helmet.gif</span>
            </div>
            <div className="relative aspect-[4/3] w-full bg-bg-1 p-1">
              <Image
                src="/azumanga-daioh-osaka-helmet.gif"
                alt="Osaka Helmet"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          {/* GIF 5: two-sides.gif */}
          <div className="w-full rounded-sm border border-bg-3/80 bg-bg-2 overflow-hidden font-mono text-xs shadow-md">
            <div className="flex justify-between items-center border-b border-bg-3/40 px-2.5 py-1 bg-bg-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[9px] text-muted/80">two-sides.gif</span>
            </div>
            <div className="relative aspect-[4/3] w-full bg-bg-1 p-1">
              <Image
                src="/i-have-two-sides-osaka.gif"
                alt="I Have Two Sides Osaka"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="border border-bg-3 bg-bg-2 rounded-sm p-6 space-y-4">
          <div className="space-y-1">
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Funny Projects GIF */}
          <div className="pt-4 border-t border-bg-3/40 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Image
              src="/azumanga-daiho-azumanga.gif"
              alt="Azumanga projects meme"
              width={280}
              height={128}
              className="w-full max-w-[280px] h-32 object-contain rounded-sm border border-bg-3 bg-bg-1"
            />
            <div className="w-full max-w-[280px] h-32 flex items-center justify-center rounded-sm border border-bg-3 bg-bg-1 text-xs font-mono text-muted/70 p-4 text-center">
              more to come soon (hopefully)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
