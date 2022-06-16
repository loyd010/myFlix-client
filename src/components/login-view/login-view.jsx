import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Send a request to the server for authentication*/
    axios.post('https://myflix2022-app.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };

  return (
    <Container>
      <Row>
        <Col>
        <CardGroup>
          <Card>
            <Card.Body>
            <Card.Title>Login to view myFlix!</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>{' or '}
              <Button variant="primary" type="submit" onClick={handleSubmit}>Register here</Button>
            </Form>
            </Card.Body>
          </Card>
        </CardGroup>
        </Col>
      </Row>
    </Container>
   
    
  );
}

LoginView.propTypes = {
  Username: PropTypes.string.isRequired
};