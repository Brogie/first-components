import '@storybook/addon-actions/register';
import "@storybook/addon-jest/register";
import '@storybook/addon-notes/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-backgrounds/register';

import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme: theme,
});
