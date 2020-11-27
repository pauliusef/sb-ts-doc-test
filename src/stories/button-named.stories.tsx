import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { ButtonNamed } from '../components/button-named';

export default {
  title: 'Example/ButtonNamed',
  component: ButtonNamed,
} as Meta;

export const Primary = () => {
  return <ButtonNamed primary label="Button" />;
};
