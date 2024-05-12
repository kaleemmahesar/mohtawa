import React from 'react'
import { Button, Form, Input } from 'antd';
import { Col, Row } from 'react-bootstrap';
import Container from '../container/Container'
import emailicon from '../../assets/img/icons/email_icon.svg'
import phoneicon from '../../assets/img/icons/phone_icon.svg'

const ContactUs = () => {

const handleEmailClick = () => {

    window.open('mailto:mailto:Info@mo7tawa.me?subject=Subject&body=Body%20goes%20here')
   
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971 5242 83395';
  };

  return (
    <div className='contactus-area'>
             <Container>
                 <Row>
                     <Col lg={3}>
                         <h2>Contact <span>Us</span></h2>
                     </Col>
                     <Col lg={5}>
                        <div className='field-box'>
                          <p>
                            <b>Email</b>
                            <span><a href="#" onClick={handleEmailClick}>Info@mo7tawa.me</a></span>
                          </p>
                          <Button type="primary" onClick={handleEmailClick}>
                          <a href="#" onClick={handleEmailClick}><img src={emailicon} alt="phoneicon" /></a>
                         </Button>
                        </div>
                     </Col>
                     <Col lg={4}>
                     <div className='field-box'>
                          <p>
                            <b>Contact Us</b>
                            <span><a href="#" onClick={handlePhoneClick}>+971 5242 83395</a></span>
                          </p>
                          <Button type="primary" className='yellow' onClick={handlePhoneClick}>
                                <img src={phoneicon} alt="phoneicon" />
                         </Button>
                        </div>
                     </Col>
                    </Row>
                  </Container>
                </div>
  );
}
export default ContactUs