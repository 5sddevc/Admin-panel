import React from "react";

import Input from "../components/input/index";
import Button from "../components/button/index";
import RootForm from "../commons/form/index";
import { loginValidations } from "../configurations/Schemas";
import { Layout, Row, Col } from "antd";
import Card from "../commons/card/index";
import Icon from "../components/Icon/index";
import Select from "../components/input/Select";
import Option from "../components/input/SelectOptions";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChanged = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("Login State", this.state);
    return (
      <Layout style={{ height: "100vh", justifyContent: "center" }}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <Card title="Login" headStyle={{ fontSize: 32 }}>
              <RootForm
                schemaName={loginValidations}
                initialValues={this.state}
                controls={[
                  {
                    span: 24,
                    name: "username",
                    value: this.state.username,
                    handleChanged: this.handleChanged,
                    placeholder: "Username",
                    Type: Input,
                    addonBefore: <Icon type="user" />
                  },
                  {
                    span: 24,
                    name: "password",
                    value: this.state.password,
                    handleChanged: this.handleChanged,
                    placeholder: "Password",
                    Type: Input,
                    addonBefore: <Icon type="lock" />
                  },
                  {
                    span: 24,
                    name: "password",
                    value: this.state.password,
                    handleChanged: this.handleChanged,
                    placeholder: "Password",
                    Type: Select,
                    defaultValue: "jack",
                    options: () => [
                      <Option value="jack">Jack</Option>,
                      <Option value="lucy">Lucy</Option>
                    ],
                    addonBefore: <Icon type="lock" />
                  }
                ]}
                submitButton={{ span: 8, buttonText: "Login" }}
                isLink={{
                  span: 8,
                  status: "true",
                  linktext: "Forgot Password?",
                  url: "#"
                }}
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Login;
