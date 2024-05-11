import React from 'react'
import Container from '../container/Container'
import logo from '../../assets/img/icons/meta_logo.svg'
import plogo1 from '../../assets/img/p1.png'
import plogo2 from '../../assets/img/p2.png'
import plogo3 from '../../assets/img/p3.png'
import plogo4 from '../../assets/img/p4.png'
import plogo5 from '../../assets/img/p5.png'
import plogo6 from '../../assets/img/p6.png'
import partnerimg1 from '../../assets/img/introimg.png'
import { Col, Row } from 'react-bootstrap';

const Partners = () => {
    return (
        <div className='partners-area'>
            <Container>
                <Row className='about-intro' data-aos="zoom-in-down" data-aos-duration="1800">
                    <Col lg={4} md={24} sm={24}>
                        <img src={partnerimg1} alt='footer logo' />
                    </Col>
                    <Col lg={8} md={24} sm={24} data-aos="fade-left" data-aos-duration="2200">
                        <div className='content-text'>
                            <h2>We’re an <b>authentic</b> cultural content platform</h2>
                            <h3>Dedicated to empowering creators from the <span>MENA</span> region to publish, showcase, and monetize their content</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} data-aos="zoom-in-up" data-aos-duration="2200">
                        <img src={logo} alt='footer logo' className='metalogo' />
                        <h3>An official <span>Meta</span> partner</h3>
                        <h4>Some of our clients</h4>
                        <ul className='img-gallery'>
                            <li><img src={plogo1} alt='partner logo' /></li>
                            <li><img src={plogo2} alt='partner logo' /></li>
                            <li><img src={plogo3} alt='partner logo' /></li>
                            <li><img src={plogo4} alt='partner logo' /></li>
                            <li><img src={plogo5} alt='partner logo' /></li>
                            <li><img src={plogo6} alt='partner logo' /></li>
                        </ul>
                        
                    </Col>
                </Row>
            </Container>
        </ div>
    ) 
}

export default  Partners