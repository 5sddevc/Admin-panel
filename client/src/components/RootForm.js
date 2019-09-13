import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Formik, Form, Field } from "formik";
import Schema from "../configurations/Schema";
import { Layout, Card, Row, Col, Icon } from "antd";

const loginApiCall = (values)=>{
  console.log(values);
}
const RootForm = (props) => {
  console.log("PROPS", props)
  return (
  <div>
    <h1>Test</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        username:"",
        password:""
      }}
      validationSchema={Schema}
      onSubmit={values => {
        loginApiCall(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Row>
            {props.controls.map((val) => 
              <Col span={val.span}>
                <val.Type
                  password={(val.name==="password")?true:false}
                  name={val.name}
                  placeholder={val.name} 
                  addonBefore ={val.addonBefore}/>
                  {errors[val.name] && touched[val.name] ? (
                    <div>{errors[val.name]}</div>
                  ) : null}
              </Col>
            )}
            </Row>
            <Row type="flex" justify="center" align="middle" style={{justifyContent: "space-between"}}>
            <Col span={props.submitButton.span}>
              <button type="submit">{`${props.submitButton.buttonText}`}</button>
            </Col>
            {props.isLink.status?<Col span={props.isLink.span}>
            <a href={`${props.isLink.url}`}>{`${props.isLink.linktext}`}</a>
              </Col>:null}
          </Row>
        </Form>
      )}
    </Formik>
  </div>
  );
}
  
export default RootForm;
