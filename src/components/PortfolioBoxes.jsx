import React from "react";

function PortfolioBoxes() {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <section className="portfol-container">
        <div className="box-container">
          <div className="portfol-item" id="portfol-item-1">
            <div className="portfol-text-bg">
              <h3>Entity Framework</h3>
              <p>
                Using Entity Framework to scaffold and handle data from
                database.
              </p>
            </div>
            <div className="portfol-spacing"></div>
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
          <div className="portfol-item" id="portfol-item-2">
            <div className="portfol-text-bg">
              <h3>Bank App</h3>
              <p>
                Simulation of an internet bank in shape of a Console App / C#.
              </p>
            </div>
            <div className="portfol-spacing"></div>
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
          <div className="portfol-item" id="portfol-item-3">
            <div className="portfol-text-bg">
              <h3>Quiz Game</h3>
              <p>Answer the correct questions to gain points and highscore.</p>
            </div>
            <div className="portfol-spacing"></div>
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
          <div className="portfol-item" id="portfol-item-4">
            <div className="portfol-text-bg">
              <h3>Portfolio</h3>
              <p>The portfolio you are browsing right now, React + Vite</p>
            </div>
            <div className="portfol-spacing"></div>
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
        <div className="box-container">
          <div className="portfol-item" id="portfol-item-5">
            <div className="portfol-text-bg">
              <h3>RESTful Web API</h3>
              <p>
                Ongoing project to create an API that follows RESTful and CRUD
                Operations.
              </p>
            </div>
            <div className="portfol-spacing"></div>
            <div className="portfol-list-container">
              <ul className="portfol-list">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/RESTful-Web-API"
                  >
                    Github Repo
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/RESTful-Web-API"
                  >
                    Readme.md
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="portfol-item" id="portfol-item-6">
            <div className="portfol-text-bg">
              <h3>Code First Database</h3>
              <p>
                Creating database through code first and with hidden junction
                tables.
              </p>
            </div>
            <div className="portfol-spacing"></div>
            <div className="portfol-list-container">
              <ul className="portfol-list">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/Entity-Framework_Intermediate-Table"
                  >
                    Github Repo
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/Entity-Framework_Intermediate-Table"
                  >
                    Readme.md
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-container">
          <div className="portfol-item" id="portfol-item-7">
            <div className="portfol-text-bg">
              <h3>Advent Of Code 2022</h3>
              <p>
                Christmas traditional Event where coder is challenged with 24
                tasks.
              </p>
            </div>
            <div className="portfol-spacing"></div>
            <div className="portfol-list-container">
              <ul className="portfol-list">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/Entity-Framework_Intermediate-Table"
                  >
                    Github Repo
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/troskan/Entity-Framework_Intermediate-Table"
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
