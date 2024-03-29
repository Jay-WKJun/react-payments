import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardState } from '../../../../contexts';

import { PasswordsInputList } from './PasswordsInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordsInputList',
  component: PasswordsInputList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PasswordsInputList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordsInputList> = ({ passwords }) => {
  return (
    <CardProvider cardInit={{ ...getInitialCardState(), passwords: passwords! }}>
      <CardContext.Consumer>
        {(store) => store && <PasswordsInputList passwords={store.passwords} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  passwords: getInitialCardState().passwords,
};
