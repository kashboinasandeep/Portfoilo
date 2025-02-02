import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './Skills.css'; 

const Skills = () => {
  return (
    <>
      <div className="p_container bg-info-subtle" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container id="skills" className="text-center">
          <h2 className="mb-4">Skills</h2>
          <Row className="justify-content-center">
            {["HTML", "CSS", "JavaScript", "React", "Java", "Spring", "Spring Boot", "MySQL"].map((skill, index) => (
              <Col md={3} key={skill} className="mt-3">
                <Card className={`text-center ${getCardColor(index)}`}>
                  <Card.Body>
                    <Card.Title>{skill}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

// Function to return a different light color for each card
const getCardColor = (index) => {
  const colors = [
    "bg-light", // HTML
    "bg-info",  // CSS
    "bg-warning", // JavaScript
    "bg-success", // React
    "bg-primary", // Java
    "bg-secondary", // Spring
    "bg-danger", // Spring Boot
    "bg-info", // MySQL
  ];
  return colors[index % colors.length]; // Loop over the colors
}

export default Skills;
