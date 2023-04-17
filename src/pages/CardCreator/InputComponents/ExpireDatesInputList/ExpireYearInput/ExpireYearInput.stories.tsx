import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardState } from '@/contexts/CardContext';

import { ExpireYearInput } from './ExpireYearInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDatesInputList/ExpireYearInput',
  component: ExpireYearInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    index: { control: 'false' },
    needDividerRender: { type: 'boolean' },
  },
} as ComponentMeta<typeof ExpireYearInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireYearInput> = ({ expireYear, ...props }) => {
  return (
    <CardProvider cardInit={{ ...getInitialCardState(), expireDates: [expireYear, expireYear] }}>
      <CardContext.Consumer>
        {(store) => store && <ExpireYearInput expireYear={store.expireDates[props.index]} {...props} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Year = Template.bind({});
export const WithDivider = Template.bind({});

Year.args = {
  expireYear: getInitialCardState().expireDates[1],
  index: 1,
};

WithDivider.args = {
  expireYear: {
    ...getInitialCardState().expireDates[1],
    value: '12',
  },
  index: 1,
};
