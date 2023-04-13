import React, { PropsWithChildren, useMemo, useState } from 'react';

import { CardState, getInitialCardStore } from './initialCardStore';
import { CardContextApi, CardContext, SetOneCardStateProps } from './cardContext';

interface CardProviderProps {
  cardInit?: CardState;
}

export function CardProvider({ cardInit, children }: PropsWithChildren<CardProviderProps>) {
  const [cardState, setCardState] = useState(cardInit || getInitialCardStore());

  const cardContextApis = useMemo(() => {
    function initCardState() {
      setCardState(getInitialCardStore());
    }

    function setOneCardState({ type, index, newState }: SetOneCardStateProps) {
      setCardState((prev) => {
        const newCardStateList = [...prev[type]];
        newCardStateList[index] = newState;

        return {
          ...prev,
          [type]: newCardStateList,
        };
      });
    }

    return { setOneCardState, initCardState };
  }, []);

  return (
    <CardContext.Provider value={cardState}>
      <CardContextApi.Provider value={cardContextApis}>{children}</CardContextApi.Provider>
    </CardContext.Provider>
  );
}
