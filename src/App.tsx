import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import StarsCanvas from "./components/canvas/StarsCanvas";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
