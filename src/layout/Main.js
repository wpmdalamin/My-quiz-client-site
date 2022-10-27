import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const main = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-teal-800 py-4'>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default main;