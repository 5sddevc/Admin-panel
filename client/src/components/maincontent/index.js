import React from "react";
import { Layout} from "antd";
import styled from "styled-components";

const {Content} = Layout;

const StyledContent = styled(Content)`
  background: ${props => props.theme.background.secondary};
//   font-weight: bold;
//   box-shadow: 0 0 0 2px rgba(0, 0, 0, 1);
`;

const ContentWrapper = props => {
  return (
    <StyledContent {...props}>{props.children}</StyledContent>
  );
};

export default ContentWrapper;
