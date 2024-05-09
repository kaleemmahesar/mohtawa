import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import Container from '../container/Container'
import emailicon from '../../assets/img/icons/email_icon.svg'
import phoneicon from '../../assets/img/icons/phone_icon.svg'

const ContactUs = () => {
    const onFinishEmail = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailedEmail = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishPhone = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailedPhone = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='contactus-area'>
            <Container>
                <Row>
                    <Col span={3}>
                        <h2>Contact <span>Us</span></h2>
                    </Col>
                    <Col span={11}>
                        <Form
                            name="contact_email"
                            onFinish={onFinishEmail}
                            onFinishFailed={onFinishFailedEmail}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="contactEmail"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        type: "email",
                                        message: 'Please input valid email address!',
                                    },
                                ]}
                            >
                                <Input placeholder="Info@mo7tawa.me" />
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                <img src={emailicon} alt="emailicon" />
                            </Button>
                        </Form>
                    </Col>
                    <Col span={10}>
                    <Form
                            name="contact_phone"
                            onFinish={onFinishPhone}
                            onFinishFailed={onFinishFailedPhone}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="contactNumber"
                                label="Contact Us"
                                rules={[
                                    {
                                        type: 'number',
                                        required: true,
                                        message: 'Please input valid phone Number!',
                                    },
                                ]}
                            >
                                <Input type='number' placeholder="+971 5242 83395" />
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                <img src={phoneicon} alt="phoneicon" />
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs