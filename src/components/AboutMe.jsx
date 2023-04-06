import React from "react";
import ProfilePic from "../assets/profile-pic.png";
function AboutMe() {
  return (
    <section>
      <h2 id="aboutme">About me</h2>
      <p className="about-me">
        My name is Alvin and I'm 27 years old. I have been working as a
        carpenter for 7 years and have just switched career to programming which
        I totally <strong>love!</strong> <br />
        <br /> If I were to describe myself I'd say I'm a very happy and
        positive person, but if you really would like to know more about me dont
        hesitate to contact me!{" "}
      </p>
      <h2 id="footer-mail">alvin.strandberg@proton.me</h2>
      <img id="profile-pic" src={ProfilePic} alt="" />
    </section>
  );
}
export default AboutMe;
