import React, { JSXElementConstructor, useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, ApplicationProvider, Card, CardList, CardState } from '../../contexts';
import { postToLocalStorage } from '../../service';

import { CardNicknameSetter } from './CardNicknameSetter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardNicknameSetter/CardNicknameSetter',
  component: CardNicknameSetter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardNicknameSetter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<JSXElementConstructor<CardState>> = (cardState) => {
  const [cardList, setCardList] = useState<CardList>({});

  const handleCardSubmit = useCallback((card: Card, cardId: string) => {
    setCardList((prev) => {
      prev[cardId] = card;
      postToLocalStorage(prev);

      return { ...prev };
    });
  }, []);

  console.log('cardList : ', cardList);

  return (
    <ApplicationProvider cardList={cardList} onCardSubmit={handleCardSubmit}>
      <CardProvider cardInit={cardState}>
        <CardContext.Consumer>{(store) => store && <CardNicknameSetter />}</CardContext.Consumer>
      </CardProvider>
    </ApplicationProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  cardCompany: {
    value: {
      theme: 'orange',
      name: 'Card Company',
    },
  },
  cardNumbers: [{ value: '1234' }, { value: '4567' }, { value: '8901' }, { value: '5432' }],
  cardOwner: { value: 'Owner Name' },
  expireDates: [{ value: '02' }, { value: '45' }],
  passwords: [{ value: '2' }, { value: '8' }],
  securityCode: { value: '321' },
};
