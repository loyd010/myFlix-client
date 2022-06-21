import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  //Declaring hook for each input
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');

  //validate user inputs
  const validate = () => {
    let isReq = true;
    if(!username){
      setUsernameErr('Username Required');
      isReq = false;
    }else if(username.length < 5){
      setUsernameErr('Username must be 5 characters long');
      isReq = false;
    }
    if(!password){
      setPasswordErr('Password Required');
      isReq = false;
    }else if(password.length < 6){
      setPasswordErr('Password must be 6 characters long');
      isReq = false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
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
      }
    }
    

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
                <Form.Control type="text" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} />
                {/*code added here to display validation error*/}
                {usernameErr && <p>{usernameErr}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                {/*code added here to display validation error*/}
                {passwordErr && <p>{passwordErr}</p>}
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