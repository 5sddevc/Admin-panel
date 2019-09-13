import React from "react";

import Input from "../components/Input";
import RootForm from "../components/RootForm" ;
import Button from "../components/Button";
import { Layout, Card, Row, Col, Icon } from "antd";

const Testform = () => {
  return (
    <Layout style={{ height: "100vh", justifyContent: "center" }}>
      <Row type="flex" justify="center" align="middle">
        <Col span={8}>
          <Card title="Login" headStyle={{ fontSize: 32 }}>
          <RootForm 
          controls={[{span:24,name: "username", Type: Input, addonBefore:<Icon type="user" />}, 
               {span:24,name: "password", Type: Input, addonBefore:<Icon type="lock" />}]
               } 
          submitButton={{span:8,buttonText:"Login"}}
          isLink={{span:8,status:true,linktext:"Forgot Password?",url:"#"}}
          />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Testform;
