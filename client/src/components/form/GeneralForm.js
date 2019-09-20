import React from "react";
import moment from "moment";
import { Layout, Row, Col, Radio, TimePicker, MonthPicker } from "antd";
import Input from "../input/index";
import TextArea from "../input/TextArea";
import Button from "../button/index";
import RootForm from "../form/index";
import Card from "../card/index";
import Icon from "../Icon/index";
import Select from "../input/Select";
import Option from "../input/SelectOptions";
import DatePicker from "../datepickers/DatePicker";
import Switch from "../switch/index";
import { loginValidations } from "../../configurations/Schemas";

class GeneralForm extends React.Component {
  state = {
    username: "",
    password: "",
    description: "",
    switch: false,
    select: "Select a person",
    radio: "",
    date: moment("2019-09-24 00:00:00", "YYYY-MM-DD HH:mm:ss"),
    time: moment("00:00:00", "HH:mm:ss")
  };
  handleChanged = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("General Form State", this.state);
    return (
      <Layout style={{ height: "100vh", justifyContent: "center" }}>
        <Row type="flex" justify="center" align="middle">
          <Col span={16}>
            <Card title="General Form" headStyle={{ fontSize: 32 }}>
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
                    name: "description",
                    value: this.state.description,
                    handleChanged: this.handleChanged,
                    placeholder: "Write Some Description",
                    Type: TextArea,
                    rows: 3,
                    addonBefore: <Icon type="lock" />
                  },
                  {
                    span: 24,
                    name: "switch",
                    value: this.state.switch,
                    handleChanged: this.handleChanged,
                    Type: Switch,
                    addonBefore: <Icon type="lock" />
                  },
                  {
                    span: 24,
                    name: "select",
                    value: this.state.select,
                    handleChanged: this.handleChanged,
                    placeholder: "jack",
                    Type: Select,
                    defaultValue: "jack",
                    options: () => [
                      <Option value="jack">Jack</Option>,
                      <Option value="lucy">Lucy</Option>
                    ],
                    addonBefore: <Icon type="lock" />
                  },
                  {
                    span: 24,
                    name: "time",
                    value: this.state.time,
                    handleChanged: this.handleChanged,
                    Type: TimePicker,
                    defaultOpenValue: () => {
                      return moment("00:00:00", "HH:mm:ss");
                    },
                    addonBefore: <Icon type="lock" />
                  },
                  {
                    span: 24,
                    name: "date",
                    value: this.state.date,
                    handleChanged: this.handleChanged,
                    Type: DatePicker,
                    defaultOpenValue: () => {
                      return moment(
                        "2019-09-24 00:00:00",
                        "YYYY-MM-DD HH:mm:ss"
                      );
                    },
                    addonBefore: <Icon type="lock" />
                  },
                  {
                    span: 24,
                    name: "radio",
                    value: this.state.radio,
                    handleChanged: this.handleChanged,
                    Type: Radio.Group,
                    options: () => [
                      <Radio value={1}>A</Radio>,
                      <Radio value={2}>B</Radio>,
                      <Radio value={3}>C</Radio>,
                      <Radio value={4}>D</Radio>
                    ],
                    addonBefore: <Icon type="lock" />
                  }
                ]}
                submitButton={{ span: 8, buttonText: "Submit" }}
                isLink={{
                  span: 8,
                  status: "true",
                  linktext: "",
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

export default GeneralForm;
