import { CardState } from '../CardContext';
import { Card } from '../ApplicationContext';

import { mapValues } from '@/utils';

export function convertCardStateToCard(cardState: CardState): Card {
  // @ts-ignore
  return mapValues(cardState, ([key, state]) => {
    if (Array.isArray(state)) {
      const states = state;
      return [key, states.map((state) => state.value)];
    }

    return [key, state.value];
  });
}

export function convertCardToCardState(card: Card): CardState {
  // @ts-ignore
  return mapValues(card, ([key, value]) => {
    if (Array.isArray(value)) {
      const values = value;
      return [key, values.map((value) => ({ value }))];
    }

    return [key, { value }];
  });
}
