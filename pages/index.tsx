import type { NextPage } from "next";

import Head from "next/head";

import { useState } from "react";

import Header from "../components/Header";

import Hero from "../components/Hero";

import About from "../components/About";

import Projects from "../components/Projects";

import Contact from "../components/Contact";

import { SAMPLE_PROJECTS } from "../data/projects";

import { Project } from "../types";

const Home: NextPage<any> = ({ theme, setTheme }) => {
  const [projects] = useState<Project[]>(SAMPLE_PROJECTS);

  return (
    <>
      <Head>
        <title>Satvik Srivastava</title>

        <meta name="description" content="Personal portfolio website" />

        <link rel="icon" href="/Squirtle.png" />
      </Head>

      {/* GRADIENT + VIGNETTE WRAPPER */}

      <div className="relative overflow-hidden min-h-screen">
        <Header theme={theme} setTheme={setTheme} />

        <main className="max-w-5xl mx-auto px-6 py-12 pb-12">
          <Hero />

          <About />

          <Projects projects={projects} />

          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
