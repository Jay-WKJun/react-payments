import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardState } from '@/contexts/CardContext';

import { CardNumberInput } from './CardNumberInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardNumbersInputList/CardNumberInput',
  component: CardNumberInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    index: { control: 'false' },
    needDividerRender: { type: 'boolean' },
  },
} as ComponentMeta<typeof CardNumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardNumberInput> = ({ cardNumber, index, needDividerRender, type }) => {
  return (
    <CardProvider
      cardInit={{ ...getInitialCardState(), cardNumbers: [{ ...getInitialCardState().cardNumbers[0], ...cardNumber }] }}
    >
      <CardContext.Consumer>
        {(store) =>
          store && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100px',
                }}
              >
                <CardNumberInput
                  type={type}
                  cardNumber={store.cardNumbers[0]}
                  index={index}
                  needDividerRender={needDividerRender}
                />
              </div>
            </div>
          )
        }
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});
export const WithDivider = Template.bind({});
export const SecreteValue = Template.bind({});

Primary.args = {
  index: 0,
  cardNumber: getInitialCardState().cardNumbers[0],
};

WithDivider.args = {
  cardNumber: getInitialCardState().cardNumbers[0],
  index: 0,
  needDividerRender: true,
};

SecreteValue.args = {
  type: 'password',
  cardNumber: getInitialCardState().cardNumbers[0],
  index: 0,
  needDividerRender: true,
};
