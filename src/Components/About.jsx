import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="page-container">  {/* Added class to the parent div */}
        {/* Hero Section */}
        <div className="hero-section" style={{ backgroundColor: '#f1f8ff' }}>
          <Container>
            <Row className='align-items-center'>
              <Col md={6} className="text-left">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm Sandeep K, a passionate Backend Developer</p>
                <Button href="#contact" variant="success" size="lg">Get In Touch</Button>
              </Col>
              <Col md={6} className="text-center">
                <img src="https://surl.li/cjfsag" alt="error" height={250} width={250} className='my_image rounded-circle animated-image'/>
              </Col>
            </Row>
          </Container>
        </div>

        {/* About Section */}
        <section id="about" style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
          <Container>
            <Row>
              <Col md={6}>
                <Card className="shadow-sm" style={{ backgroundColor: '#e3f2fd' }}>
                  <Card.Body>
                    <h2>About Me</h2>
                    <p>
                      I'm an aspiring Backend Developer with expertise in Java, Spring Boot, and MySQL. I am passionate about creating
                      scalable web applications and solving complex problems.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ padding: '50px 0' }}>
          <Container>
            <Row>
              <Col md={12}>
                <h2 className="text-center mb-4">Skills</h2>
              </Col>

              {/* Core Java */}
              <Col md={4} className="mb-4">
                <Card className="shadow-sm" style={{ backgroundColor: '#ffeb3b' }}>
                  <Card.Body>
                    <h4>Core Java</h4>
                    <p>Strong understanding of Object-Oriented Programming (OOP) concepts.</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Spring Boot */}
              <Col md={4} className="mb-4">
                <Card className="shadow-sm" style={{ backgroundColor: '#8bc34a' }}>
                  <Card.Body>
                    <h4>Spring Boot</h4>
                    <p>Experience with RESTful API development and backend services.</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* MySQL */}
              <Col md={4} className="mb-4">
                <Card className="shadow-sm" style={{ backgroundColor: '#00bcd4' }}>
                  <Card.Body>
                    <h4>MySQL</h4>
                    <p>Skilled in database management and optimization.</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* React */}
              <Col md={4} className="mb-4">
                <Card className="shadow-sm" style={{ backgroundColor: '#f44336' }}>
                  <Card.Body>
                    <h4>React</h4>
                    <p>Experience in building dynamic and interactive web applications using React.</p>
                  </Card.Body>
                </Card>
              </Col>

              {/* Spring */}
              <Col md={4} className="mb-4">
                <Card className="shadow-sm" style={{ backgroundColor: '#9c27b0' }}>
                  <Card.Body>
                    <h4>Spring</h4>
                    <p>Knowledge in building microservices and enterprise applications using the Spring framework.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '50px 0', backgroundColor: '#f1f3f5' }}>
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <h2>Contact Me</h2>
                <Button href="mailto:kashaboinasandeep789@gmail.com" variant="primary" size="lg">Send an Email</Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px 0' }}>
          <Container className="text-center">
            <p>&copy; 2025 Sandeep K. All Rights Reserved.</p>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Home;
