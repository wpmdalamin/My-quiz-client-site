import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import logo from "../../images/MD_EDU.png";

const Header = () => {
    const { user, logOur } = useContext(AuthContext)

    const handelLogOur = () => {
        logOur()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-slate-700 text-white'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="white">
                <Container className='lg:d-flex lg:justify-content-between'>
                    <Navbar.Brand> <Link> <img src={logo} alt="md edu" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link className='text-white no-underline no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4' to="/">Courses</Link></Nav.Link>
                            <Nav.Link> <Link className='text-white no-underline no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4' to="/blog">Blog</Link></Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className='bg-dark text-white'>
                                {
                                    user?.uid ?
                                        <div className='d-flex items-center'>
                                            <span>{user?.displayName}</span>
                                            <img className='w-7 rounded-full mx-2' src={user?.photoURL} alt="md alamin" />
                                            <button className='bg-neutral-200 px-3 py-2 rounded text-white' onClick={handelLogOur}>Logout</button>
                                        </div>
                                        :
                                        <div className='d-flex '>
                                            <Nav.Link> <Link className='text-white no-underline	no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 ' to='/register'>Register</Link> </Nav.Link>
                                            <Nav.Link> <Link className='text-white no-underline	no-underline hover:underline decoration-orange-500 decoration-wavy decoration-4 px-2' to='/login'>Login</Link> </Nav.Link>
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