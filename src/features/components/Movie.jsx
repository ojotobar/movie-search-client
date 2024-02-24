import React from 'react'
import { Badge, Button, Card, Image, Row } from 'react-bootstrap';

const Movie = ({ movie }) => {
  return (
    <Row className='CenterSearchBar'>
        <Card style={{ width: '25rem' }}>
          <Image
            src={movie?.poster} 
            fluid
          />
          <Card.Body>
            <Card.Title>{movie?.title}</Card.Title>
            <Card.Text>
              <Badge bg="secondary">{movie?.rated}</Badge>
              <span className='px-2 text-muted'>{movie?.runtime}</span>
            </Card.Text>
            <Card.Text className='text-muted'>{movie?.year}</Card.Text>
            <Button className='ButtonToLink' variant="primary">View Details</Button>
          </Card.Body>
        </Card>
    </Row>
  )
}

export default Movie;