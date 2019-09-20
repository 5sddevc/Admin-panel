import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import "antd/dist/antd.css";

addParameters({
  options: {
    theme: themes.dark
  }
})

const req = require.context('../src/', true, /\.stories\.js$/);

const stories = storiesOf('Storybook Knobs', module);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);