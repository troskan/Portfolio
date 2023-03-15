import * as React from "react";
import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import PortfolioList from "./components/PortfolioList";

function App() {
  return (
    <div className="grid-container">
      <header>
        <h1 style={{ margin: 0 }}>Alvin Strandberg Portfolio</h1>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          repellendus corrupti temporibus eum, sit vero quis voluptatum, iure
          eos, sunt architecto nobis? Voluptatem, possimus laudantium?
        </p>
        <PortfolioList />
      </main>
      <aside>h3 Hello from aside</aside>
    </div>
  );
}

export default App;
