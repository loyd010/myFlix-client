import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Figure, Button, Card } from 'react-bootstrap';
import axios from 'axios';

import './profile-view.scss';

export function FavoriteMovies(props) {
  //const { favoriteMovieList } = props;

  const favoriteMovieId = favoriteMovieList.map(m => m._id)

  const favoriteMoviesList = movies.filter(m => {
    return favoriteMovieId.includes(m._id)
  })

  const handleMovieDelete = (movieId) => {
    axios.delete('https://myflix2022-app.herokuapp.com/movies', {headers: { Authorization: `Bearer ${token}`}
  })
  .then(() => {
    alert('The movie has been deleted.')
    window.open('/users/:username', '_self');
  }).
  catch(error => console.error(error))
}

  return(
   <Card>
     <Card.Body>
      <Row>
          <Col xs={12}>
          <h4>Favorite Movies</h4>
          </Col>
        </Row>

        <Row>
          {favoriteMoviesList.map((movies) => {
                  return(
                    <Col xs={12} md={6} lg={3} key={movies._id} className="fav-movie">
                      <Figure>
                      <Link to={`/movies/${movies._id}`}>
                        <Figure.Image
                          src={movies.ImagePath}
                          alt={movies.Title}
                        />
                        <Figure.Caption>
                          {movies.Title}
                        </Figure.Caption>
                        </Link>
                      </Figure>
                
                    <Button variant="secondary" onClick={() => handleMovieDelete(movies._id)}>Remove</Button>
                  </Col>
                  )
                })
                }
        </Row>
      </Card.Body>
      </Card>  
    
  )
}

