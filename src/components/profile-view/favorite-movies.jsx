import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Figure, Button, Card } from 'react-bootstrap';
import './profile-view.scss';

function FavoriteMovies({favoriteMovieList}) {
  return(
   <Card>
     <Card.Body>
      <Row>
          <Col xs={12}>
          <h4>Favorite Movies</h4>
          </Col>
        </Row>

        <Row>
          {favoriteMovieList.map((movies) => {
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
                
                    <Button variant="seconday" onClick={() => removeFav(movies._id)}>Remove</Button>
                  </Col>
                  )
                })
                }
        </Row>
      </Card.Body>
      </Card>  
    
  )
}

export default FavoriteMovies