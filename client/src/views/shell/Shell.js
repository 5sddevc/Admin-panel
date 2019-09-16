import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/Modal";
import { store } from "../../ConfigureStore";
import { ThemeContext, theme } from "../../configurations/Theme";
import { Layout, Menu, Icon, Button } from "antd";
import HeaderWrapper from "../../components/header/index";
import {
  LeftSideMenuWrapper,
  RightSideMenuWrapper
} from "../../components/sidebars/index";
import MainContentWrapper from "../../components/maincontent/index";
import FooterWrapper from "../../components/footer/index";

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
    return (
      <div className="App">
        <Layout>
          <HeaderWrapper
            style={{ padding: "0px" }}
            state={this.state}
            toggleCollapsed={this.toggleCollapsed}
          />
          <Layout>
            <LeftSideMenuWrapper state={this.state} />
            <MainContentWrapper/>
            <RightSideMenuWrapper state={this.state} />
          </Layout>
          <FooterWrapper/>
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
