import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import graduationTimer from "../js/graduation-timer";

function AsideNav() {
  useEffect(() => {
    graduationTimer();
  }, []);

  return (
    <>
      <nav className="aside-nav">
        <ul>
          <li>
            <a href="#projects">👨‍💻Projects</a>
          </li>
          <li>
            <a href="#education">📚Education</a>
          </li>
          <li>
            <a href="#aboutme">👋About me</a>
          </li>
        </ul>
      </nav>
      <section>
        <p>
          Days until graduation: <span id="time-till-graduation">x</span>
        </p>
      </section>
    </>
  );
}

export default AsideNav;
