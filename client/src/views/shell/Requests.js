import React from "react";
import { connect } from "react-redux";
import { store } from "../../ConfigureStore";
import { Row, Col } from "antd";
import { openModal } from "../../actions/Modal";
import CardWrapper from "../../commons/card/index";
import UserCard from "../../components/cards/User";
import Icon from "../../components/Icon/index";
import { usersData } from "../../mocks/users";
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const dataUsers = usersData();
function callback(key) {
    console.log(key);
  }
class Requests extends React.Component {
  state = {
    usersdata: dataUsers
  };
  signupRequests = ()=>{
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
             <Col span={6} key={item.username}>
             <CardWrapper className="mainContentDiv"
               actions={[
                 <Icon
                   onClick={() =>
                     this.props.openModal(
                       "User Info",
                       <p>
                         New Registered User Information.
                         Currently not available.
                         No Api available right now to provide data
                       </p>,
                       "Approve",
                       "Reject"
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
  render() {
    console.log("State Users", this.state);
    
    return (
        <React.Fragment>
        <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Signup Requests" key="1">
          {this.signupRequests()}
        </TabPane>
        <TabPane tab="Profile Update Requests" key="2">
          <h3>No Pending Requests Available</h3>
        </TabPane>
      </Tabs>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ storeState: state }),
  { openModal }
)(Requests);
