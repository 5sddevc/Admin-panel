import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modalActions";
import { store } from "../../configureStore";
import { Layout, Menu, Icon, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const action = (type, payload) => store.dispatch({ type, payload });
class Shell extends React.Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
          </Header>
          <Layout>
            <Sider triger={null} collapsible={true} collapsedWidth={0}>left sidebar</Sider>
            <Content>main content</Content>
            <Sider collapsible={true} collapsedWidth={0} defaultCollapsed={true}>right sidebar</Sider>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default connect(
  state => ({ storeState: state }),
  { openModal }
)(Shell);
