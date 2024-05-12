import React from 'react'
import Container from '../container/Container'
import logo from '../../assets/img/icons/white-logo.png'
import {Col, Row} from 'react-bootstrap'

const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col lg={12} md={24}>
                        <img src={logo} alt='header logo' data-aos="zoom-in" data-aos-duration="900" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header