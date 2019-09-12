import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Formik, Form, Field } from "formik";
import Schema from "../configurations/Schema";
import { Layout, Card, Row, Col, Icon } from "antd";

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
      }}
      validationSchema={Schema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Row>
            {props.controls.map((val) => 
              <Col span={val.span}>
                <val.Type name={val.name} 
                addonBefore ={val.addonBefore}/>
                {errors[val.name] && touched[val.name] ? (
                  <div>{errors[val.name]}</div>
                ) : null}
              </Col>
            )}
            </Row>
            <Row>
            <Col>
              <button type="submit">Submit</button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  </div>
  );
}
  
export default RootForm;
