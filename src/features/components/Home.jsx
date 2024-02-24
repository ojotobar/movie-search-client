import { Button, Col, Container, Form, Row, Spinner, Toast } from "react-bootstrap";
import { useGetMovieByTitleQuery } from "../api/moviesApi";
import { Link } from "react-router-dom";
import Movie from "./Movie";

const Home = () => {
	const { data, isLoading, isError } = useGetMovieByTitleQuery("24");
	// const [menus, setMenus] = useState([]);
	// useEffect(() => {
	//   if(data?.length > 0){
	//     setMenus(data.filter((menu) => {
	//       return menu?.dishes.length > 0;
	//     }))
	//   }
	// }, [data])

	return (
		<Container fluid className="m-0 p-0">
			<Row className="m-0 p-0">
				<Row className="mt-3 mb-5 m-auto">
					<section className="mt-5">
						<div className="pb-5">
							<Col className="m-auto">
								<Row className="text-center m-auto">
									<Form onSubmit={(e) => e.preventDefault()}>
										<Row className='mt-5 CenterSearchBar'>
											<Col xs={0} md={2}></Col>
											<Col xs={12} md={4} className='mb-2'>
												<Form.Control 
													placeholder="Enter movie title"
													type='text'
													// value={"search"}
													// onChange={""}
													/>
											</Col>
											<Col xs={12} md={2} className='mb-2'>
												<Button type="submit" className='w-100 Button text-center' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Search</Button>
											</Col>
											<Col xs={0} md={2}></Col>
										</Row>
									</Form>
								</Row>
								<Row className="m-auto" style={{border: '2px solid #212121', margin: '0 1px 0 1px', width: "80%"}}></Row>
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
										isError ?
											<Toast className='m-auto' bg='danger'>
												<Toast.Body className='text-white'>
													<p>An error occurred. Please try again later.</p>
												</Toast.Body>
											</Toast> :
											<Toast className='m-auto' bg='secondary'>
												<Toast.Body className='text-white'>
													<p>Please enter the movie title and click Search.</p>
												</Toast.Body>
										  	</Toast>
									}
								</Row>
							</Col>
						</div>
					</section>
				</Row>
			</Row>
		</Container>
	);
};

export default Home;
