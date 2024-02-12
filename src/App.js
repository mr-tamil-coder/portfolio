import "./App.css";

import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Stats from "./Component/Header/Stats";
import Contact from "./Component/Contact";
import Head from "./Component/Headers/Head";
import Hero from "./Component/Hero";

export default function App() {
  return (
    <div id="top" classNameName="dark_theme">
      <Head />
      <div className="container">
      <Stats />
      <Skills />
      <Contact />
      </div>
    </div>
  );
}
