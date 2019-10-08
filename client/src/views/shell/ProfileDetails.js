import React from "react";
import TagWrapper from "../../components/tag";
import SwitchWrapper from "../../components/switch";
import AvatarWrapper from "../../components/avatar";
import ButtonWrapper from "../../components/button/Button";
import CardWrapper from "../../components/card";
import Blip from "../../appcomponents/blip"
import { 
  FiArrowLeft,
  FiInfo,
  FiHome,
  FiPhone,
  FiCalendar,
  FiKey,
  FiHeart,
  FiBook,
  FiBriefcase,
  FiActivity,
  FiInstagram} from "react-icons/fi"

import { withTheme } from "styled-components";
import { Row, Col } from "antd";
//Extra card padding style as well as tagwrapper styles, how to manage font sizes and main screen padding on variable screen sizes
const ProfileDetails = (props) => {
  return (
    <div style={{
      position: "fixed",
      textAlign: "left",
      height: "100%",
      //padding: "0px 100px",
      padding: `0px ${props.theme[props.theme.mode].spacing.mainscreen}px`,
      // backgroundColor: props.theme[props.theme.mode].background.secondary,
      backgroundColor: props.theme[props.theme.mode].background.primary,
      width: "100%",
      top: 0,
      left: 0,
      overflow: "auto",
      zIndex: 100
    }} >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div onClick={props.handleOpen} style={{ display: "flex", alignItems: "center", cursor: "pointer", fontWeight: "600" }}>
          {/* <ButtonWrapper> */}
            <FiArrowLeft style={{ marginRight: 6, fontSize: "1.4rem", color: props.theme[props.theme.mode].primary.main }}/>
          {/* </ButtonWrapper> */}
          Profile Details
        </div>
        <div>
          <AvatarWrapper icon="user" />
        </div>
      </div>
      <Row gutter={14} style={{ marginTop: props.theme[props.theme.mode].spacing.outer }}>
        <Col className="mainContentDiv" span={7}>
          <Row>
            <Col style={{ marginTop: 10 }} className="mainContentDivSmall" span={24}>
              <CardWrapper className="extraPadding">
                <Row style={{ flexWrap: "nowrap", marginTop: 12}} gutter={10} type="flex" align="bottom">
                  <Col>
                    <div style={{ width: 100, height: 130, borderRadius: props.theme[props.theme.mode].card.borderRadius, backgroundColor: "yellow" }}>

                    </div>
                  </Col>
                  <Col>
                    <div style={{}}>
                      <TagWrapper>Basic Plan</TagWrapper>
                    </div>
                    <div className="sub-heading" style={{ marginTop: 5, fontWeight: "bold" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", whiteSpace: "nowrap", alignItems: "center" }}>
                        Barbara Hudson<Blip small color="#1890ff" />23
                      </div>
                    </div>
                    <div className="small hintColor" style={{ wordBreak: "break-word", fontWeight: "600" }}>
                      barbarahudson@gmail.com
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: 22, marginBottom: -3 }} type="flex" align="middle" justify="space-between">
                  <Col>
                    User is Active
                  </Col>
                  <Col>
                    <SwitchWrapper />
                  </Col>
                </Row>
              </CardWrapper>
            </Col>
            <Col span={24}>
              <CardWrapper className="extraPadding" >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiInfo style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />Hi, I'm here to meet someone!
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiHome style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />London
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiPhone style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />(213)539-0143
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiCalendar style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />07/04/1996
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiKey style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />Female
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiHeart style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />Both
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiBook style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />London School Of Business
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiBriefcase style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />Consultant
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiActivity style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} />Barclays
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <FiInstagram style={{ fontSize: "1.2rem", marginRight: 10, color: props.theme[props.theme.mode].primary.main }} /><a href="#">@barbhudson</a>
                </div>
              </CardWrapper>
            </Col>
          </Row>
        </Col>
        <Col className="mainContentDiv" span={15}>
          <div style={{ fontWeight: "bold" }} className="mainContentDivSmall heading">Photos</div>
          <Row className="mainContentDivSmall"  gutter={14}>
            <Col className="mainContentDivMedium" span={6}>
              <div style={{ height: 180, borderRadius: props.theme[props.theme.mode].card.borderRadius,  backgroundColor: "yellow" }}>

              </div>
            </Col>
            <Col className="mainContentDivMedium" span={6}>
              <div style={{ height: 180, borderRadius: props.theme[props.theme.mode].card.borderRadius, backgroundColor: "yellow" }}>

              </div>
            </Col>
            <Col className="mainContentDivMedium" span={6}>
              <div style={{ height: 180, borderRadius: props.theme[props.theme.mode].card.borderRadius, backgroundColor: "yellow" }}>

              </div>
            </Col>
            <Col className="mainContentDivMedium" span={6}>
              <div style={{ height: 180, borderRadius: props.theme[props.theme.mode].card.borderRadius, backgroundColor: "yellow" }}>

              </div>
            </Col>
            <Col className="mainContentDivMedium" span={6}>
              <div style={{ height: 180, borderRadius: props.theme[props.theme.mode].card.borderRadius, backgroundColor: "yellow" }}>

              </div>
            </Col>
          </Row>

          <div style={{ fontWeight: "bold" }} className="mainContentDivSmall heading">Subscription Details</div>
          <CardWrapper className="mainContentDivSmall extraPadding">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Plan</span>
              <span>Basic Plan - $2.00/month</span>
            </div>
          </CardWrapper>
          <CardWrapper className="mainContentDivSmall extraPadding">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Expiring</span>
              <span>14 - Oct - 2019</span>
            </div>
          </CardWrapper>
          <CardWrapper className="mainContentDivSmall extraPadding">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Billed On</span>
              <span>15th of Each Month</span>
            </div>
          </CardWrapper>
        </Col>
      </Row>
    </div>
  )
}

export default withTheme(ProfileDetails);