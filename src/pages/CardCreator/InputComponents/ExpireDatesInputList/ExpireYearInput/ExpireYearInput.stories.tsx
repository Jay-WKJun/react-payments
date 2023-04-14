import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardStore } from '@/contexts/CardContext';

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
    <CardProvider cardInit={{ ...getInitialCardStore(), expireDates: [expireYear!, expireYear!] }}>
      <CardContext.Consumer>
        {/* @ts-ignore */}
        {(store) => store && <ExpireYearInput expireDate={store.expireDates[props.index]} {...props} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Month = Template.bind({});
export const Year = Template.bind({});
export const WithDivider = Template.bind({});

Month.args = {
  // @ts-ignore
  expireDate: getInitialCardStore().expireDates[0],
  index: 0,
};

WithDivider.args = {
  // @ts-ignore
  expireDate: {
    ...getInitialCardStore().expireDates[0],
    value: '12',
  },
  index: 0,
};
