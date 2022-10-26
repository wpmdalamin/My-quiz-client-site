import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://y-pi-lilac.vercel.app/courses/')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className='text-white border-r'>
            <h3>Totol Courses {courses.length}</h3>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link className='text-white no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4' to={`/course-detail/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSiteNav;