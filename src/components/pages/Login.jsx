import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Col, Row, Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import '../../assets/styles/BioCore.css';

const { Text } = Typography;

class Login extends Component {
    constructor() {
        super();
        this.form = {
            username: '',
            password: '',
        };
        this.state = {
            form: { ...this.form },
            error: null,
            isRedirect: false,
        };
        this.onLogin = this.onLogin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let { form } = this.state;
        form = { ...form };
        form[e.target.name] = e.target.value;
        this.setState({ form });
    }

    onLogin(e) {
        e.preventDefault();
        const { form: { username, password } } = this.state;
        if (username === 'abc@xyz' && password === '123456') {
            this.setState({ isRedirect: true, error: null });
        } else {
            this.setState({ isRedirect: false, error: 'Invalid username or password !!' });
        }
    }

    renderSubmitError() {
        const { error } = this.state;
        if (!error) return null;

        return <Text type="danger">{error}</Text>
    }

    render() {
        const { isRedirect, form: { username, password } } = this.state;
        if (isRedirect) return <Redirect to="/accueil" />;

        return (
            <Row id="biocore" className="p-4 mt-3">
                <Col span={6} offset={8} >
                    <Card type="inner" title="LOGIN" className="login-form">
                        <div className="text-center mb-1">
                            {this.renderSubmitError()}
                        </div>
                        <Form onSubmit={this.onLogin}>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={this.onChange}
                                    required
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    required
                                />
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>Remember me</Checkbox>
                                <a className="login-form-forgot" href="#/">Forgot password</a>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                            </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Login;