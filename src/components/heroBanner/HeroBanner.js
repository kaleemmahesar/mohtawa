import React from 'react'
import Container from '../container/Container'
import { Col, Row } from 'antd';
import banner from '../../assets/img/heroimg.png'
import FieldForm from '../fieldForm/FieldForm';

const HeroBanner = () => {
    return (
        <div className='hero-banner'>
            <Container>
                <Row>
                    <Col span={12}>
                        <h2>Turn Your Content Into Revenue</h2>
                        <p>Be Among the First 100 Creators to Upload 100 Pieces and Secure a Lifetime 40% Revenue Share. </p>
                        <FieldForm formname='secure_spot' />
                    </Col>
                    <Col span={11} offset={1}>
                        <img src={banner} alt='banner image' />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default HeroBanner