import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 1; // Only show one project per page
  const projects = [
    {
      title: "Employee Management System",
      environment: "ReactJS, MySQL, Spring Boot, Core Java",
      tools: "Visual Studio Code, Spring Tool Suite4, Postman",
      description: "Developed an Employee Management System aimed at streamlining and automating employee records management.",
      keyContributions: [
        "Designed user interfaces with ReactJS.",
        "Implemented RESTful APIs with Spring Boot for CRUD operations.",
        "Integrated backend with Axios for frontend.",
        "MySQL database schema to manage employee data.",
        "Used Postman for API testing and verification."
      ]
    },
    {
      title: "Electronic Store Web Application",
      environment: "Spring Boot, ReactJS, MySQL",
      tools: "IntelliJ IDEA, Visual Studio Code, Postman",
      description: "Developed a full-stack web application for managing an electronic store with secure authentication.",
      keyContributions: [
        "Designed RESTful APIs for managing users, products, and categories.",
        "Developed a responsive front-end with ReactJS.",
        "Implemented secure authentication using Spring Security.",
        "Integrated backend with Axios for seamless communication.",
        "Optimized MySQL schema for data retrieval.",
        "Used Postman for API testing."
      ]
    }
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const selectedProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <Container
      id="projects"
      className="projects-container mt-5 pt-5 bg-info-subtle"
      style={{ minHeight: "80vh" }} // Added to increase the page height
    >
      <h2 className="text-center mb-4 text-warning fs-3">Projects</h2>
      <Row className="justify-content-center">
        {selectedProjects.map((project, index) => (
          <Col key={index} md={12} className="mb-5">
            <Card
              className="project-card shadow-lg text-center"
              style={{
                backgroundColor: index === 0 ? "#e3f2fd" : "#fce4ec", // Light blue for the first project, light pink for the second
                borderRadius: "15px",
              }}
            >
              <Card.Body>
                <Card.Title className="fs-6">{project.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted fs-6">{project.environment}</Card.Subtitle>
                <Card.Text className="fs-6">{project.description}</Card.Text>
                <h6 className="text-primary fs-6">Key Contributions:</h6>
                <ul className="list-unstyled fs-6">
                  {project.keyContributions.map((contribution, idx) => (
                    <li key={idx} className="bg-light p-3 mb-2 rounded">
                      <span className="text-dark">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <Pagination className="justify-content-center pagination-custom">
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
}

export default Projects;
