import { html } from 'lit-html';
export default {
  title: 'Components/my-component',
  component: 'my-component', // which is also found in the `custom-elements.json`
  argTypes: {},
};

export const Default = args => html`<my-component {...args}></my-component>`;
Default.args = {
  first: 'Stencil',
  last: "Don't call me a framework' JS",
  middle: 'aaa',
};
