import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiCodingninjas, SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Ratan Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/ratankumar900/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://github.com/ratan900"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/ratan_09/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.codingninjas.com/codestudio/profile/RATAN_KUMAR"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiCodingninjas />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://auth.geeksforgeeks.org/user/ratankumar5/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiGeeksforgeeks />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
