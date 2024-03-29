import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardState } from '../../../../../contexts';

import { PasswordInput } from './PasswordInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/PasswordsInputList/PasswordInput',
  component: PasswordInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PasswordInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PasswordInput> = ({ password, ...props }) => {
  return (
    <CardProvider cardInit={{ ...getInitialCardState(), passwords: [password!] }}>
      <CardContext.Consumer>
        {(store) => store && <PasswordInput password={store.passwords[0]} {...props} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  password: getInitialCardState().passwords[0],
  index: 0,
};
