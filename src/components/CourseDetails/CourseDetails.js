import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import Hellomd from '../Hellomd/Hellomd';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();

    const { rating, image_url, author, title, total_students, details } = course;
    console.log(course);


    return (
        <Container className='bg-base-200 p-4 text-white'>
            <Row>
                <Col>
                    <h3 style={{ color: "black"}} ref={ref} className='my-3'>{title}</h3>
                    <div className='d-flex justify-between'>
                        <div className='d-flex my-2 items-center'>
                            <div className='d-flex my-2 items-center'>
                                <img className='w-7 rounded-full mr-2' src={author.img} alt={author.name} />
                                <span>{author.name}</span>
                            </div>
                            <div className='d-flex items-center px-2'>
                                <span className='px-2'>{rating.number}</span>
                                <div className='d-flex items-center text-yellow-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex items-center'>
                            <span className='px-2'><FaUsers /> </span>
                            <span>{total_students}</span>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl'>price: <span className='text-rose-400'>{course.price}$</span></p>
                    </div>
                    {/* PDF Button will be here */}
                </Col>
                <Col>
                    <img src={image_url} alt={course.title} />
                </Col>
            </Row>
            <Row className='my-4'>
                <Col>
                    <div>
                        <p>{details}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>This course included</h3>
                    <div>
                        <h5>300 Quizs</h5>
                    </div>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col>
                    <Link className='text-white text-sm px-4 py-2 rounded bg-yellow-700 no-underline'>Get premium access</Link>
                </Col>
            </Row>
            <Row>
                <div>
                    <Pdf targetRef={ref} filename="course.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><Link className='text-white text-sm px-4 py-2 rounded bg-yellow-700 no-underline'>DownLoad PDF</Link></button>}
                    </Pdf>
                </div>
            </Row>
        </Container>
    );
};

export default CourseDetails;