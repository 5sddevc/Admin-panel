import React from "react";
import { Row, Col, Icon } from "antd";
import CardWrapper from "../../commons/card/index";
import UserCard from "../../components/cards/User";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
const Users = () => {
  return (
    <React.Fragment>
      <Row
        type="flex"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
        justify="space-between"
      >
        <Col span={24}>
          <Col span={6}>
            <CardWrapper
              actions={[
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <UserCard  
                title ={"test title"}
                description={"Description"}

              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper
              actions={[
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <UserCard  
                title ={"test title"}
                description={"Description"}

              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper
              actions={[
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <UserCard  
                title ={"test title"}
                description={"Description"}

              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper
              actions={[
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <UserCard  
                title ={"test title"}
                description={"Description"}

              />
            </CardWrapper>
          </Col>
          <Col span={6}>
            <CardWrapper
              actions={[
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <UserCard  
                title ={"test title"}
                description={"Description"}

              />
            </CardWrapper>
          </Col>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Users;
