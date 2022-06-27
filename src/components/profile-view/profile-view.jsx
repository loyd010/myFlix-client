import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import PropTypes from 'prop-types';


export function ProfileView({ movies, onUpdatedUserInfo }){

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