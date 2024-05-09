import React from 'react'
import gimg from '../../../src/assets/img/gimg1.png'
import gimg2 from '../../../src/assets/img/gimg2.png'
import gimg3 from '../../../src/assets/img/gimg3.png'
import gimg4 from '../../../src/assets/img/gimg4.png'
import gimg5 from '../../../src/assets/img/gimg5.png'
import gimg6 from '../../../src/assets/img/gimg6.png'
import gimg8 from '../../../src/assets/img/gimg8.png'
import logo from '../../../src/assets/img/White-logo.svg'
import Container from '../container/Container'
import { Col, Row } from 'antd';

const ComingSoon = () => {
    return (
        <div className='comingsoon-section'>
            <Container>
                <Row>
                    <Col span={24}>
                        <h3>Coming Soon</h3>
                        <h4>Authentic Stock <b>Content</b></h4>
                        <ul>
                            <li>
                                <img src={gimg} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg2} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg3} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg4} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={logo} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg6} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg4} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg5} alt='gallery image 1' />
                            </li>
                            <li>
                                <img src={gimg8} alt='gallery image 1' />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ComingSoon