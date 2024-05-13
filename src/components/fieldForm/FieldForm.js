import React, {useState} from 'react';
import { Form, Input, Button, Modal, Row, Col } from 'antd';
import axios from 'axios';

const FieldForm = () => {

    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);

    const onFinish = async (values) => {
        const data = {
            email: values.email
        };
        
        axios.post('https://sheet.best/api/sheets/860ebffe-b0e8-4d79-ad03-9192df83c83b', data)
            .then((res) => {
                // console.log('Response:', res);
                setShowModal(true); 
                form.resetFields();
            })
            .catch((err) => {
                // console.log('Error:', err);
            });
    };

    const handleModalClose = () => {
        setShowModal(false);
    };
    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    const validateEmail = (_, value) => {
        if (!value) {
            return Promise.resolve(); // Success
        }
        // Validate email format
        if (/^\S+@\S+\.\S+$/.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject('Please input valid email address!');
    };

    return (
        <>
        <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        trigger: 'onBlur',
                        required: true,
                        type: 'email',
                        message: 'Please input valid email address!',
                    },
                ]}
            >
                <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Secure Your Spot
                </Button>
            </Form.Item>
        </Form>
          <Modal
          title="Thank you for joining Mo7tawa's waitlist"
          visible={showModal}
          onCancel={handleModalClose}
          footer={null}
      >
          <p>Invite your friends to join:</p>
          <Row gutter={[16, 16]}>
              <Col span={6}>
                  <a href="link to your Instagram">
                      <img src="instagram icon" alt="Instagram" />
                  </a>
              </Col>
              <Col span={6}>
                  <a href="link to your Facebook">
                      <img src="facebook icon" alt="Facebook" />
                  </a>
              </Col>
              <Col span={6}>
                  <a href="link to your LinkedIn">
                      <img src="linkedin icon" alt="LinkedIn" />
                  </a>
              </Col>
              <Col span={6}>
                  <Button onClick={() => { /* Copy link to clipboard */ }}>
                      Copy Link
                  </Button>
              </Col>
          </Row>
      </Modal>
       </>

    );
};

export default FieldForm;

