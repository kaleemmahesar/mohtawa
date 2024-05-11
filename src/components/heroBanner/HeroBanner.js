import React from 'react'
import Container from '../container/Container'
import { Col, Row } from 'react-bootstrap';
import banner from '../../assets/img/heroimg.png'
import FieldForm from '../fieldForm/FieldForm';

const HeroBanner = () => {
    return (
        <div className='hero-banner'>
            <Container>
                <Row className='content-row'>
                    <Col lg={6} md={24} data-aos="fade-right" data-aos-duration="1200">
                        <h2>Turn Your Content Into Revenue</h2>
                        <p>Be Among the First 100 Creators to Upload 100 Pieces and Secure a Lifetime 40% Revenue Share. </p>
                        <FieldForm formname='secure_spot' />
                    </Col>
                    <Col lg={6} md={24}>
                        <img src={banner} alt='banner image' data-aos="fade-left" data-aos-duration="1500" />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default HeroBanner