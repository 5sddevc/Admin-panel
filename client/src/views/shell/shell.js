import React from 'react';
import { connect } from "react-redux";

import Button from '../../components/Button';

import RootModal from "../../commons/modals/rootModal"
import { openModal } from "../../actions/modalActions"

class Shell extends React.Component {

  render() {
    return (
      <div>
        <RootModal />
        <Button type="primary" onClick={() => this.props.openModal("TESTING HEADING", <p>Lorem ipsum</p>)}>
          Open Modal
        </Button>
        <br />
        {/* <Button></Button> */}
        {JSON.stringify(this.props.storeState)}
      </div>
    );
  }
}

export default connect((state) => ({storeState: state}), { openModal })(Shell);