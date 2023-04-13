import { useCallback } from 'react';

import type { CardType } from '@/contexts/CardContext';

type AutoFocusFormType = Extract<
  CardType,
  'cardNumbers' | 'expireDates' | 'cardOwners' | 'securityCodes' | 'passwords'
>;

const formRefIndex: Record<AutoFocusFormType, number> = {
  cardNumbers: 0,
  expireDates: 1,
  cardOwners: 2,
  securityCodes: 3,
  passwords: 4,
};

const elementStore: HTMLElement[][] = [];

export function useSequentialFocus() {
  const setElement = useCallback((type: AutoFocusFormType, index: number, element?: HTMLElement | null) => {
    if (!element) return;

    const elementListIndex = formRefIndex[type];
    const inputElementList = elementStore[elementListIndex];

    if (!inputElementList) {
      elementStore[elementListIndex] = [];
    }
    elementStore[elementListIndex][index] = element;
  }, []);

  const focusNext = useCallback((type: AutoFocusFormType, index: number) => {
    const elementListIndex = formRefIndex[type];
    const inputElementList = elementStore[elementListIndex];

    if (index >= inputElementList.length - 1) {
      elementStore[elementListIndex + 1][0].focus();
      return;
    }

    inputElementList[index + 1].focus();
  }, []);

  return {
    focusNext,
    setElement,
  };
}
