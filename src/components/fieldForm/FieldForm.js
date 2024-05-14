import React, {useState} from 'react';
import { Form, Input, Button, Modal, Row, Col } from 'antd';
import axios from 'axios';
import whtasapp from '../../assets/img/icons/whatsapp.png'
import insta from '../../assets/img/icons/insta.png'
import linkedin from '../../assets/img/icons/linkedin.png'
import linkicon from '../../assets/img/icons/link.png'


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
  const copyToClipboard = () => {
        const textToCopy = 'www.mo7tawa.me';
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            console.log('Text copied to clipboard:', textToCopy);
            // Optionally, you can show a success message to the user
          })
          .catch(err => {
            console.error('Unable to copy text to clipboard:', err);
            // Optionally, you can show an error message to the user
          });
      }
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
          title="Thank you for joining Mo7tawa's waitlist!"
          visible={showModal}
          onCancel={handleModalClose}
          footer={null}
      >
          <p>Invite your friends to join too</p>
          <Row gutter={[16, 16]}>
              <Col span={24}>
                <ul className='social'>
                    <li>
                    <a href="#">
                      <img src={whtasapp} alt="whatsApp" title='Share on WhatsApp' />
                  </a>
                    </li>
                    <li>
                    <a href="#">
                      <img src={insta} alt="Insta" title="Share on Instagram" />
                  </a>
                    </li>
                    <li>
                    <a href="#">
                      <img src={linkedin} alt="LinkedIn" title="Share on LinkedIn" />
                  </a>
                    </li>
                    <li>
                    
                    </li>
                </ul>
                <div className='field-box'>
                          <p>
                            <b><img src={linkicon} alt='linkicon' /></b>
                            <span>www.mo7tawa.me</span>
                          </p>
                          <Button onClick={copyToClipboard} type="primary" >
                          Copy Link
                         </Button>
                        </div>
              </Col>
              
              <Col span={24}>
                  
              </Col>
          </Row>
      </Modal>
       </>

    );
};

export default FieldForm;

