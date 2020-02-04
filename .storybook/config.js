import { configure, addDecorator } from '@storybook/html';
import { withTests } from "@storybook/addon-jest";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11Y } from "@storybook/addon-a11y";
import results from "../jest-test-results.json";
import { addParameters } from '@storybook/html'; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: 'light', value: '#f2edec', default: true },
    { name: 'dark', value: '#4b3d35' },
  ],
});

addDecorator(
  withTests({
    results,
    filesExt: ".spec.ts"
  }),
  withKnobs(),
  withA11Y()
);

const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
