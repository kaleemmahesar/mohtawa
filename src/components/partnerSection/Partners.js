import React from 'react'
import Container from '../container/Container'
import logo from '../../assets/img/icons/meta_logo.svg'
import clientsLogos from '../../assets/img/clients-logos.svg'
import partnerimg1 from '../../assets/img/img2.png'
import { Col, Row } from 'antd';

const Partners = () => {
    return (
        <div className='partners-area'>
            <Container>
                <Row className='about-intro'>
                    <Col span={9}>
                        <img src={partnerimg1} alt='footer logo' />
                    </Col>
                    <Col span={15}>
                        <h2>We’re an <b>authentic</b> cultural content platform</h2>
                        <h3>Dedicated to empowering creators from the <span>MENA</span> region to publish, showcase, and monetize their content</h3>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <img src={logo} alt='footer logo' className='metalogo' />
                        <h3>An official <span>Meta</span> partner</h3>
                        <h4>Some of our clients</h4>
                        <img src={clientsLogos} alt='clients logos' />
                    </Col>
                </Row>
            </Container>
        </ div>
    ) 
}

export default  Partners