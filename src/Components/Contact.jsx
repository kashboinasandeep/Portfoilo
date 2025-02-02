
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="bg-info-subtle" style={{ backgroundColor: '#f1f3f5', padding: '50px 0' }}>
      <Container className="contact-container">
        <Row>
          <Col md={12}>
            <Card className="contact-card shadow-lg" style={{ backgroundColor: '#e8f5e9', borderRadius: '10px' }}>
              <Card.Body>
                <h2 className="text-center mb-4 contact-title" style={{ color: '#343a40', fontSize: '2.5rem' }}>
                  Contact Details
                </h2>
                <ul className="list-unstyled" style={{ color: '#495057', fontSize: '1.2rem' }}>
                  <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                    <strong>Email:</strong> 
                    <a href="mailto:kashaboinasandeep789@gmail.com" 
                       style={{ color: '#007bff', textDecoration: 'none' }}> kashaboinasandeep789@gmail.com
                    </a>
                  </li>
                  <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                    <strong>Phone:</strong> 
                    <a href="tel:+916309891487" 
                       style={{ color: '#007bff', textDecoration: 'none' }}> +91 6309891487
                    </a>
                  </li>
                  <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                    <strong>LinkedIn:</strong> 
                    <a href="https://www.linkedin.com/in/sandeep-kashaboina-024b05293/" 
                       target="_blank" rel="noopener noreferrer" 
                       style={{ color: '#007bff', textDecoration: 'none' }}> LinkedIn Profile
                    </a>
                  </li>
                  <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                    <strong>GitHub:</strong> 
                    <a href="https://github.com/dashboard" 
                       target="_blank" rel="noopener noreferrer" 
                       style={{ color: '#007bff', textDecoration: 'none' }}> GitHub Profile
                    </a>
                  </li>
                  <li style={{ padding: '10px' }}>
                    <strong>Naukri:</strong> 
                    <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" 
                       target="_blank" rel="noopener noreferrer" 
                       style={{ color: '#007bff', textDecoration: 'none' }}> Naukri Profile
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Button href="#contact-form" variant="primary" size="lg" block className="contact-btn" 
                    style={{ fontSize: '1.1rem', backgroundColor: '#28a745', borderColor: '#28a745' }}>
              Get In Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
