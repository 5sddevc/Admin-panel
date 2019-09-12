import React from "react";

import Input from '../components/Input'
import Button from '../components/Button'
import { Layout, Card, Row, Col, Icon } from 'antd';


const Login = () => {
  return (
    <Layout style={{ height: "100vh", justifyContent: "center" }}>
      <Row type="flex" justify="center" align="middle">
        <Col span={8}>
          <Card title="Login" headStyle={{ fontSize: 32 }}>
            <Row>
              <Input addonBefore={<Icon type="user" />} placeholder="Username" />
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Input password addonBefore={<Icon type="lock" />} placeholder="Password" />
            </Row>
            <Row type="flex" justify="space-between" align="middle" style={{ marginTop: 20 }}>
              <Col>
                <Button type="primary">Login</Button>
              </Col>
              <Col>
                <a href="#">Forgot Password?</a>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Login;
