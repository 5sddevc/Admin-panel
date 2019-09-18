import { configure } from '@storybook/react';
import { addParameters } from "@storybook/react";
import { themes } from '@storybook/theming';
// import { addDecorator } from '@storybook/react';
// import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import "antd/dist/antd.css";
// import { theme } from '../src/configurations/Theme'

addParameters({
  options: {
    theme: themes.dark
  }
})
// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);

// const themes = [theme.light, theme.dark];
// addDecorator(withThemesProvider(themes));

const req = require.context('../src/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);