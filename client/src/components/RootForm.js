import React from "react";
import { Formik, Form } from "formik";
import { Row, Col } from "antd";

const loginApiCall = values => {
  console.log(values);
};
const RootForm = props => {
  console.log("PROPS", props);
  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        enableReinitialize={true}
        validationSchema={props.schemaName}
        onSubmit={values => {
          loginApiCall(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              {props.controls.map(val => (
                <Col key={val.name} span={val.span}>
                  <val.Type
                    password={
                      val.name === "password" || val.name === "conformPassword"
                        ? true
                        : false
                    }
                    name={val.name}
                    value={val.value}
                    onChange={e => {
                      val.handleChanged(e);
                      console.log(val);
                    }}
                    placeholder={val.placeholder}
                    addonBefore={val.addonBefore}
                  />
                  {errors[val.name] && touched[val.name] ? (
                    <div>{errors[val.name]}</div>
                  ) : null}
                </Col>
              ))}
            </Row>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ justifyContent: "space-between", paddingTop: 8 }}
            >
              <Col span={props.submitButton.span}>
                <button type="submit">{`${props.submitButton.buttonText}`}</button>
              </Col>
              {typeof props.isLink !== "undefined" ? (
                <Col span={props.isLink.span}>
                  <a
                    href={`${props.isLink.url}`}
                  >{`${props.isLink.linktext}`}</a>
                </Col>
              ) : null}
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RootForm;
