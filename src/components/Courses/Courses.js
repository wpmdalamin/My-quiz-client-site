import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courseDetails, setCourseDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses-details')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, [])
    return (
        <div className=''>
            <h3>Courses</h3>

            <div className='grid grid-cols-3 gap-3'>
                {
                    courseDetails.map(course => <div key={course._id} className="card shadow-xl my-3">
                        <figure><img src={course.image_url} alt="course" /></figure>
                        <div className="card-body bg-dark text-white">
                            <h2 className="card-title">{course.title}</h2>

                            <div className="card-actions justify-center">
                                <Link to={`/course-detail/${course._id}`}><button className="btn btn-primary">Course Details</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Courses;