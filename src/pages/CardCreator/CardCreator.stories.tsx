import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardProvider } from '../../contexts';

import { CardCreator } from './CardCreator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator',
  component: CardCreator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardCreator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardCreator> = () => {
  return (
    <CardProvider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="root">
          <CardCreator />
        </div>
      </div>
    </CardProvider>
  );
};

export const Primary = Template.bind({});
