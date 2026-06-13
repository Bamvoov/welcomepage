import { Project } from "../types";

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Sorelax – Autonomous Context Agent ",
    description: "Autonomous background agent that JOINs your GitHub, Linear, Slack, and Notion in a single Coral SQL query and keeps your AI coding environment permanently context-aware. ",
    // 👇 Next.js serves files in "public" at the root URL.
    tech: ["Python", "FastAPI", "TypeScript", "Gemini API"],
    demo: "#",
    repo: "https://github.com/manthanawgan/Sorelax",
  },
  {
    id: "p2",
    title: "lyricT – CLI Lyrics Syncer ",
    description: "A responsive, centered, dynamically-themed CLI lyrics syncer for Linux media players. It connects to active players (Spotify, VLC, Audacious, Firefox, Chrome, etc.) via MPRIS/playerctl, fetches synced lyrics, and displays them beautifully in your terminal with smooth transitions and cover-art-matching background gradients.",
    tech: ["Python"],
    demo: "#",
    repo: "https://github.com/Bamvoov/lyricT",
  },
  {
    id: "p3",
    title: "AMD Slingshot – AI Voice Interviewer ",
    description: "AI Interviewer — For AMD Slingshot Hackathon --An AI-powered mock interview platform that conducts adaptive voice interviews, analyzes your resume, and generates detailed performance reports with personalized feedback",
    // 👇 Points to public/calorie.png
    tech: ["Python", "Groq API (Llama 3.3)"],
    demo: "#",
    repo: "https://github.com/Bamvoov/Groq API (Llama 3.3)-Tracker",
  }
];