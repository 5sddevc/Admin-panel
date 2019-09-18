import React from "react";
import { Row, Col, Icon } from "antd";
import CardWrapper from "../../commons/card/index";
import UserCard from "../../components/cards/User";
import styled from "styled-components";

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const CardWrappered = styled(CardWrapper)`
  margin-bottom: ${props => props.theme[props.theme.mode].spacing}px;
`
const Users = () => {
  return (
    <React.Fragment>
      <Row
        type="flex"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
        justify="space-between"
      >
        <Col span={6}>
          <CardWrappered className="mainContentDiv"
            actions={[
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <UserCard
              title={"test title"}
              description={"Description"}

            />
          </CardWrappered>
        </Col>
        <Col span={6}>
          <CardWrappered className="mainContentDiv"
            actions={[
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <UserCard
              title={"test title"}
              description={"Description"}

            />
          </CardWrappered>
        </Col>
        <Col span={6}>
          <CardWrappered className="mainContentDiv"
            actions={[
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <UserCard
              title={"test title"}
              description={"Description"}

            />
          </CardWrappered>
        </Col>
        <Col span={6}>
          <CardWrappered className="mainContentDiv"
            actions={[
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <UserCard
              title={"test title"}
              description={"Description"}

            />
          </CardWrappered>
        </Col>
        <Col span={6}>
          <CardWrappered className="mainContentDiv"
            actions={[
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
          >
            <UserCard
              title={"test title"}
              description={"Description"}

            />
          </CardWrappered>
        </Col>

      </Row>
    </React.Fragment>
  );
};
export default Users;
