import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import PropTypes from 'prop-types';

import './profile-view.scss';


export function ProfileView(props){

  const [ favoriteMoviesList, setFavoriteMovies ] = useState ([]);
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  const getUser = () => {
    axios.get('https://myflix2022-app.herokuapp.com/users/${username}', {headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    setUser(response.data);
    setFavoriteMovies(response.data.FavoriteMovies)
  })
  .catch(error => console.error(error))
  }

  useEffect(() => {
    getUser();
  }, [])

  const handleDelete = () => {
    axios.delete('https://myflix2022-app.herokuapp.com/users/${username}', {headers: { Authorization: `Bearer ${token}`}
  })
  .then(() => {
    alert('The account was successfully deleted.')
    localStorage.clear();
    window.open('/register', '_self');
  })
  .catch(error => console.error(error))
  }

  const handleUserUpdate = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      axios.put('https://myflix2022-app.herokuapp.com/users/${user.Username}', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        alert('User information successfully updated');
        window.open('/', '_self');
      })
      .catch(response => {
        console.error(response);
        alert('Unable to update user information');
      });
    }
  };

  return (
    <>
    <Container>
      <Row><h3>Your profile</h3></Row>
      <Row>
        <Col xs={12} sm={4}>
        <Card>
          <Card.Body>
          <Card.Text>Name: {username}</Card.Text>
          <Card.Text>Email: {email}</Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={8}>
        <Card>
          <Card.Body>
          <UpdateUser handleUserUpdate={handleUserUpdate} /> 
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Button variant="danger" onClick={handleDelete}>Delete profile</Button>
      </Row>
    </Container>
    <Container><FavoriteMovies favoriteMoviesList={favoriteMoviesList} /></Container>  
      
    </>
  )

}