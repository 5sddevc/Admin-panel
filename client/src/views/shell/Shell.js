import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../actions/Modal";
import { store } from "../../ConfigureStore";
import { ThemeContext } from "../../configurations/Theme";
import { Layout } from "antd";
import {menuShow} from "../../configurations/Config";
import HeaderWrapper from "../../components/header/index";
import {
  LeftSideMenuWrapper,
  RightSideMenuWrapper
} from "../../components/sidebars/index";
import ContentWrapper from "../../components/maincontent/index";
import FooterWrapper from "../../components/footer/index";
import Dashboard from "./Dashboard";
import Users from "./Users"; 
import Reports from "./Reports";
import Requests from "./Requests";
import Settings from "./Settings" ;


const action = (type, payload) => store.dispatch({ type, payload });
class Shell extends React.Component {
  state = {
    collapsedRight: true,
    collapsedLeft: true
  };

  toggleCollapsed = type => {
    this.setState({
      [type]: !this.state[type]
    });
  };

  render() {
    console.log("Props shell",this.props);
    return (
      <div className="App">
        <Layout>
          <HeaderWrapper
            style={{ padding: "0px" }}
            state={this.state}
            toggleCollapsed={this.toggleCollapsed}
          />
          <Layout>
            {(menuShow.leftMenu===true)?<LeftSideMenuWrapper state={this.state} />:null}
            <ContentWrapper>
              <Switch>
                <Route exact path ='/' component={Dashboard}/>
                <Route exact path ='/users' component={Users}/>
                <Route exact path ='/reports' component={Reports}/>
                <Route exact path ='/requests' component={Requests}/>
                <Route exact path ='/settings' component={Settings}/>
              </Switch> 
            </ContentWrapper>
            {(menuShow.rightMenu===true)?<RightSideMenuWrapper state={this.state} />: null}
          </Layout>
          <FooterWrapper />
        </Layout>
      </div>
    );
  }
}

Shell.contextType = ThemeContext;

export default connect(
  state => ({ storeState: state }),
  { openModal }
)(Shell);
