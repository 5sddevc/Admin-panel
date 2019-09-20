import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ButtonWrapper from './Button';

export const buttonProp = {
  block: false,
  children: 'Button',
  loading: false,
}

export const functionProp = {
  onClick: action('Click Event'),
}

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.add('Default', () => <ButtonWrapper {...buttonProp} {...functionProp}/>);
stories.add('Loading', () => <ButtonWrapper block={false} children={"Loading"} loading={true} {...functionProp}/>);
stories.add('Disabled', () => <ButtonWrapper block={false} children={"Disabled"} disabled={true} {...functionProp}/>);

stories.add('Dynamic Props', () => {
  const name = text('children', 'Buttons');
  const loading = boolean('loading', false);
  const disabled = boolean('disabled', false);
  return (<ButtonWrapper  children={name} loading={loading} disabled={disabled} />)
});