import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import PropTypes from 'prop-types';

import './profile-view.scss';


export function ProfileView({ movies, onUpdatedUserInfo }){
  const [ user, setUser ] = useState(props.user);
  const [ movies, setMovies ] = useState(props.movies);
  const [ favoriteMovies, setFavoriteMovies ] = useState ([]);
  const currentUser = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  const getUser = () => {
    axios.get('https://myflix2022-app.herokuapp.com/movies', {headers: { Authorization: `Bearer ${token}`}
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
    axios.delete('https://myflix2022-app.herokuapp.com/movies', {headers: { Authorization: `Bearer ${token}`}
  })
  .then(() => {
    alert('The account was successfully deleted.')
    localStorage.clear();
    window.open('/register', '_self');
  })
  .catch(error => console.error(error))
  }

  return (
    <>
    <Container>
      <Row>
        <Col xs={12} sm={4}>
        <Card>
          <Card.Body>
          <UserInfo name={user.Username} email={user.Email} />
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={8}>
        <Card>
          <Card.Body>
          <UpdateUser handlesubmit={handleSubmit} handleUpdate={handleUpdate} /> 
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    
    <div>
      
      <FavoriteMovies favoriteMovieList={favoriteMovieList} />
      
    </div>
    </>
  )

}