import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ErrorPages = () => {
    return (
        <div className='bg-teal-800'>
            <Header></Header>
            <Container className='bg-teal-800 py-4'>
                <h3 className='text-center'>Error 404 pages Not Found.</h3>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPages;