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
        <div className='bg-teal-800	'>
            <h3>Courses</h3>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    courseDetails.map(course => <div key={course._id} className="card shadow-xl my-3">
                        <figure className='m-0'><img src={course.image_url} alt="course" /></figure>
                        <div className="card-body bg-dark text-white">
                            <h2 className="card-title">{course.title}</h2>
                            <p className='text-sm'>Price: <span>{course.price}</span>$</p>

                            <div className="card-actions justify-center">
                                <Link to={`/course-detail/${course._id}`}><button className="text-white text-sm px-4 py-2 rounded bg-yellow-500">Course Details</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Courses;