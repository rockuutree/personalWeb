import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import EduandExp from "./components/eande/EduandExp";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <EduandExp />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
