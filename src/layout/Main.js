import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import LeftSiteNav from '../components/LeftSiteNav/LeftSiteNav';

const main = () => {
    return (
        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <div  className='bg-teal-800 py-4'>
                <Container>
                    <Row>
                        <Col lg="3">
                            <LeftSiteNav></LeftSiteNav>
                        </Col>
                        <Col lg="9">
                            <Outlet></Outlet>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default main;