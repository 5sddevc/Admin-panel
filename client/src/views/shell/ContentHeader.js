import React from "react";
import { Row, Col } from "antd";
import InputWrapper from "../../components/input"
import SelectWrapper from "../../components/input/Select"
import OptionsWrapper from "../../components/input/SelectOptions"
import Blip from "../../appcomponents/blip";
import { FiSearch } from "react-icons/fi";

//Need to make this responsive
const ContentHeader = props => {
  return (
    <Row type="flex" align="middle" justify="space-between">
      <Col style={{ marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="heading" style={{ fontWeight: "bold" }}>{props.title}</span>
          <Blip color="#1890ff" />
          <span className="small" style={{ fontWeight: "bold" }}>{props.count}</span>
        </div>

      </Col>
      <Col xs={{ span: 24 }} md={{ span: 9 }}>
        <Row gutter={14} >
          <Col style={{ marginBottom: 10 }} xs={{ span: 24 }} sm={{ span: 16 }}>
            <InputWrapper prefix={<FiSearch />} placeHolder="Search" />
          </Col>
          <Col style={{ marginBottom: 10 }} xs={{ span: 24 }} sm={{ span: 8 }}
          //style={{ paddingLeft: 15 }}
          >
            <SelectWrapper defaultValue={props.options ? props.options[0].label : "-"} style={{ width: "100%" }}>
              {props.options ? props.options.map((val => {
                return <OptionsWrapper value={val.value}>{val.label}</OptionsWrapper>
              })) :
                null}
            </SelectWrapper>
          </Col>
        </Row>

      </Col>
    </Row>
  )

}

export default ContentHeader;