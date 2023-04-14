import { Dispatch, SetStateAction, createContext } from 'react';

import type { CardState, CardType } from './initialCardStore';

export interface SetOneCardStateProps {
  type: CardType;
  index: number;
  newState: CardState[CardType][number];
}

type CardContextApiType = {
  setOneCardState: (prop: SetOneCardStateProps) => void;
  initCardState: () => void;
  setCardState: Dispatch<SetStateAction<CardState>>;
};

export const CardContext = createContext<CardState | null>(null);
export const CardContextApi = createContext<CardContextApiType | null>(null);
