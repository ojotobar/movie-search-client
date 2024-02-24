import React from 'react'
import { Col, Row, Spinner, Toast } from 'react-bootstrap'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import { getMovieSearchResult } from '../api/movieApi';
import useSWR from 'swr';

const MovieSummary = ({ searchTerm }) => {
    const {
        isLoading,
        error,
        data
    } = useSWR(
        searchTerm ? searchTerm : null,
        getMovieSearchResult
    )

  return (
    <>
    <Row className="mt-5 m-auto CenterSearchBar">
        {
            isLoading ?
                <Spinner style={{ width: "3rem", height: "3rem" }}/> :
            data ?
                <Row className=''>
                    <Col sm={0} md={2} lg={3}></Col>
                        <Col sm={12} md={8} lg={6}>
                            <Link to={`/${data?.imDbId}`} className="DeLink">
                                <Movie movie={data} />
                            </Link>
                        </Col>
                    <Col sm={0} md={2} lg={3}></Col>
                </Row> :
            error ?
                <Toast className='m-auto' bg='danger'>
                    <Toast.Body className='text-white'>
                        <p>{error?.message}.</p>
                    </Toast.Body>
                </Toast> :
                <Toast className='m-auto' bg='secondary'>
                    <Toast.Body className='text-white'>
                        <p>Please enter the movie title in the search bar.</p>
                    </Toast.Body>
                </Toast>
        }
    </Row>
    </>
  )
}

export default MovieSummary