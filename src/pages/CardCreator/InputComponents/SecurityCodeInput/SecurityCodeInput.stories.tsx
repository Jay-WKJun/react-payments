import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardState } from '../../../../contexts';

import { SecurityCodeInput } from './SecurityCodeInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/SecurityCodesInputList',
  component: SecurityCodeInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecurityCodeInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityCodeInput> = ({ securityCode }) => {
  return (
    <CardProvider cardInit={{ ...getInitialCardState(), securityCode: securityCode! }}>
      <CardContext.Consumer>
        {(store) => store && <SecurityCodeInput securityCode={store.securityCode} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  securityCode: getInitialCardState().securityCode,
};
