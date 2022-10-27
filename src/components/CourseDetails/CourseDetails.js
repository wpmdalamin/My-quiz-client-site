import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUsers, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();

    const { image_url, author, title, total_students, details } = course;
    console.log(course);


    return (
        <Container className='bg-base-200 p-4 text-white'>
            <Row>
                <Col>
                    <h3 className='my-3'>{title}</h3>
                    <div className='d-flex justify-between'>
                        <div className='d-flex my-2 items-center'>
                            <div className='d-flex my-2 items-center'>
                                <img className='w-7 rounded-full mr-2' src={author.img} alt={author.name} />
                                <span>{author.name}</span>
                            </div>
                            <div className='d-flex items-center px-2'>
                                <span className='px-2'>4.5</span>
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
                    <div>
                        <Link className='text-white text-sm px-4 py-2 rounded bg-yellow-700 no-underline'>DownLoad PDF</Link>
                    </div>
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
            <Row className='text-center'>
                <Col>
                    <Link className='text-white text-sm px-4 py-2 rounded bg-yellow-700 no-underline'>Get premium access</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;