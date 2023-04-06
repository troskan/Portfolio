import * as React from "react";
import "./App.css";

import PortfolioList from "./components/PortfolioList";
import AsideHeader from "./components/AsideHeader";
import AsideNav from "./components/AsideNav";
import AsideWeatherWidget from "./components/AsideWeatherWidget";
import Education from "./components/Education";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import PortfolioBoxes from "./components/PortfolioBoxes";
import SpinningLogo from "./components/SpinningReactLogo";

function App() {
  return (
    <div className="grid-container">
      <header>
        <h1>
          <SpinningLogo />
          Portfolio Alvin Strandberg
        </h1>
      </header>
      <main>
        <div className="main-header">
          <AboutMe />

          <PortfolioBoxes />
          <div className="bar-container">
            <Skills />
            <Education />
          </div>
        </div>
      </main>
      <aside>
        <div className="aside-sticky">
          <AsideHeader />
          <AsideNav />
          <AsideWeatherWidget />
        </div>
      </aside>
    </div>
  );
}

export default App;
