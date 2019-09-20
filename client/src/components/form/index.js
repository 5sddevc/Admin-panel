import React from "react";
import moment from "moment";
import { Formik, Form } from "formik";
import { Row, Col, Radio, TimePicker, DatePicker, MonthPicker } from "antd";
import Select from "../input/Select";
import Button from "../button/index";
import Input from "../input/index";
import TextArea from "../input/TextArea";

const loginApiCall = values => {
  console.log(values);
};

function onChangeTime(time, timeString) {
  let newTimeString = moment(time).format("HH:mm:ss");
  return newTimeString;
}
function onChangeDate(time, timeString) {
  let newTimeString = moment(time).format("YYYY-MM-DD HH:mm:ss");
  return newTimeString;
}
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
        {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <Form>
            <Row>
              {props.controls.map(val => {
                //  console.log("Type",val.Type);
                return (
                  <Col key={val.name} span={val.span}>
                    <val.Type
                      password={
                        val.name === "password" ||
                        val.name === "confirmPassword"
                          ? true
                          : false
                      }
                      name={val.name}
                      value={values[val.name]}
                      rows={val.Type == TextArea ? val.rows : null}
                      onChange={e => {
                        console.log("OnChange Event", e);
                        if (
                          val.Type == Input ||
                          (val.Type == Radio.Group || val.Type == TextArea)
                        ) {
                          handleChange(e);
                        } else if (val.Type == TimePicker) {
                          let newt = onChangeTime(e);
                          let newtval = moment(newt, "HH:mm:ss");
                          let obj = {
                            target: {
                              name: val.name,
                              value: newtval
                            }
                          };
                          handleChange(obj);
                        } else if (val.Type == DatePicker) {
                          let newt = onChangeDate(e);
                          let newtval = moment(newt, "YYYY-MM-DD HH:mm:ss");
                          let obj = {
                            target: {
                              name: val.name,
                              value: newtval
                            }
                          };
                          handleChange(obj);
                        } else if (val.Type == Select) {
                          let obj = {
                            target: {
                              name: val.name,
                              value: e
                            }
                          };
                          handleChange(obj);
                        }
                        //values[e.target.name] = e.target.value;
                      }}
                      onBlur={handleBlur}
                      placeholder={val.Type != Select ? val.placeholder : null}
                      defaultValue={
                        val.Type == Select ? "val.defaultValue" : null
                      }
                      addonBefore={val.addonBefore}
                    >
                      {val.Type == Select || val.Type == Radio.Group
                        ? val.options()
                        : null}
                    </val.Type>
                    {errors[val.name] && touched[val.name] ? (
                      <div>{errors[val.name]}</div>
                    ) : null}
                  </Col>
                );
              })}
            </Row>
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: 8 }}
            >
              <Col span={props.submitButton.span}>
                <Button
                  block
                  onClick={handleSubmit}
                  type="submit"
                >{`${props.submitButton.buttonText}`}</Button>
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
