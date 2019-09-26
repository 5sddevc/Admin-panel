import React from "react";
import { Row, Col } from "antd";
import InputWrapper from "../../components/input"
import SelectWrapper from "../../components/input/Select"
import OptionsWrapper from "../../components/input/SelectOptions"
import { FiSearch } from "react-icons/fi";

//Need to make this responsive
const ContentHeader = props => {
    return (
        <Row type="flex" align="middle" justify="space-between">
            <Col>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span className="heading" style={{ fontWeight: "bold" }}>{props.title}</span>
                    <span style={{ display: "inline-block", width: 6, height: 6, margin: "0px 6px", borderRadius: 50, backgroundColor: "#1890ff", }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: "bold" }}>{props.count}</span>
                </div>

            </Col>
            <Col span={9}>
                <Col span={16}>
                    <InputWrapper prefix={<FiSearch />} placeHolder="Search" />
                </Col>
                <Col span={8} style={{ paddingLeft: 15 }}>
                    <SelectWrapper defaultValue="View all" style={{ width: "100%" }}>
                      <OptionsWrapper value="all">View all</OptionsWrapper>
                      <OptionsWrapper value="free">Free</OptionsWrapper>
                      <OptionsWrapper value="subscribed">Subscribed</OptionsWrapper>
                      <OptionsWrapper value="paused">Paused</OptionsWrapper>
                      <OptionsWrapper value="banned">Banned</OptionsWrapper>
                    </SelectWrapper>
                </Col>
                
            </Col>
        </Row>
    )

}

export default ContentHeader;