import React from "react";
import { Formik, Form } from "formik";
import { Row, Col } from "antd";
import Select from "../input/Select";
import Button from "../button/index"

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
        {({ values, 
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit }) => (
          <Form>
            <Row>
              {props.controls.map(val => {
                console.log("Type",val.Type);
                return (<Col key={val.name} span={val.span}>
                  <val.Type
                    password={
                      val.name === "password" || val.name === "confirmPassword"
                        ? true
                        : false
                    }
                    name={val.name}
                    value={values[val.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={val.placeholder}
                    defaultValue={val.Type==Select?val.defaultValue:null}
                    addonBefore={val.addonBefore}
                  >{val.Type==Select ? val.options() : null}</val.Type>
                  {errors[val.name] && touched[val.name] ? (
                    <div>{errors[val.name]}</div>
                  ) : null}
                </Col>
              )})}
            </Row>
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: 8 }}
            >
              <Col span={props.submitButton.span}>
                <Button block onClick={handleSubmit} type="submit">{`${props.submitButton.buttonText}`}</Button>
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
