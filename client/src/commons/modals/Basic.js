import React from 'react';
import { connect } from "react-redux";
import { Modal } from 'antd';
import styled from "styled-components"

import { closeModal } from "../../actions/Modal"

const BasicModal = (props) => {
  return (
    <Modal
    className={props.className}
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
