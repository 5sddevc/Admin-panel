import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal"
import { store } from "../../configureStore";
import { ThemeContext, theme } from "../../configurations/theme"
import { Layout, Menu, Icon, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const action = (type, payload) => store.dispatch({ type, payload });
class Shell extends React.Component {

  state = {
    collapsedRight: true,
    collapsedLeft:true
  };

  toggleCollapsed = (type) => {
    this.setState({
      [type]: !this.state[type],
    });
  };
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
          <Button type="primary" onClick={() => this.toggleCollapsed("collapsedLeft")} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsedLeft ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        {JSON.stringify(this.context)}
        <Button type="primary" onClick={()=>this.toggleCollapsed("collapsedRight")} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsedRight ? 'menu-fold' : 'menu-unfold'} />
        </Button>
          </Header>
          <Layout>
            <Sider inlineCollapsed={this.state.collapsedLeft} collapsedWidth={0} collapsed={this.state.collapsedLeft}>left sidebar</Sider>
            <Content>main content</Content>
            <Sider inlineCollapsed={this.state.collapsedRight} collapsedWidth={0} collapsed={this.state.collapsedRight}>right sidebar</Sider>
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
