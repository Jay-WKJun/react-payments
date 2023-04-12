import { useContext } from 'react';

import { CardContextApi, CardContext } from './cardContext';

export function useCardContext() {
  return useContext(CardContext);
}

export function useCardContextApis() {
  return useContext(CardContextApi);
}
