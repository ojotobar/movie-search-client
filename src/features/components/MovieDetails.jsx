import { Badge, Card, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../api/moviesApi';

const MovieDetails = () => {
    const { id } = useParams();
    const { data: movie } = useGetMovieByIdQuery(id);

  return (
    <Container>
        <Row className='CenterSearchBar'>
            <Card className='my-5' style={{ width: '25rem' }}>
                <Image
                    src={movie?.poster}
                    fluid
                    className='ImageHeight'
                />
                <Card.Body>
                    <Card.Title>{movie?.title}</Card.Title>
                    <Card.Text>
                    <span className='px-1'>
                        <Badge className='p-1' bg="secondary">{movie?.rated}</Badge>
                    </span>
                    <span className='px-1'>
                        <Badge className='p-1' bg='secondary'>{movie?.imDbRating}</Badge>
                    </span>
                    <span className='px-2 text-muted'>{movie?.runtime}</span>
                    </Card.Text>
                    <Card.Text className='text-muted'>{movie?.year}</Card.Text>
                    <Card.Text className='text-muted'>{movie?.plot}</Card.Text>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default MovieDetails