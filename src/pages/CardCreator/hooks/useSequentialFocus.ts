import { useCallback } from 'react';

import type { CardType } from '@/contexts/CardContext';

type AutoFocusFormType = Extract<CardType, 'cardNumbers' | 'expireDates' | 'cardOwner' | 'securityCode' | 'passwords'>;

const formRefIndex: Record<AutoFocusFormType, number> = {
  cardNumbers: 0,
  expireDates: 1,
  cardOwner: 2,
  securityCode: 3,
  passwords: 4,
};

const elementStore: (HTMLElement | null)[][] = [];

export function useSequentialFocus() {
  const setElement = useCallback((element: HTMLElement | null, type: AutoFocusFormType, index = 0) => {
    const elementListIndex = formRefIndex[type];
    const inputElementList = elementStore[elementListIndex];

    if (!inputElementList) {
      elementStore[elementListIndex] = [];
    }
    elementStore[elementListIndex][index] = element;
  }, []);

  const focusNext = useCallback((type: AutoFocusFormType, index = 0) => {
    const elementListIndex = formRefIndex[type];
    const inputElementList = elementStore[elementListIndex];

    if (index >= inputElementList.length - 1) {
      elementStore[elementListIndex + 1]?.[0]?.focus();
      return;
    }

    inputElementList[index + 1]?.focus();
  }, []);

  return {
    focusNext,
    setElement,
  };
}
