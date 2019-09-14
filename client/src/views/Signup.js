import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import {signupValidations} from "../configurations/Schemas";
import RootForm from "../commons/RootForm";
import { Layout, Card, Row, Col, Icon } from "antd";

class Signup extends React.Component {
  state = {
    username: "",
    email:"",
    password: "",
    confirmPassword:"",
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
          <Card title="Register" headStyle={{ fontSize: 32 }}>
            <RootForm
              schemaName={signupValidations}
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
                  name: "email",
                  value: this.state.email,
                  handleChanged: this.handleChanged,
                  placeholder: "Email",
                  Type: Input,
                  addonBefore: <Icon type="mail" />
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
                  name: "confirmPassword",
                  value: this.state.confirmPassword,
                  handleChanged: this.handleChanged,
                  placeholder: "Confirm Password",
                  Type: Input,
                  addonBefore: <Icon type="lock" />
                }
              ]}
              submitButton={{ span: 24, buttonText: "Create Account" }}
            />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
}

export default Signup;
