import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import ButtonDefault from '../components/button-default';

export default {
  title: 'Example/ButtonDefault',
  component: ButtonDefault,
} as Meta;

export const Primary = () => {
  return <ButtonDefault primary label="Button" />;
};
