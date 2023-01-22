import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";

function WorkExperience() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Editorialist YX India Private Limited | Software Development Engineer"
              description_point={[
                "Working as a Full Stack Developer on the YX dashboard website (Client Management System).",
                "Tech Stacks- HTML, CSS, JavaScript, React js., Redux, Ant-design, Ruby, Ruby on Rails, Firebase",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Editorialist YX India Private Limited | Software Development Intern"
              description_point={[
                "Worked as a Front-End developer using the tech stack of React Js, Redux, and Ant design library.",
                "Completed the first project of a shopping app using React js., Firebase authentication, and mockAPI.io.",
                "Converted the web app into a Progressive Web app (PWA).",
                "Worked on migrating the YX dashboard website from Ruby on rails to React-based Framework.",
                "Worked on HTML, CSS, JavaScript, React js., Redux, Ant-design.",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Altered Carbon Technologies Pvt. Ltd. | Software Developer Intern"
              description_point={[
                "Worked as a Front-End developer and algorithm designer for Strangers chat application with a Flutter application development framework tech stack.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WorkExperience;
