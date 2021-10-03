import { defineCustomElements } from '../dist/esm/loader';
import { setCustomElements } from '@storybook/web-components';

import customElements from '../custom-elements.json';
setCustomElements(customElements);
defineCustomElements();

export const parameters = {
  controls: {
    controls: { expanded: true },
  },
};
