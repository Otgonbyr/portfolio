'use client'
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [theme, setTheme] = useState('light')

  return (
    <main className={`home ${theme}`}>
      <div className= {`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero theme={theme} setTheme={setTheme}/>
        <Project theme={theme} setTheme={setTheme}/>
        <Skills theme={theme} setTheme={setTheme}/>
        <Footer theme={theme} setTheme={setTheme}/>
      </div>
    </main>
  );
}
