import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Exam Idea"
              description="An application designed to help students and teachers in analyzing the question papers, get the topic and difficulty wise analysis. Users can also generate sample papers of chosen topics and difficulty levels from our database for their practice."
              description_point={[
                "Tech stack - NLP, Python, Machine learning models, Node Js, HTML, CSS, Bootstrap, React js.",
                "Utilized various classification-based machine learning models, Natural Language Processing, and software development in Node Js, ReactJS. All are integrated using Node Js framework.",
              ]}
              ghLink="https://github.com/ratan900/Capstone-Project-17"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shopping App"
              description="A progressive web application that is in form of preferential e-commerce, that allows consumers to directly buy goods of various categories through an interface that provides an online seamless shopping experience."
              description_point={[
                "Tech stack - HTML, CSS, Bootstrap, JavaScript, React js, Firebase Authentication, mockAPI.io.",
                "Products are updated through Admin controls. Database is created using mockAPI.io to store the information of the products and to retrieve the saved-preferences of the users. Authorization is done through Firebase authentication package. UI is build through React Js FrontEnd framework.",
              ]}
              description_point1=""
              description_point2=""
              ghLink="https://github.com/ratan900/shopping-site"
              demoLink="https://shopon-development.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hospital Resource Management System"
              description="Web portal providing Hospital resource sharing systems for public access of information about available resources at district level including hospital inventory. Data visualization is done to make sense of collected data."
              description_point={[
                "Tech stack - HTML, CSS, Bootstrap ,Django and SQLite.",
                "Resources are updated through Admin controls who only control the updation of data. Database is developed through SQLite database management system, It is connected to UI through backend using Django framework, Data visualization is done through Matplotlib library of python.",
              ]}
              ghLink="https://github.com/vishal-gulati/MITHACKATHON/tree/master/codebandits"
              demoLink="https://www.youtube.com/watch?v=YouCiSjDAEc"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
