import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../assets/Styles/Dashboard.css';

const services = [
  { icon: '🧑‍🔧', label: 'Repair & Guidance', link: '/RandMpage2' },
  { icon: '🛠️', label: 'Partsandtools', link: '/PartsToolsRecommendations' },
  { icon: '🗓️', label: 'Maintenance Schedules', link: '/MaintenanceSchedules' },
  { icon: '▶️', label: 'Video Tutorials', link: '/VideoTutorials' },
  { icon: '☎️', label: 'Book An Appointment', link: '/DiagnosticTools' },
];

const ServicesDashboard = () => {
  return (
    <Container fluid className="services-dashboard">
      <Carousel indicators={false} interval={null}>
        {services.map((service, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {services.map((service, idx) => (
                <Col key={idx} className="service-item" xs={6} md={4} lg={2}>
                  <a href={service.link} className="service-link">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-label">{service.label}</div>
                  </a>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ServicesDashboard;
