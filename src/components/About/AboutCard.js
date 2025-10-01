import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I am <span className="purple">Chamindu W.N</span> from{" "}
            <span className="purple">Homagama, Sri Lanka</span>.
            <br />
            I am currently pursuing my BSc (Hons) in <span className="purple">Information Technology</span> at SLIIT.
            <br />
            <br />
            Apart from coding, I enjoy exploring various activities that keep me inspired and motivated:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🤝 Engaging in Social Services
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌏 Travelling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a meaningful difference in the world!" 💡
          </p>
          <footer className="blockquote-footer">Chamindu W.N</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
