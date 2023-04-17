import React, { PropsWithChildren, useMemo } from 'react';

import { entryObject } from '@/utils';

import type { ApplicationContextProps } from './type';
import { CardSchema } from './type';
import { ApplicationContext } from './applicationContext';

export interface ApplicationProviderProps extends Partial<ApplicationContextProps> {}

export function ApplicationProvider({
  cardList = {},
  onCardConfirm = (card, cardId) => console.log(`Confirm card : ${card} cardId : ${cardId}`),
  onCardDelete = (card, cardId) => console.log(`Delete card : ${card} cardId : ${cardId}`),
  onCardUpdate = (card, cardId) => console.log(`Update card : ${card} cardId : ${cardId}`),
  onCardSubmit = (card, cardId) => console.log(`Submit card : ${card} cardId : ${cardId}`),
  children,
}: PropsWithChildren<ApplicationProviderProps>) {
  const AppContextValue = useMemo(() => {
    // cardList 형태 확인
    entryObject(cardList).forEach(([cardId, card]) => {
      CardSchema.parse(card);
    });

    if (typeof onCardConfirm !== 'function') {
      throw new Error('onCardConfirm Prop에는 function만 넣어주세요.');
    }
    if (typeof onCardDelete !== 'function') {
      throw new Error('onCardDelete Prop에는 function만 넣어주세요.');
    }
    if (typeof onCardUpdate !== 'function') {
      throw new Error('onCardUpdate Prop에는 function만 넣어주세요.');
    }
    if (typeof onCardSubmit !== 'function') {
      throw new Error('onCardSubmit Prop에는 function만 넣어주세요.');
    }

    return { cardList, onCardConfirm, onCardUpdate, onCardDelete, onCardSubmit };
  }, [cardList, onCardConfirm, onCardDelete, onCardSubmit, onCardUpdate]);

  return <ApplicationContext.Provider value={AppContextValue}>{children}</ApplicationContext.Provider>;
}
