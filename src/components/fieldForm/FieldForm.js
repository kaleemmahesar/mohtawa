import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const FieldForm = ({formname}) => (
    <Form
        name={formname} 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            name="useremail"
            rules={[
                {
                    required: true,
                    type: "email",
                    message: 'Please input valid email address!',
                },
            ]}
        >
            <Input placeholder="Sample@gmail.com" />
        </Form.Item>
        <Button type="primary" htmlType="submit">Secure Your Spot</Button>
    </Form>
);
export default FieldForm;