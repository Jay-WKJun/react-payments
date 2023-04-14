import React, { useCallback, useEffect, useState } from 'react';

import { Card, CardList } from '@/contexts/ApplicationContext';

import { getFromLocalStorage, postToLocalStorage } from './service';
import { App } from './App';

export function Dev() {
  const [cardList, setCardList] = useState<CardList>({});

  useEffect(() => {
    const cardList = getFromLocalStorage();
    if (cardList) {
      setCardList(cardList);
    }
  }, []);

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

  return (
    <App
      cardList={cardList}
      onCardConfirm={(card) => console.log(card)}
      onCardSubmit={handleCardSubmit}
      onCardDelete={handleCardDelete}
      onCardUpdate={handleCardUpdate}
    />
  );
}
