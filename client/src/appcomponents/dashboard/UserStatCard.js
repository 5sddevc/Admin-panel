import React from "react";
import { Skeleton, Row, Col } from "antd";
import CardWrapper from "../../components/card";




const UserStatCard = props => 
  (<CardWrapper className={props.styledClass}>
    <Skeleton loading={props.loading} avatar active>
      <div style={{ textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: props.iconColor, width: 40, height: 40, fontSize: "1.3rem", borderRadius: 8, backgroundColor: props.iconBack }}>
          {props.icon}
        </div>
        <p className="sub-heading headingColor" style={{ margin: "14px 0px 2px 0px", fontWeight: "bold" }}>{props.title}</p>
        <p className="normal hintColor" style={{ margin: "2px 0px 14px 0px", fontWeight: "bold" }}>{props.amount}</p>
      </div>
    </Skeleton>
  </CardWrapper>)

export default UserStatCard;