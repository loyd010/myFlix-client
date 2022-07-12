import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export class DirectorView extends React.Component {

  render() {
    const { director, movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
          <Card>
          
          <Card.Body>
            <Card.Title>Director: {director.Director.Name}</Card.Title>
            <Card.Text>Bio: {director.Director.Bio}</Card.Text>
            <Card.Text>Birth: {director.Director.Birth}</Card.Text>
            <Card.Text>Death: {director.Director.Death}</Card.Text>
            
            <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
          </Card.Body>
            
          </Card>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape ({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Birth: PropTypes.string.isRequired,
    Death: PropTypes.string
  }).isRequired
};