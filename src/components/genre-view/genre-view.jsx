import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export class GenreView extends React.Component {

  render() {
    const { genre, movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
          <Card>
          
          <Card.Body>
            <Card.Title>Genre: {genre.Genre.Name}</Card.Title>
            <Card.Text>Description: {genre.Genre.Description}</Card.Text>
            
            <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
            
          </Card>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
  }).isRequired
};