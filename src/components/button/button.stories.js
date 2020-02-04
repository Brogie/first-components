import {storiesOf} from "@storybook/html";
import readme from "./readme.md";
import {withKnobs, text, select} from "@storybook/addon-knobs";
import {withA11y} from "@storybook/addon-a11y";
import {themes} from "@storybook/theming/dist/create";
import {withOptions} from "@storybook/addon-options";


// storiesOf('Test Component', module)
//   .addParameters({ jest: ["button"] })
//   .add('Default', () => '<k-button color="primary" type="raised">Test</k-button>', {
//     notes: {
//       markdown: readme
//     }
//   });

const stories = storiesOf('K Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);
stories.addDecorator(  withOptions({
  theme: themes.light
}));
stories.addParameters({jest: ["button"], notes: {markdown: readme}});

const colorOptions = {
  Primary: 'primary',
  Danger: 'danger',
  Plain: 'plain'
};

const typeOptions = {
  Basic: 'basic',
  Raised: 'raised',
  Outline: 'outline',
  Flat: 'flat'
};

stories.add('with a button', () =>
    `<k-button margin="5px" color="${select('color', colorOptions, 'primary')}" type="${select('type', typeOptions, 'basic')}" >
      ${text('Content', 'Button')}
    </k-button>`
);
// // Knobs as dynamic variables.
// stories.add('as dynamic variables', () => {
//   const name = text('Name', 'Arunoda Susiripala');
//   const age = number('Age', 89);
//   const content = `I am ${name} and I'm ${age} years old.`;
//   return `<div>${content}</div>`;
// });
