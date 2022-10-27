import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSiteNav from '../LeftSiteNav/LeftSiteNav'

const Courses = () => {
    const [courseDetails, setCourseDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses-details')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, [])
    return (
        <div className='bg-teal-800	'>


            {/* 
                 <Container>
                    
                </Container>
            */}

            <h3 className='text-center'>Courses</h3>

            <Container>
                <Row>
                    <Col lg="3">
                        <LeftSiteNav></LeftSiteNav>
                    </Col>
                    <Col lg="9">
                        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                            {
                                courseDetails.map(course => <div key={course._id} className="card shadow-xl my-3">
                                    <figure className='m-0'><img src={course.image_url} alt="course" /></figure>
                                    <div className="card-body bg-dark text-white">
                                        <h2 className="card-title">{course.title}</h2>
                                        <p className='text-sm'>Price: <span>{course.price}</span>$</p>

                                        <div className="card-actions justify-center">
                                            <Link to={`/course-detail/${course._id}`}><button className="text-white text-sm px-4 py-2 rounded bg-yellow-700">Course Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;