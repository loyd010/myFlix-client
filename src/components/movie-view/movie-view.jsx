import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap'

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
            <Card.Title>Title: {movie.Title}</Card.Title>
            <Card.Text>Description: {movie.Description}</Card.Text>
            <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
            
          </Card>
          </Col>
        </Row>
      </Container>
      
    );
  }
}