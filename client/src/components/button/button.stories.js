import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ButtonWrapper from './index';

export const buttonProp = {
  block: false,
  children: 'Button',
  loading: false,
}

export const functionProp = {
  onClick: action('Click Event'),
}

storiesOf('AntDesign Button', module)
  .add('Default', () => <ButtonWrapper {...buttonProp} {...functionProp}/>)
  .add('Loading', () => <ButtonWrapper block={false} children={"Loading"} loading={true} {...functionProp} />)