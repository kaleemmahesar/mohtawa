// import React, {useState} from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// // import { useState } from 'rea¿ct';

// const [formData, setFormData] = useState({
    
//     email: '',
  
//   });

// const onFinish = async (values) => {
//     console.log('Success:', values);
//     const data = new FormData();
//     data.append('email', formData.email);

//     const Sheet_Url="https://script.google.com/macros/s/AKfycbw-sLXsAXBnpcoJx9W8gs0lWYJjSlv9RBbvlYwEnpJPhW6Xbzi_0fZH97yRNGAWkdVPPw/exec"
//     try {
//       await fetch(Sheet_Url, {
//         method: 'POST',
//         body: data,
//         muteHttpExceptions: true,
//       });

//       setFormData({
       
//         email: '',
  
//       });
//     } catch (error) {
//       console.log(error);
//     }
// };
// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };

// const validateEmail = (_, value) => {
//     if (!value) {
//         return Promise.resolve(); // Success
//     }
//     // Validate email format
//     if (/^\S+@\S+\.\S+$/.test(value)) {
//         return Promise.resolve();
//     }
//     return Promise.reject('Please input valid email address!');
// };
// const FieldForm = ({formname}) => (
//     <Form
//         name={formname} 
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//     >
//         <Form.Item
//             name="useremail"
//             rules={[
//                 {
//                     validator: validateEmail,
//                     trigger: 'onBlur' 
//                     // required: true,
//                     // type: "email",
//                     // message: 'Please input valid email address!',
//                     // trigger: 'onBlur' 
//                 },
//                 // validateTrigger="onBlur"
//             ]}
//         >
//             <Input placeholder="Sample@gmail.com" />
//         </Form.Item>
//         <Button type="primary" htmlType="submit">Secure Your Spot</Button>
//     </Form>
// );
// export default FieldForm;

import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const FieldForm = ({ formname }) => {
    const [useremail, setEmail] = useState('');

    const onFinish = async (values) => {
        setEmail(values.useremail);
       
            const data = {
                email: values.useremail
            }
            console.log('Data:',data, useremail, values)
           axios.post('https://sheet.best/api/sheets/8313ab20-5f0d-4d6c-acad-94baec276aec',data).then((res)=>{
            console.log('Response:', res);
            setEmail('');
           }).catch((err)=>{
            console.log('Error:',err)
           })
           
    
        }
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
                        validator: validateEmail,
                        trigger: 'onBlur'
                    },
                ]}
            >
                <Input placeholder="Sample@gmail.com" />
            </Form.Item>
            <Button type="primary" htmlType="submit">Secure Your Spot</Button>
        </Form>
    );
};

export default FieldForm;
