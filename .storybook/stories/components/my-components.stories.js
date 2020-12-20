import { storiesOf } from '@storybook/html';
import notes from '../../../src/components/my-component/readme.md';

storiesOf('components', module)
  .add('sample', () => `
  <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
  `, { notes })
