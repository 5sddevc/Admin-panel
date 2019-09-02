import React from 'react';
import { connect } from "react-redux";

import Button from '../../components/Button';

import RootModal from "../../commons/modals/rootModal"

class Shell extends React.Component {

  render() {
    return (
      <div>
        <RootModal />
        {/* <Button></Button> */}
        {JSON.stringify(this.props.storeState)}
      </div>
    );
  }
}

export default connect((state) => ({storeState: state}), null)(Shell);