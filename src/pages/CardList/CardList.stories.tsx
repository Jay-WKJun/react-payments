import React, { JSXElementConstructor, useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ApplicationProvider, Card, CardList as CardListModel } from '../../contexts';
import { postToLocalStorage } from '../../service';

import { CardList } from './CardList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardList/CardList',
  component: CardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<JSXElementConstructor<CardListModel>> = (cardListProp) => {
  const [cardList, setCardList] = useState<CardListModel>(cardListProp);

  const handleCardSubmit = useCallback((card: Card, cardId: string) => {
    setCardList((prev) => {
      prev[cardId] = card;
      postToLocalStorage(prev);

      return { ...prev };
    });
  }, []);

  const handleCardDelete = useCallback((card: Card, cardId: string) => {
    setCardList((prev) => {
      delete prev[cardId];
      postToLocalStorage(prev);

      return { ...prev };
    });
  }, []);

  const handleCardUpdate = useCallback((newCard: Card, cardId: string) => {
    setCardList((prev) => {
      prev[cardId] = newCard;
      postToLocalStorage(prev);

      return { ...prev };
    });
  }, []);

  console.log('cardList : ', cardList);

  return (
    <ApplicationProvider
      cardList={cardList}
      onCardSubmit={handleCardSubmit}
      onCardDelete={handleCardDelete}
      onCardUpdate={handleCardUpdate}
    >
      <CardList />
    </ApplicationProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  1: {
    cardCompany: {
      theme: 'red',
      name: '애플카드',
    },
    cardNickname: '사과카드',
    cardNumbers: ['1234', '3321', '5432', '8756'],
    cardOwner: '스타브 잡스',
    expireDates: ['12', '32'],
    passwords: ['3', '3'],
    securityCode: '654',
  },
  2: {
    cardCompany: {
      theme: 'mint',
      name: '도지카드',
    },
    cardNickname: '화성 갈끄니까',
    cardNumbers: ['6553', '1234', '3423', '1234'],
    cardOwner: '일론 머스크',
    expireDates: ['04', '65'],
    passwords: ['2', '9'],
    securityCode: '123',
  },
  3: {
    cardCompany: {
      theme: 'orange',
      name: '마소카드',
    },
    cardNickname: '닉넴 뭐하징',
    cardNumbers: ['4213', '5233', '1235', '4563'],
    cardOwner: '언노운',
    expireDates: ['02', '53'],
    passwords: ['9', '5'],
    securityCode: '423',
  },
};
