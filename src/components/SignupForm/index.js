import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const SignupForm = ({ signup }) => {
    const onFinish = (values) => {
        signup(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{ firstName: "", lastName: "", email: "", phone: "", password: "" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="First name"
                name="firstName"
                rules={[{ required: true, message: "Please input your firstName!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last name"
                name="lastName"
                rules={[{ required: true, message: "Please input your lastName!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please input your phone!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
            >
                <Input.Password />
            </Form.Item>

            <div style={{ textAlign: "right" }}>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        SIGNUP
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default SignupForm;
