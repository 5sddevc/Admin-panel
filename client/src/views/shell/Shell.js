import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/Modal";
import { store } from "../../ConfigureStore";
import { ThemeContext, theme } from "../../configurations/Theme";
import { Layout, Menu, Icon, Button } from "antd";
import HeaderContent from "../../commons/header/index";
import HeaderWrapper from "../../components/header/index";

const {Content, Footer, Sider } = Layout;

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
          <HeaderWrapper style={{padding:"0px"}}>
            <HeaderContent
              state={this.state}
              toggleCollapsed={this.toggleCollapsed}
            />
          </HeaderWrapper>
          <Layout>
            <Sider
              inlineCollapsed={this.state.collapsedLeft}
              collapsedWidth={0}
              collapsed={this.state.collapsedLeft}
            >
              left sidebar
            </Sider>
            <Content>main content</Content>
            <Sider
              inlineCollapsed={this.state.collapsedRight}
              collapsedWidth={0}
              collapsed={this.state.collapsedRight}
            >
              right sidebar
            </Sider>
          </Layout>
          <Footer>footer</Footer>
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
