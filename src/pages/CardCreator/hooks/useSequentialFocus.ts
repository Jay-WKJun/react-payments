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

const sequentialRefStore: HTMLElement[][] = [];

export function useSequentialFocus() {
  const setRef = useCallback((type: AutoFocusFormType, index: number, ref?: HTMLElement | null) => {
    if (!ref) return;

    const typeRefList = sequentialRefStore[formRefIndex[type]];
    if (!typeRefList) {
      sequentialRefStore[formRefIndex[type]] = [];
    }
    sequentialRefStore[formRefIndex[type]][index] = ref;
  }, []);

  const focusNext = useCallback((type: AutoFocusFormType, index: number) => {
    const typeRefList = sequentialRefStore[formRefIndex[type]];
    if (index >= typeRefList.length - 2) {
      sequentialRefStore[formRefIndex[type] + 1][0].focus();
      return;
    }

    typeRefList[index + 1].focus();
  }, []);

  return {
    focusNext,
    setRef,
  };
}
