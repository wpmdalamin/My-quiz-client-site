import React from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../../images/home.svg';

const HeroSection = () => {
    return (
        <div>
            <div className="hero py-8 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={homeimg} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">MD EDU Academy</h1>
                        <p className="py-6">This websit you can learn about React, Vew, Html, Css, JavaScript, Bootstrap, WordPress and ETC.</p>
                        <button className="btn btn-primary"> <Link className='text-white no-underline text-bold'>Course</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;