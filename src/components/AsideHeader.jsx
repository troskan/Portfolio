import React from "react";

function AsideHeader() {
  return (
    <section className="aside-header">
      <h2>Contact</h2>
      <p>
        <i className="fa-solid fa-envelope icons-size"></i>
        <a id="email" href="mailto:alvin.strandberg@proton.me">
          Email
        </a>
        <br />
        <i className="fa-brands fa-github icons-size"></i>
        <a target="_blank" href="https://github.com/troskan/">
          Github
        </a>
        <br />
        <i className="fa-brands fa-linkedin icons-size"></i>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alvin-strandberg-612954253/"
        >
          LinkedIn
        </a>
        <br />
        <i className="fa-solid fa-location-dot"></i>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Falkenberg/@56.8985637,12.4255608,12z/data=!3m1!4b1!4m5!3m4!1s0x4651cc988c2342cb:0x4019078290e7b70!8m2!3d56.9027333!4d12.4888013"
        >
          Falkenberg
        </a>
        , Sweden.
      </p>
    </section>
  );
}

export default AsideHeader;
