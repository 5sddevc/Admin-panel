import React from 'react';
import { connect } from "react-redux";

//import { Modal } from 'antd';

import BasicModal from "./Basic"
import styled from "styled-components"


class RootModal extends React.Component {
 
  modalComponent = {
    basic_modal: BasicModal
  }

  render() {
    if (!this.props.modals.length > 0) {
      return null;
    }
    const ModalsToRender = this.props.modals.map((val) => {
      let ModalToRender = this.modalComponent[val.modalType];
      return <ModalToRender className={this.props.className} {...val.modalProps} />
    })
    return (
      <div>
        {ModalsToRender.map((val) => val)}
      </div>
    );
  }
}

const StyledModal = styled(RootModal)`
color: ${props => props.theme[props.theme.mode].textColor.primary};

&& .ant-modal-content i {
  color: ${props => props.theme[props.theme.mode].textColor.primary};
}

&& .ant-modal-header {
  background: ${props => props.theme[props.theme.mode].background.tertiary};
  color: ${props => props.theme[props.theme.mode].textColor.primary};
  border-color: ${props => props.theme[props.theme.mode].border}
}

&& .ant-modal-title {
  color: ${props => props.theme[props.theme.mode].textColor.primary};
}

&& .ant-modal-body, .ant-modal-footer {
  background: ${props => props.theme[props.theme.mode].background.primary};
  border-color: ${props => props.theme[props.theme.mode].border}
}
`;

const ModalWrapper = props => {
  return (
    <StyledModal {...props}></StyledModal>
  );
};

export default connect((state) => state.Modal)(ModalWrapper);