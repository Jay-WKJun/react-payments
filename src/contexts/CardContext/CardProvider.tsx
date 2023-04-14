import React, { PropsWithChildren, useMemo, useState } from 'react';

import { CardState, getInitialCardStore } from './initialCardState';
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

    function setOneCardState({ type, index = 0, newState }: SetOneCardStateProps) {
      setCardState((prev) => {
        if (Array.isArray(prev[type])) {
          // @ts-ignore
          const newCardStateList = [...prev[type]];
          newCardStateList[index] = newState;

          return {
            ...prev,
            [type]: newCardStateList,
          };
        }

        return {
          ...prev,
          [type]: newState,
        };
      });
    }

    return { setOneCardState, initCardState, setCardState };
  }, []);

  return (
    <CardContext.Provider value={cardState}>
      <CardContextApi.Provider value={cardContextApis}>{children}</CardContextApi.Provider>
    </CardContext.Provider>
  );
}
