import React from 'react';
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { Modal } from 'antd';

import { closeModal } from "../../actions/modalActions"

const BasicModal = (props) => {
  console.log("MODAL PROPS", props.title)
  return (
    <Modal
    title={props.title}
    visible={props.visible}
    onOk={() => props.dispatch(closeModal())}
    onCancel={() => props.dispatch(closeModal())}
    >
      {props.content}
    </Modal>
  )
}

export default connect()(BasicModal);