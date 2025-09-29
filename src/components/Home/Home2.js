import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Particle from "../Particle";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <b className="purple">W. Nilusha Chamindu</b>, a passionate tech enthusiast and explorer from Sri Lanka. 
              I fell in love with programming 💻 and enjoy learning new technologies and building projects that make an impact. 🤷‍♂️
              <br />
              <br />
              I am fluent in <i><b className="purple">MERN Stack, Flutter, Kotlin, and Java</b></i>.
              <br />
              <br />
              My interests include creating innovative and valuable <i><b className="purple">technologies and products</b></i>, 
              especially in <i><b className="purple">Web & Mobile App Development</b></i>.
              <br />
              <br />
              I am constantly seeking opportunities to grow my skills, explore new frameworks, and contribute to meaningful projects. 
              I particularly enjoy developing products using <b className="purple">MERN Stack, Flutter, React Native, Kotlin</b> and 
              <i><b className="purple"> modern JavaScript libraries and frameworks</b></i> like 
              <i><b className="purple"> React.js and Next.js</b></i>.
              <br />
              <br />
              Outside of coding, I enjoy keeping up with tech trends, collaborating with fellow developers 🤝, and bringing creative ideas to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ChaminduWn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/chamindu_wn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chaminduwn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chamindu_wn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
