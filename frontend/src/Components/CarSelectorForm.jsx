import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/Styles/CarSelectorForm.css';


const CarSelectorForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/RandMpage2');
  }
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Car Make:', carMake);
    console.log('Car Model:', carModel);
    
  };

  return (
    <Container className="car-selector-form">
      <Row className="justify-content-center">
        <h1>Experience The Best Car Services </h1>
        
          <h2>Select Your Car</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCarMake">
              <Form.Label>Car Make</Form.Label>
              <Form.Control
                as="select"
                value={carMake}
                onChange={(e) => setCarMake(e.target.value)}
              >
                <option value="">Select Car Make</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                {/* Add more car makes as needed */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCarModel">
              <Form.Label>Car Model</Form.Label>
              <Form.Control
                as="select"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              >
                <option value="">Select Car Model</option>
                <option value="Corolla">Corolla</option>
                <option value="Civic">Civic</option>
                <option value="Mustang">Mustang</option>
                {/* Add more car models as needed */}
              </Form.Control>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit" onClick={handleClick}>
              Inquire 
            </Button>
          </Form>
        
      </Row>
    </Container>
  );
};

export default CarSelectorForm;
