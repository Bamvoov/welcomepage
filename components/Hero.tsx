import React from "react";
import Image from "next/image";

export default function Hero() {
  const bioPoints = [
    "I write bugs (and occasionally code)",
    "I love tech in general",
    "I love ricing my Arch Linux setup 🐧",
    "First year CS student with 120 browser tabs open",
    "I love to make random stuff",
  ];

  return (
    <section
      id="hero"
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-20 px-4 mt-12"
    >
      {/* LEFT: Text & Humorous Bio */}
      <div className="flex flex-col">
        {/* Waving GIF */}
        <div className="mb-4 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/azumanga-daioh-chiyo-chan.gif"
            alt="Waving sticker"
            className="w-28 h-28 object-contain rounded"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight font-mono">
          <span className="text-accent-tertiary animate-pulse block mb-2">Hiiie:3</span>
          <span className="text-text-color text-2xl md:text-3xl normal-case font-sans font-medium tracking-normal text-slate-100 block mt-2">
            I am <span className="text-accent font-mono font-extrabold">Satvik</span> (sleep-deprived even after sleeping 10 hours).
          </span>
        </h1>

        <ul className="mt-8 space-y-3 font-mono text-sm text-muted">
          {bioPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent-secondary">❯</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href="#projects"
            className="inline-block px-5 py-2.5 border border-accent text-accent font-mono text-sm tracking-wide rounded hover:bg-accent/10 transition-colors"
          >
            [execute --list-projects]
          </a>
        </div>
      </div>

      {/* RIGHT: Avatar framed in retro style */}
      <div className="flex justify-center md:justify-end md:pt-32">
        <div
          className="
            relative
            w-64 h-64
            overflow-hidden
            transition-all duration-300 ease-out
          "
        >
          <Image
            src="/osaka-ayumu-kasuga.gif"
            alt="Satvik Srivastava profile photo"
            width={256}
            height={256}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
