import React from "react";

function PortfolioBoxes() {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <section className="portfol-container">
        <div className="box-container">
          <div className="portfol-item">
            <h3>Quiz Game</h3>
            <p>Answer the correct questions to gain points and highscore.</p>
            <ul className="portfol-list">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/troskan/troskan.github.io/blob/main/webquiz.html"
                >
                  Github Repo
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://troskan.github.io/webquiz.html"
                >
                  Play Game
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-container">
          <div className="portfol-item">
            <h3>Bank App</h3>
            <p>
              Simulation of an internet bank in shape of a Console App / C#.
            </p>
            <ul className="portfol-list">
              <li>
                <a target="_blank" href="https://github.com/5laes/Bank_Orange">
                  Github Repo
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/5laes/Bank_Orange/blob/master/README.md"
                >
                  Readme.md
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="box-container">
          <div className="portfol-item">
            <h3>Road-To-React</h3>
            <p>
              Start of my journey to get an better understanding of React.js
              Inspiration:{" "}
              <a target="_blank" href="https://www.roadtoreact.com/">
                Robin Wieruch
              </a>
            </p>

            <ul className="portfol-list">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/troskan/Road-To-React"
                >
                  Github Repo
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/troskan/Road-To-React"
                >
                  Readme.md
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="box-container">
          <div className="portfol-item">
            <h3>Entity Framework</h3>
            <p>
              Using Entity Framework to scaffold and handle data from database.
            </p>

            <ul className="portfol-list">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/troskan/Database_Labb_4"
                >
                  Github Repo
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/troskan/Database_Labb_4"
                >
                  Readme.md
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-container">
          <div className="portfol-item">
            <h3>Portfolio</h3>
            <p>The portfolio you are browsing right now, React + Vite</p>
            <div className="portfol-list-container">
              <ul className="portfol-list">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/labb2-react"
                  >
                    Github Repo
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/PortfolioWeb/blob/master/README.md"
                  >
                    Readme.md
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioBoxes;
