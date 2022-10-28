import React, { useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import logo from "../../images/MD_EDU.png";
import { FaUser } from "react-icons/fa";
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs';

const Header = () => {
    const { user, logOur } = useContext(AuthContext)

    const [dark, setDark] = useState(true)

    const darkMood = () => {

    }
    const handelLogOur = () => {
        logOur()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-gray-700 text-white'>
{/* 
            <Container>
                
            </Container> */}
           <Navbar className='bg-gray-700' collapseOnSelect expand="lg" bg="dark" variant="white">
                <Container className='lg:d-flex lg:justify-content-between items-center'>
                    <Navbar.Brand><Link to="/"> <img src={logo} alt="md edu" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-white'/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="lg:d-flex lg:justify-end">
                        <Nav className='d-flex items-center justify-end'>
                            <Link className='text-white no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 px-2' to="/course">Courses</Link>
                            <Link className='text-white no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 px-2' to="/blog">Blog</Link>
                            <Link className='text-white no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 px-2' to="/faq">FAQ</Link>
                            <button onClick={()=> setDark(false)} className={``}>{dark ? <button className="bg-yellow text-white rounded-full text-xl w-8 h-8"><BsFillMoonFill/></button> : <button className='rounded-full text-xl w-8 h-8 text-dark bg-white text-center'> <BsFillBrightnessHighFill/> </button>}</button>
                            <Nav.Link className='bg-dark text-white'>
                                {
                                    user?.uid ?
                                        <div className='d-flex items-center'>
                                            {
                                                user?.photoURL ? <img className='w-7 rounded-full mx-2' src={user?.photoURL} alt="" /> : <FaUser />
                                            }
                                            <button className='bg-neutral-200 px-3 py-2 rounded text-white' onClick={handelLogOur}>Logout</button>
                                        </div>
                                        :
                                        <div className='d-flex items-center'>
                                            <Link className='text-white no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 ' to='/register'>Register</Link>
                                            <Link className='text-white no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 px-2' to='/login'>Login</Link>
                                        </div>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;