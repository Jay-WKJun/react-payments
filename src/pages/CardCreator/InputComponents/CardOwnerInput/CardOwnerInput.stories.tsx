import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardState } from '../../../../contexts';

import { CardOwnerInput } from './CardOwnerInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/CardOwnerInput',
  component: CardOwnerInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardOwnerInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardOwnerInput> = (props) => {
  return (
    <CardProvider cardInit={{ ...getInitialCardState(), cardOwner: props.cardOwner! }}>
      <CardContext.Consumer>{(store) => store && <CardOwnerInput cardOwner={store.cardOwner} />}</CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  cardOwner: getInitialCardState().cardOwner,
};
