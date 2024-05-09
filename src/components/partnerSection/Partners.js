import React from 'react'
import Container from '../container/Container'
import logo from '../../assets/img/icons/meta_logo.svg'
import clientsLogos from '../../assets/img/clients-logos.svg'
import { Col, Row } from 'antd';

const Partners = () => {
    return (
        <div className='partners-area'>
            <Container>
                <Row>
                    <Col span={24}>
                        <img src={logo} alt='footer logo' />
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