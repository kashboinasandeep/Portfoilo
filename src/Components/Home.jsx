import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{
        background: 'linear-gradient(to right, #ffb3c1, #ffcccb, #e0f7fa, #c8e6c9)',
        padding: '50px 0'
      }}>
        <Container>
          <Row className='align-items-center'>
            <Col md={6} className="text-left">
              <h1 style={{ lineHeight: '1.5' }}>Welcome to My Portfolio</h1>
              <h2 style={{ lineHeight: '1.5' }}>I'm Sandeep Kashboina,<br /></h2>
              <h3 style={{ lineHeight: '1.5' }}>a passionate Backend Developer</h3>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://surl.li/cjfsag"
                alt="error"
                height={250}
                width={250}
                className='my_image rounded-circle animated-image'
                style={{ border: '5px solid #fff9c4' }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '50px 0', backgroundColor: '#f1f3f5' }}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-4">Projects</h2>
            </Col>
            <Col md={12}>
              <Carousel prevLabel="" nextLabel="" controls={true}>
                <Carousel.Item>
                  <Card className="shadow-sm" style={{ backgroundColor: '#fff3e0' }}>
                    <Card.Body>
                      <h4>Employee Management System</h4>
                      <p><strong>Environment:</strong> ReactJS, MySQL, Spring Boot, Core Java</p>
                      <p><strong>Tools:</strong> Visual Studio Code, Spring Tool Suite4, Postman</p>
                      <p><strong>Description:</strong> Developed an Employee Management System aimed at streamlining and automating employee records management.</p>
                      <p><strong>Key Contributions:</strong></p>
                      <ul>
                        <li>Designed and implemented user interfaces using ReactJS, ensuring responsiveness and user-friendliness.</li>
                        <li>Implemented RESTful APIs using Spring Boot to handle CRUD operations.</li>
                        <li>Used Postman to test API endpoints and verify responses.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="shadow-sm" style={{ backgroundColor: '#ffe0b2' }}>
                    <Card.Body>
                      <h4>Electronic Store Web Application</h4>
                      <p><strong>Environment:</strong> Spring Boot, ReactJS, MySQL</p>
                      <p><strong>Tools:</strong> IntelliJ IDEA, Visual Studio Code, Postman</p>
                      <p><strong>Description:</strong> Developed a full-stack web application for managing an electronic store with secure user authentication.</p>
                      <p><strong>Key Contributions:</strong></p>
                      <ul>
                        <li>Designed and implemented RESTful APIs for managing users, products, and categories.</li>
                        <li>Implemented Spring Security for secure authentication and authorization.</li>
                        <li>Utilized Postman for API testing to ensure functionality and reliability.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
            {/* Skills Section */}
            <section id="skills" style={{ padding: '50px 0', backgroundColor: '#e3f2fd' }}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-4">Skills</h2>
            </Col>
            <Col md={12}>
              <Carousel prevLabel="" nextLabel="" controls={true}>
                <Carousel.Item>
                  <Card className="shadow-sm skill-card" style={{ backgroundColor: '#fff3e0' }}>
                    <Card.Body>
                      <h4>Core Java</h4>
                      <p>Strong understanding of Object-Oriented Programming (OOP) concepts.</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="shadow-sm skill-card" style={{ backgroundColor: '#ffe0b2' }}>
                    <Card.Body>
                      <h4>Spring Boot</h4>
                      <p>Experience with RESTful API development and backend services.</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="shadow-sm skill-card" style={{ backgroundColor: '#fce4ec' }}>
                    <Card.Body>
                      <h4>MySQL</h4>
                      <p>Skilled in database management and optimization.</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="shadow-sm skill-card" style={{ backgroundColor: '#e1bee7' }}>
                    <Card.Body>
                      <h4>React</h4>
                      <p>Experience in building dynamic and interactive web applications using React.</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="shadow-sm skill-card" style={{ backgroundColor: '#c8e6c9' }}>
                    <Card.Body>
                      <h4>Spring</h4>
                      <p>Knowledge in building microservices and enterprise applications using the Spring framework.</p>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
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

      {/* Social Links Section */}
      <section id="social-links" style={{ padding: '20px 0', backgroundColor: '#343a40' }}>
        <Container>
          <Row className="text-center">
            <Col>
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '30px', margin: '0 15px' }} title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sandeep-kashaboina-024b05293/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '30px', margin: '0 15px' }} title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '30px', margin: '0 15px' }} title="Naukri">
                <i className="bi bi-briefcase"></i>
              </a>
              <a href="mailto:kashaboinasandeep789@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '30px', margin: '0 15px' }} title="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px 0' }}>
        <Container className="text-center">
          <p>&copy; 2025 Sandeep K. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default Home;
