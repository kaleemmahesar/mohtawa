import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'react-bootstrap';
import Container from '../container/Container'
import emailicon from '../../assets/img/icons/email_icon.svg'
import phoneicon from '../../assets/img/icons/phone_icon.svg'
import { Link } from "react-router-dom";

const ContactUs = () => {
//     const onFinishEmail = (values) => {
//         console.log('Success:', values);
//     };
//     const onFinishFailedEmail = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };
//     const onFinishPhone = (values) => {
//         console.log('Success:', values);
//     };
//     const onFinishFailedPhone = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };
//     return (
//         <div className='contactus-area'>
//             <Container>
//                 <Row>
//                     <Col lg={2}>
//                         <h2>Contact <span>Us</span></h2>
//                     </Col>
//                     <Col span={5}>
//                         <Form
//                             name="contact_email"
//                             onFinish={onFinishEmail}
//                             onFinishFailed={onFinishFailedEmail}
//                             autoComplete="off"
//                         >
//                             <Form.Item
//                                 name="contactEmail"
//                                 label="Email"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         type: "email",
//                                         message: 'Please input valid email address!',
//                                     },
//                                 ]}
//                             >
//                                 <Input placeholder="Info@mo7tawa.me" />
//                             </Form.Item>
//                             <Button type="primary" htmlType="submit">
//                                 <img src={emailicon} alt="emailicon" />
//                             </Button>
//                         </Form>
//                     </Col>
//                     <Col lg={5}>
//                     <Form
//                             name="contact_phone"
//                             onFinish={onFinishPhone}
//                             onFinishFailed={onFinishFailedPhone}
//                             autoComplete="off"
//                         >
//                             <Form.Item
//                                 name="contactNumber"
//                                 label="Contact Us"
//                                 rules={[
//                                     {
//                                         type: 'number',
//                                         required: true,
//                                         message: 'Please input valid phone Number!',
//                                     },
//                                 ]}
//                             >
//                                 <Input type='number' placeholder="+971 5242 83395" />
//                             </Form.Item>
//                             <Button type="primary" htmlType="submit">
//                                 <img src={phoneicon} alt="phoneicon" />
//                             </Button>
//                         </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }
const handleEmailClick = () => {
    // window.location.href = 'mailto:your@example.com';
    // window.open('mailto:your@email.com');
    window.open('mailto:mailto:your@email.com?subject=Subject&body=Body%20goes%20here')
    // const opened = window.open('mailto:your@email.com');

    // // If window.open is blocked, fallback to changing window.location.href
    // if (!opened || opened.closed || typeof opened.closed === 'undefined') {
    //   window.location.href = 'mailto:your@email.com';
    // }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <footer>
      <div>Contact Us:</div>
      <div>
        Email: <a href="#" onClick={handleEmailClick}>your@example.com</a>
        
      </div>
      <div>
        Phone: <a href="#" onClick={handlePhoneClick}>+1234567890</a>
      </div>
    </footer>
  );
}
export default ContactUs