import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();

    const { image_url, author, title, total_students, details } = course;
    console.log(course);


    return (
        <div className='bg-slate-800 p-4 text-white'>
            <img src={image_url} alt={course.title} />
            <h3 className='my-3'>{title}</h3>
            <div className='d-flex justify-between'>
                <div className='d-flex my-2'>
                    <img className='w-7 rounded-full mx-2' src={author.img} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    <span>{total_students}</span>
                </div>
            </div>
            <div>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default CourseDetails;