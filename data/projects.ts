import { Project } from "../types";

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Better-book",
    description: "A web based notepad I created that has integration of Gemini to summarize and expand text.",
    // 👇 Next.js serves files in "public" at the root URL.
    tech: ["React", "JavaScript", "Tailwind", "Vite"],
    demo: "#",
    repo: "https://github.com/Bamvoov/better-book",
  },
  {
    id: "p2",
    title: "Eco-Footprint Analyzer",
    description: "A modern, interactive Python desktop application designed to raise awareness about the environmental cost of food consumption. Calculates Carbon Footprint and Virtual Water Usage.",
    tech: ["Python", "Tkinter", "Matplotlib"],
    demo: "#",
    repo: "https://github.com/Bamvoov/Eco-Footprint-Analyzer",
  },
  {
    id: "p3",
    title: "Calorie-Tracker",
    description: "A modern web application built with Next.js App Router, Tailwind CSS, Prisma, Supabase, Zustand, and Recharts. Uses Google's Gemini API (Free Tier) to parse natural language food descriptions into estimated calories",
    // 👇 Points to public/calorie.png
    tech: ["TypeScript", "JavaScript", "React", "Tailwind", "Next.js"],
    demo: "#",
    repo: "https://github.com/Bamvoov/Calorie-Tracker",
  }
];