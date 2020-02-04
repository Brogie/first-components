# First Components

This is a sample component library implemented with Stencil.JS it contains a documentation project in StoryBook.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/Brogie/first-components.git
cd first-components
```

and run:

```bash
npm install
npm start
```

To build the component for development and open the storybook:

```bash
npm run devenv
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Making new components

When creating new component remember to use the standard format of `k-*` for example `k-button` or `k-card-footer`.

To generate a new component run `npm run generate` and follow the instructions, remember to have all files checked to generate. You should now change the css file into an scss.

## Using this component library

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/first-components@0.0.1/dist/first-components.js'></script>` in the head of your index.html
- Update the version number in the above script to the latest NPM package
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install first-components --save`
- Put a script tag similar to this `<script src='node_modules/first-components/dist/first-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
- If you are using a framework library use the guides [here](https://stenciljs.com/docs/overview) that are relevant to you