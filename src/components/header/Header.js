import React from 'react'
import Container from '../container/Container'
import { Col, Row } from 'antd';
import logo from '../../assets/img/White-logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col span={24}>
                        <img src={logo} alt='header logo' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header