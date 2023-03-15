import * as React from "react";
import "./App.css";

import PortfolioList from "./components/PortfolioList";
import AsideHeader from "./components/AsideHeader";
import AsideNav from "./components/AsideNav";

function App() {
  return (
    <div className="grid-container">
      <header>
        <h1 style={{ margin: 0 }}>Alvin Strandberg Portfolio</h1>
      </header>
      <main>
        <PortfolioList />
      </main>
      <aside>
        <div className="aside-sticky">
          <AsideHeader />
          <AsideNav />
        </div>
      </aside>
    </div>
  );
}

export default App;
