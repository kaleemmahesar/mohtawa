import React from 'react'
import Container from '../container/Container'
import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/img/White-logo.svg'
import instaGram from '../../assets/img/icons/Instagram - Negative.png'
import discard from '../../assets/img/icons/Group 1707478963.png'
import tikTok from '../../assets/img/icons/Group 1707478964.png'
import faceBook from '../../assets/img/icons/Facebook-Negative.png'
import twiTter from '../../assets/img/icons/Twitter - Negative.png'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={12} className='ant-cols'>
                        <div className='footer-logo'>
                            <img src={logo} alt='footer logo' />
                        </div>
                        <div className='footer-text'>
                            <p>Beautiful, free images gifted by the world’s most generous community of photographers. </p>
                        </div>
                        <div className='footer-link'>
                           <p>Community</p>
                        </div>
                        <div className='social-links'>
                            <ul>
                                <li><a href=''><img src={instaGram} /><span>Instagram</span></a></li>
                                <li><a href=''><img src={discard} /><span>Discard</span></a></li>
                                <li><a href=''><img src={tikTok} /><span>TikTok</span></a></li>
                                <li><a href=''><img src={faceBook} /><span>Facebook</span></a></li>
                                <li><a href=''><img src={twiTter} /><span>Twitter</span></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={12} className='copyright ant-cols'>
                        <p align='center'>© TM 2024. AlIl rights reserved.<a href=''>Privacy Policy</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer