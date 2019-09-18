import React from "react";
import { connect } from "react-redux";
import { store } from "../../ConfigureStore";
import { openModal } from "../../actions/Modal";
import { Row, Col, Icon } from "antd";
import CardWrapper from "../../commons/card/index";
import UserCard from "../../components/cards/User";
import { usersData } from "../../mocks/users";

const dataUsers = usersData();
class Users extends React.Component {
  state = {
    usersdata: dataUsers
  };
  render() {
    console.log("State Users", this.state);
    let datatomap = this.state.usersdata;
    return (
      <React.Fragment>
        <Row
          type="flex"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
          justify="space-between"
        >
          <Col span={24}>
            {datatomap.map( item =>
             <Col span={6}>
             <CardWrapper
               actions={[
                 <Icon
                   onClick={() =>
                     this.props.openModal(
                       "Edit User",
                       <p>Edit User Option not available currently</p>
                     )
                   }
                   type="edit"
                   key="edit"
                 />,
                 <Icon
                   onClick={() =>
                     this.props.openModal(
                       "User Info",
                       <p>
                         User info option loads data from api... currently no
                         api available to provide data to show
                       </p>
                     )
                   }
                   type="ellipsis"
                   key="ellipsis"
                 />
               ]}
             >
               <UserCard title={item.username} description={item.description} />
             </CardWrapper>
           </Col>
              
            )}
           
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ storeState: state }),
  { openModal }
)(Users);
