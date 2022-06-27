import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
          <Card>
          <Card.Img variant="top" src={movie.ImagePath} />

          <Card.Body>
            <Card.Title>Title: {movie.Title || movie.Name}</Card.Title>
            <Card.Text>Description: {movie.Description}</Card.Text>
            <Link to={`/director/${movie.Director.Name}`}>
              <Button variant="link">Director</Button>
            </Link>
            <Link to={`/genre/${movie.Genre.Name}`}>
              <Button variant="link">Genre</Button>
            </Link>
            <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
            
          </Card>
          </Col>
        </Row>
      </Container>
      
    );
  }
}