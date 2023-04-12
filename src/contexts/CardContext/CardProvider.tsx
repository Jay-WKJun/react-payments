import React, { PropsWithChildren, useMemo, useReducer, useState } from 'react';

import { CardState, CardType, getInitialCardStore } from './initialCardStore';
import { CardContextApi, CardContext, SetOneCardStateProps } from './cardContext';

interface CardProviderProps {
  cardInit?: CardState;
}

export function CardProvider({ cardInit, children }: PropsWithChildren<CardProviderProps>) {
  const [cardState, setCardState] = useState(cardInit || getInitialCardStore());

  const cardContextApis = useMemo(() => {
    function setOneCardState({
      type, index, newState,
    }: SetOneCardStateProps) {
      setCardState((prev) => {
        const newCardStateList = [...prev[type]];
        newCardStateList[index] = newState;

        return {
          ...prev,
          [type]: newCardStateList,
        }
      });
    }

    return { setOneCardState };
  }, []);

  return (
    // eslint-disable-next-line
    <CardContext.Provider value={{ ...cardState }}>
      <CardContextApi.Provider value={cardContextApis}>{children}</CardContextApi.Provider>
    </CardContext.Provider>
  );
}
